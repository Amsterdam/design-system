# @license EUPL-1.2+
# Copyright Gemeente Amsterdam
"""Delete obsolete GitHub Deployments for a repo.

Default scope (always on): `demo-*` deployments whose branch is gone.
A deployment targeting environment `demo-X` is obsolete when no remote branch
matches `X` after stripping the leading `<prefix>/` segment from the branch
name — the same transform feature-branch-deploy.yml applies.

Optional scope (--include-production): `github-pages` and `demo-develop`
deployments. The branch-existence check doesn't apply (those branches always
exist); instead candidates must pass --stale-days, and the KEEP_LATEST_PER_ENV
newest deployments per env (by created_at) are protected as the live deploy +
rollback target. GitHub auto-deactivates older deployments per env, so this
is a cheap proxy for a per-deployment status check.

Required env vars:
    GITHUB_TOKEN  Token with repository Deployments: write.
    REPO          owner/name slug.

Safety guards:
- Defaults to dry-run.
- Aborts if the branch list comes back empty (likely API/auth issue;
  proceeding could target all demo-* deployments).
- Aborts if more than MAX_DELETES are slated for deletion, unless
  --i-really-mean-it is passed.
- Candidate selection uses branch matching and stale_days filtering.
- Production candidates are pre-filtered by deployment state to skip any
  currently-live, in-progress, queued, or pending deployment.
"""
from __future__ import annotations

import argparse
import datetime
import sys

import requests

from cleanup_common import (
    build_session,
    fetch_branch_short_names,
    get_required_env,
    paginate,
    parse_updated_at,
    validate_stale_days,
    REQUEST_TIMEOUT,
)

DEMO_PREFIX = "demo-"
MAX_DELETES = 25
PRODUCTION_ENVS = frozenset({"github-pages", "demo-develop"})
# Newest N deployments per production env to protect: index 0 is the live
# deploy, index 1 is the rollback target.
KEEP_LATEST_PER_ENV = 2


def fetch_deployments(session: requests.Session, api: str) -> list[dict]:
    deployments: list[dict] = []
    for batch in paginate(session, f"{api}/deployments"):
        deployments.extend(batch)
    return deployments


def collect_protected_production_ids(deployments: list[dict], keep_latest: int) -> set[int]:
    by_env: dict[str, list[dict]] = {}
    for deployment in deployments:
        environment = deployment.get("environment") or ""
        if environment in PRODUCTION_ENVS:
            by_env.setdefault(environment, []).append(deployment)

    protected: set[int] = set()
    for env_deployments in by_env.values():
        env_deployments.sort(key=lambda d: d.get("created_at") or "", reverse=True)
        for deployment in env_deployments[:keep_latest]:
            protected.add(deployment["id"])
    return protected


def fetch_repo_state(session: requests.Session, api: str) -> tuple[set[str], list[dict]]:
    branch_short_names = fetch_branch_short_names(session, api)
    if not branch_short_names:
        raise RuntimeError("branch list came back empty - refusing to proceed.")
    deployments = fetch_deployments(session, api)
    return branch_short_names, deployments


def select_obsolete_deployments(
    deployments: list[dict],
    branch_short_names: set[str],
    stale_days: int,
    now: datetime.datetime,
    *,
    include_production: bool,
) -> list[tuple[int, str, datetime.datetime | None]]:
    protected_production_ids: set[int] = (
        collect_protected_production_ids(deployments, KEEP_LATEST_PER_ENV)
        if include_production else set()
    )
    selected: list[tuple[int, str, datetime.datetime | None]] = []

    for deployment in deployments:
        deployment_id = deployment["id"]
        environment = deployment.get("environment") or ""

        if environment in PRODUCTION_ENVS:
            if not include_production:
                continue
            if deployment_id in protected_production_ids:
                continue
        elif environment.startswith(DEMO_PREFIX):
            if environment[len(DEMO_PREFIX):] in branch_short_names:
                continue
        else:
            continue

        updated_at = parse_updated_at(deployment)
        if stale_days > 0 and updated_at and (now - updated_at).days < stale_days:
            continue

        selected.append((deployment_id, environment, updated_at))

    return selected


def enforce_delete_cap(
    to_delete: list[tuple[int, str, datetime.datetime | None]],
    *,
    i_really_mean_it: bool,
) -> None:
    if len(to_delete) <= MAX_DELETES or i_really_mean_it:
        return
    raise RuntimeError(
        f"would delete {len(to_delete)} deployments (cap is {MAX_DELETES}). "
        "Re-run with --i-really-mean-it to override."
    )


def delete_obsolete_deployments(
    session: requests.Session,
    api: str,
    obsolete_deployments: list[tuple[int, str, datetime.datetime | None]],
    *,
    dry_run: bool,
) -> int:
    def deactivate_deployment(deployment_id: int) -> bool:
        status_url = f"{api}/deployments/{deployment_id}/statuses"
        payload = {"state": "inactive", "auto_inactive": True}
        status_response = session.post(status_url, json=payload, timeout=REQUEST_TIMEOUT)
        if status_response.ok:
            print(f"  Marked deployment {deployment_id} as inactive.")
            return True
        print(
            f"  Failed to mark deployment {deployment_id} inactive: "
            f"{status_response.status_code} {status_response.text}"
        )
        return False

    failures = 0
    for deployment_id, environment, updated_at in obsolete_deployments:
        prefix = "[DRY RUN] Would delete" if dry_run else "Deleting"
        print(
            f"{prefix}: deployment {deployment_id} "
            f"({environment}, last updated: {updated_at})"
        )

        if dry_run:
            continue

        r = session.delete(f"{api}/deployments/{deployment_id}", timeout=REQUEST_TIMEOUT)
        if r.ok:
            print(f"  Deleted deployment {deployment_id}")
            continue

        if environment in PRODUCTION_ENVS:
            # Production candidates were pre-filtered to non-live states; any
            # failure here is unexpected. Never deactivate — we will not flip
            # a production deployment ourselves.
            print(
                f"  Failed to delete production deployment {deployment_id}: "
                f"{r.status_code} {r.text}"
            )
            failures += 1
            continue

        if r.status_code == 422:
            print(
                f"  Deployment {deployment_id} is not deletable yet (422). "
                "Attempting to mark it inactive and retry deletion."
            )
            if not deactivate_deployment(deployment_id):
                failures += 1
                continue

            retry = session.delete(f"{api}/deployments/{deployment_id}", timeout=REQUEST_TIMEOUT)
            if retry.ok:
                print(f"  Deleted deployment {deployment_id} after deactivation")
            else:
                print(
                    f"  Failed to delete deployment {deployment_id} after deactivation: "
                    f"{retry.status_code} {retry.text}"
                )
                failures += 1
        else:
            print(f"  Failed to delete deployment {deployment_id}: {r.status_code} {r.text}")
            failures += 1

    return failures


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    parser.add_argument(
        "--dry-run", action=argparse.BooleanOptionalAction, default=True,
        help="Log what would be deleted without deleting (default: on).",
    )
    parser.add_argument(
        "--stale-days", type=int, default=0,
        help="Skip deployments updated more recently than this many days (0 = ignore age).",
    )
    parser.add_argument(
        "--include-production", action="store_true",
        help=(
            f"Also consider production environments ({', '.join(sorted(PRODUCTION_ENVS))}). "
            "Off by default. Candidates additionally must have a deletable latest status."
        ),
    )
    parser.add_argument(
        "--i-really-mean-it", action="store_true",
        help=f"Allow deleting more than {MAX_DELETES} deployments in one run.",
    )
    args = parser.parse_args()

    try:
        validate_stale_days(args.stale_days)
    except ValueError as exc:
        print(f"ERROR: {exc}", file=sys.stderr)
        return 2

    try:
        repo = get_required_env("REPO")
        token = get_required_env("GITHUB_TOKEN")
    except ValueError as exc:
        print(f"ERROR: {exc}", file=sys.stderr)
        return 2

    api = f"https://api.github.com/repos/{repo}"
    session = build_session(token)

    try:
        branch_short_names, deployments = fetch_repo_state(session, api)
    except RuntimeError as exc:
        print(f"ERROR: {exc}", file=sys.stderr)
        return 2

    obsolete_deployments = select_obsolete_deployments(
        deployments,
        branch_short_names,
        args.stale_days,
        datetime.datetime.now(datetime.timezone.utc),
        include_production=args.include_production,
    )

    if not obsolete_deployments:
        print("No deployments to delete.")
        return 0

    try:
        enforce_delete_cap(obsolete_deployments, i_really_mean_it=args.i_really_mean_it)
    except RuntimeError as exc:
        print(f"ERROR: {exc}", file=sys.stderr)
        for deployment_id, environment, _ in obsolete_deployments:
            print(f"  - deployment {deployment_id} ({environment})", file=sys.stderr)
        return 2

    failures = delete_obsolete_deployments(session, api, obsolete_deployments, dry_run=args.dry_run)
    if failures:
        print(f"{failures} deletion(s) failed.", file=sys.stderr)
        return 1

    return 0


if __name__ == "__main__":
    sys.exit(main())
# @license EUPL-1.2+
# Copyright Gemeente Amsterdam
"""Delete obsolete `demo-*` GitHub Environments for a repo.

A `demo-X` environment is obsolete when no remote branch matches `X` after
stripping the leading `<prefix>/` segment from the branch name — the same
transform feature-branch-deploy.yml applies when creating the environment.

Required env vars:
    GITHUB_TOKEN  Token with repo Administration: write (see workflow notes).
    REPO          owner/name slug.

Safety guards:
- Defaults to dry-run.
- Aborts if the branch list comes back empty (likely an API/auth issue;
  proceeding would delete every demo-* environment).
- Aborts if more than MAX_DELETES are slated for deletion, unless
  --i-really-mean-it is passed.
"""
from __future__ import annotations

import argparse
import datetime
import sys
import urllib.parse

import requests

from cleanup_common import (
    build_session,
    fetch_branch_short_names,
    get_required_env,
    paginate,
    parse_updated_at,
    validate_stale_days,
)

DEMO_PREFIX = "demo-"
MAX_DELETES = 25


def fetch_environments(session: requests.Session, api: str) -> list[dict]:
    envs: list[dict] = []
    for batch in paginate(session, f"{api}/environments"):
        envs.extend(batch.get("environments", []))
    return envs


def fetch_repo_state(session: requests.Session, api: str) -> tuple[set[str], list[dict]]:
    branch_short_names = fetch_branch_short_names(session, api)
    if not branch_short_names:
        raise RuntimeError("branch list came back empty - refusing to proceed.")
    envs = fetch_environments(session, api)
    return branch_short_names, envs


def select_obsolete_envs(
    envs: list[dict],
    branch_short_names: set[str],
    stale_days: int,
    now: datetime.datetime,
) -> list[tuple[str, datetime.datetime | None]]:
    selected: list[tuple[str, datetime.datetime | None]] = []
    for env in envs:
        name = env["name"]
        if not name.startswith(DEMO_PREFIX):
            continue
        if name[len(DEMO_PREFIX):] in branch_short_names:
            continue
        updated_at = parse_updated_at(env)
        if stale_days > 0 and updated_at and (now - updated_at).days < stale_days:
            continue
        selected.append((name, updated_at))
    return selected


def enforce_delete_cap(
    to_delete: list[tuple[str, datetime.datetime | None]],
    *,
    i_really_mean_it: bool,
) -> None:
    if len(to_delete) <= MAX_DELETES or i_really_mean_it:
        return
    raise RuntimeError(
        f"would delete {len(to_delete)} environments (cap is {MAX_DELETES}). "
        "Re-run with --i-really-mean-it to override."
    )


def delete_obsolete_envs(
    session: requests.Session,
    api: str,
    obsolete_envs: list[tuple[str, datetime.datetime | None]],
    *,
    dry_run: bool,
) -> int:
    failures = 0
    for name, updated_at in obsolete_envs:
        prefix = "[DRY RUN] Would delete" if dry_run else "Deleting"
        print(f"{prefix}: {name} (last updated: {updated_at})")
        if dry_run:
            continue
        encoded = urllib.parse.quote(name, safe="")
        r = session.delete(f"{api}/environments/{encoded}", timeout=REQUEST_TIMEOUT)
        if r.ok:
            print(f"  Deleted {name}")
        else:
            print(f"  Failed to delete {name}: {r.status_code} {r.text}")
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
        help="Skip environments updated more recently than this many days (0 = ignore age).",
    )
    parser.add_argument(
        "--i-really-mean-it", action="store_true",
        help=f"Allow deleting more than {MAX_DELETES} environments in one run.",
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
        branch_short_names, envs = fetch_repo_state(session, api)
    except RuntimeError as exc:
        print(f"ERROR: {exc}", file=sys.stderr)
        return 2

    obsolete_envs = select_obsolete_envs(
        envs,
        branch_short_names,
        args.stale_days,
        datetime.datetime.now(datetime.timezone.utc),
    )

    if not obsolete_envs:
        print("No environments to delete.")
        return 0

    try:
        enforce_delete_cap(obsolete_envs, i_really_mean_it=args.i_really_mean_it)
    except RuntimeError as exc:
        print(f"ERROR: {exc}", file=sys.stderr)
        for name, _ in obsolete_envs:
            print(f"  - {name}", file=sys.stderr)
        return 2

    failures = delete_obsolete_envs(session, api, obsolete_envs, dry_run=args.dry_run)
    if failures:
        print(f"{failures} deletion(s) failed.", file=sys.stderr)
        return 1
    return 0


if __name__ == "__main__":
    sys.exit(main())

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
import os
import sys
import urllib.parse
from typing import Iterator

import requests

DEMO_PREFIX = "demo-"
MAX_DELETES = 25
REQUEST_TIMEOUT = 30


def short_name(branch: str) -> str:
    """Strip the first `<segment>/` from a branch name (mirrors deploy workflow)."""
    _, sep, rest = branch.partition("/")
    return rest if sep else branch


def _check(r: requests.Response) -> requests.Response:
    """raise_for_status, but include the response body — that's where GitHub
    puts useful detail (SSO requirements, rate-limit messages, org policy)."""
    if not r.ok:
        raise RuntimeError(f"{r.request.method} {r.url} → {r.status_code}: {r.text}")
    return r


def paginate(session: requests.Session, url: str) -> Iterator[list | dict]:
    page = 1
    sep = "&" if "?" in url else "?"
    while True:
        r = _check(session.get(f"{url}{sep}per_page=100&page={page}", timeout=REQUEST_TIMEOUT))
        yield r.json()
        if "next" not in r.links:
            return
        page += 1


def fetch_branch_short_names(session: requests.Session, api: str) -> set[str]:
    return {
        short_name(b["name"])
        for batch in paginate(session, f"{api}/branches")
        for b in batch
    }


def fetch_environments(session: requests.Session, api: str) -> list[dict]:
    envs: list[dict] = []
    for batch in paginate(session, f"{api}/environments"):
        envs.extend(batch.get("environments", []))
    return envs


def parse_updated_at(env: dict) -> datetime.datetime | None:
    raw = env.get("updated_at")
    if not raw:
        return None
    return datetime.datetime.fromisoformat(raw.replace("Z", "+00:00"))


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

    token = os.environ["GITHUB_TOKEN"]
    repo = os.environ["REPO"]
    api = f"https://api.github.com/repos/{repo}"

    session = requests.Session()
    session.headers.update({
        "Authorization": f"token {token}",
        "Accept": "application/vnd.github+json",
        "X-GitHub-Api-Version": "2022-11-28",
    })

    branch_short_names = fetch_branch_short_names(session, api)
    if not branch_short_names:
        # Defensive: an empty set would mark every demo-* env as obsolete.
        print("ERROR: branch list came back empty — refusing to proceed.", file=sys.stderr)
        return 2

    now = datetime.datetime.now(datetime.timezone.utc)
    to_delete: list[tuple[str, datetime.datetime | None]] = []

    for env in fetch_environments(session, api):
        name = env["name"]
        if not name.startswith(DEMO_PREFIX):
            continue
        if name[len(DEMO_PREFIX):] in branch_short_names:
            continue
        updated_at = parse_updated_at(env)
        if args.stale_days > 0 and updated_at and (now - updated_at).days < args.stale_days:
            continue
        to_delete.append((name, updated_at))

    if not to_delete:
        print("No environments to delete.")
        return 0

    if len(to_delete) > MAX_DELETES and not args.i_really_mean_it:
        print(
            f"ERROR: would delete {len(to_delete)} environments (cap is {MAX_DELETES}). "
            "Re-run with --i-really-mean-it to override.",
            file=sys.stderr,
        )
        for name, _ in to_delete:
            print(f"  - {name}", file=sys.stderr)
        return 2

    failures = 0
    for name, updated_at in to_delete:
        prefix = "[DRY RUN] Would delete" if args.dry_run else "Deleting"
        print(f"{prefix}: {name} (last updated: {updated_at})")
        if args.dry_run:
            continue
        encoded = urllib.parse.quote(name, safe="")
        r = session.delete(f"{api}/environments/{encoded}", timeout=REQUEST_TIMEOUT)
        if r.status_code == 204:
            print(f"  Deleted {name}")
        else:
            print(f"  Failed to delete {name}: {r.status_code} {r.text}")
            failures += 1

    if failures:
        print(f"{failures} deletion(s) failed.", file=sys.stderr)
        return 1
    return 0


if __name__ == "__main__":
    sys.exit(main())

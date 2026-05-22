#!/usr/bin/env bash
#
# @license EUPL-1.2+
# Copyright Gemeente Amsterdam

set -euo pipefail

repo_root="$(git rev-parse --show-toplevel)"
cd "$repo_root"

tmp_dir="$(mktemp -d /tmp/design-system-gh-pages-test.XXXXXX)"
cleanup() {
  git worktree remove "$tmp_dir" --force >/dev/null 2>&1 || true
  rm -rf "$tmp_dir"
}
trap cleanup EXIT

echo "== Test 1: gh-pages cleanup script (local dry-run) =="
git worktree add --detach "$tmp_dir" origin/gh-pages >/dev/null
DRY_RUN=true STALE_DAYS=14 I_REALLY_MEAN_IT=false MAX_DELETES=25 \
  bash .github/scripts/cleanup_gh_pages_demos.sh "$tmp_dir"

echo
echo "== Test 2: environment cleanup script (API dry-run) =="
set +e
GITHUB_TOKEN="$(gh auth token)" REPO="Amsterdam/design-system" \
  python3 .github/scripts/cleanup_environments.py --dry-run --stale-days 14
py_rc=$?
set -e

if [ "$py_rc" -ne 0 ] && [ "$py_rc" -ne 2 ]; then
  echo "ERROR: Python dry-run failed with unexpected exit code $py_rc" >&2
  exit "$py_rc"
fi

echo
echo "Done. Python dry-run exit code: $py_rc (0 or 2 is expected; 2 usually means delete-cap guard triggered)."

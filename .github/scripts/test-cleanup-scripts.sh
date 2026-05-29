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
DRY_RUN=true STALE_DAYS=14 I_REALLY_MEAN_IT=false \
  bash .github/scripts/cleanup_gh_pages_demos.sh "$tmp_dir"

echo
echo "== Test 2: environment cleanup script (API dry-run) =="
GITHUB_TOKEN="$(gh auth token)" REPO="Amsterdam/design-system" \
  python3 .github/scripts/cleanup_environments.py --dry-run --stale-days 14

echo
echo "== Test 3: deployment cleanup script (API dry-run) =="
GITHUB_TOKEN="$(gh auth token)" REPO="Amsterdam/design-system" \
  python3 .github/scripts/cleanup_deployments.py --dry-run --stale-days 14

echo
echo "Done."

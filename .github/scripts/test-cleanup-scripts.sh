#!/usr/bin/env bash
#
# @license EUPL-1.2+
# Copyright Gemeente Amsterdam

set -euo pipefail

EXECUTE=false
STALE_DAYS="${STALE_DAYS:-14}"
I_REALLY_MEAN_IT="${I_REALLY_MEAN_IT:-false}"
INCLUDE_PRODUCTION="${INCLUDE_PRODUCTION:-false}"

usage() {
  cat <<EOF
Usage: $0 [--execute]

Runs all three cleanup scripts back-to-back against Amsterdam/design-system.
Defaults to dry-run; pass --execute to perform real deletions.

Env vars (optional):
  STALE_DAYS          Age threshold in days, passed to each script (default: 14).
  I_REALLY_MEAN_IT    Set to 'true' to lift the MAX_DELETES cap (default: false).
  INCLUDE_PRODUCTION  Set to 'true' to also clean github-pages and demo-develop
                      deployments (default: false). Deployments script only.
EOF
}

while [ $# -gt 0 ]; do
  case "$1" in
    --execute) EXECUTE=true; shift ;;
    --help|-h) usage; exit 0 ;;
    *) echo "Unknown argument: $1" >&2; usage >&2; exit 2 ;;
  esac
done

repo_root="$(git rev-parse --show-toplevel)"
cd "$repo_root"

if [ "$EXECUTE" = "true" ]; then
  gh_pages_dry_run=false
  python_dry_run_flag=--no-dry-run
  mode_label="EXECUTE"
  echo "WARNING: --execute supplied. Real deletions will be attempted:"
  echo "  - gh-pages worktree mutations (local only; nothing is pushed)"
  echo "  - GitHub Environments deleted via REST API"
  echo "  - GitHub Deployments deleted via REST API"
  echo
else
  gh_pages_dry_run=true
  python_dry_run_flag=--dry-run
  mode_label="DRY RUN"
fi

python_args=("$python_dry_run_flag" --stale-days "$STALE_DAYS")
if [ "$I_REALLY_MEAN_IT" = "true" ]; then
  python_args+=("--i-really-mean-it")
fi

tmp_dir="$(mktemp -d /tmp/design-system-gh-pages-test.XXXXXX)"
cleanup() {
  git worktree remove "$tmp_dir" --force >/dev/null 2>&1 || true
  rm -rf "$tmp_dir"
}
trap cleanup EXIT

echo "== ${mode_label} | Test 1: gh-pages cleanup script =="
git worktree add --detach "$tmp_dir" origin/gh-pages >/dev/null
DRY_RUN="$gh_pages_dry_run" STALE_DAYS="$STALE_DAYS" I_REALLY_MEAN_IT="$I_REALLY_MEAN_IT" \
  bash .github/scripts/cleanup_gh_pages_demos.sh "$tmp_dir"

echo
echo "== ${mode_label} | Test 2: environment cleanup script =="
GITHUB_TOKEN="$(gh auth token)" REPO="Amsterdam/design-system" \
  python3 .github/scripts/cleanup_environments.py "${python_args[@]}"

echo
echo "== ${mode_label} | Test 3: deployment cleanup script =="
deployments_args=("${python_args[@]}")
if [ "$INCLUDE_PRODUCTION" = "true" ]; then
  deployments_args+=("--include-production")
fi
GITHUB_TOKEN="$(gh auth token)" REPO="Amsterdam/design-system" \
  python3 .github/scripts/cleanup_deployments.py "${deployments_args[@]}"

echo
echo "Done."

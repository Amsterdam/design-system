#!/usr/bin/env bash
set -euo pipefail
shopt -s nullglob

# Cleanup rules:
# - demo-X is stale when no active branch short name matches X.
# - short name mirrors feature-branch-deploy: strip first <prefix>/.
# - Nested previews (demo-foo/bar) are handled safely.
#
# Environment variables:
# - DRY_RUN (default: true)
# - STALE_DAYS (default: 0)
# - I_REALLY_MEAN_IT (default: false)
# - MAX_DELETES (default: 25)

TARGET_DIR="${1:-.}"
DEMO_PREFIX="demo-"
DRY_RUN="${DRY_RUN:-true}"
STALE_DAYS="${STALE_DAYS:-0}"
I_REALLY_MEAN_IT="${I_REALLY_MEAN_IT:-false}"
MAX_DELETES="${MAX_DELETES:-25}"

validate_non_negative_int() {
  local name="$1"
  local value="$2"
  case "$value" in
    ''|*[!0-9]*)
      echo "ERROR: ${name} must be a non-negative integer, got '$value'." >&2
      exit 2
      ;;
  esac
}

validate_bool() {
  local name="$1"
  local value="$2"
  case "$value" in
    true|false)
      ;;
    *)
      echo "ERROR: ${name} must be 'true' or 'false', got '$value'." >&2
      exit 2
      ;;
  esac
}

validate_inputs() {
  validate_bool "dry_run" "$DRY_RUN"
  validate_non_negative_int "stale_days" "$STALE_DAYS"
  validate_non_negative_int "MAX_DELETES" "$MAX_DELETES"
  validate_bool "i_really_mean_it" "$I_REALLY_MEAN_IT"
}

fetch_branch_short_names() {
  local ls_remote_out
  ls_remote_out="$(mktemp)"

  git -C "$TARGET_DIR" ls-remote --heads origin > "$ls_remote_out"

  mapfile -t BRANCH_SHORT_NAMES < <(
    awk '{print $2}' "$ls_remote_out" \
      | sed -E 's|^refs/heads/||; s|^[^/]*/||'
  )
  rm -f "$ls_remote_out"

  if [ "${#BRANCH_SHORT_NAMES[@]}" -eq 0 ]; then
    echo "ERROR: remote branch list is empty - refusing to proceed." >&2
    exit 2
  fi
}

has_branch_prefix() {
  local candidate="$1"
  local active
  for active in "${BRANCH_SHORT_NAMES[@]}"; do
    if [[ "$active" == "$candidate" || "$active" == "$candidate/"* ]]; then
      return 0
    fi
  done
  return 1
}

has_branch_exact() {
  local candidate="$1"
  local active
  for active in "${BRANCH_SHORT_NAMES[@]}"; do
    if [[ "$active" == "$candidate" ]]; then
      return 0
    fi
  done
  return 1
}

is_old_enough() {
  local dir="$1"

  if [ "$STALE_DAYS" -eq 0 ]; then
    return 0
  fi

  local updated_epoch
  updated_epoch="$(git -C "$TARGET_DIR" log -1 --format=%ct -- "$dir" 2>/dev/null || true)"
  if [ -z "$updated_epoch" ]; then
    echo "Skipping stale demo with unknown updated time (age filter active): $dir"
    return 1
  fi

  local age_days
  age_days="$(( (NOW_EPOCH - updated_epoch) / 86400 ))"
  if [ "$age_days" -lt "$STALE_DAYS" ]; then
    echo "Skipping stale demo updated ${age_days} day(s) ago (< ${STALE_DAYS}): $dir"
    return 1
  fi

  return 0
}

select_obsolete_dirs_recursive() {
  local dir="$1"
  local short_name="$2"
  local child

  if ! has_branch_prefix "$short_name"; then
    if is_old_enough "$dir"; then
      OBSOLETE_DIRS+=("$dir")
    fi
    return
  fi

  if has_branch_exact "$short_name"; then
    return
  fi

  for child in "$TARGET_DIR/$dir"/*/; do
    [ -d "$child" ] || continue
    child="${child%/}"
    select_obsolete_dirs_recursive "${child#"$TARGET_DIR"/}" "${short_name}/${child##*/}"
  done
}

select_obsolete_dirs() {
  local dir
  for dir in "$TARGET_DIR"/"$DEMO_PREFIX"*/; do
    [ -d "$dir" ] || continue
    dir="${dir%/}"
    select_obsolete_dirs_recursive "${dir#"$TARGET_DIR"/}" "${dir##*/$DEMO_PREFIX}"
  done
}

enforce_delete_cap() {
  if [ "${#OBSOLETE_DIRS[@]}" -le "$MAX_DELETES" ] || [ "$I_REALLY_MEAN_IT" = "true" ]; then
    return
  fi

  local dir
  echo "ERROR: would delete ${#OBSOLETE_DIRS[@]} directories (cap is ${MAX_DELETES})." >&2
  echo "Re-run with i_really_mean_it=true to override." >&2
  for dir in "${OBSOLETE_DIRS[@]}"; do
    echo "  - ${dir}" >&2
  done
  exit 2
}

delete_selected_dirs() {
  local dir
  local short_name

  for dir in "${OBSOLETE_DIRS[@]}"; do
    short_name="${dir#"$DEMO_PREFIX"}"
    if [ "$DRY_RUN" = "true" ]; then
      echo "[DRY RUN] Would delete stale demo: $dir (no active branch matches '$short_name')"
      continue
    fi

    echo "Deleting stale demo: $dir (no active branch matches '$short_name')"
    git -C "$TARGET_DIR" rm -rq -- "$dir"
  done
}

main() {
  validate_inputs

  NOW_EPOCH="$(date +%s)"
  OBSOLETE_DIRS=()
  BRANCH_SHORT_NAMES=()

  fetch_branch_short_names
  select_obsolete_dirs

  if [ "${#OBSOLETE_DIRS[@]}" -eq 0 ]; then
    echo "No stale demo directories to remove."
    exit 0
  fi

  enforce_delete_cap
  delete_selected_dirs
}

main "$@"

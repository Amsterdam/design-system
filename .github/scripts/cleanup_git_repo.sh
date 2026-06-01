#!/usr/bin/env bash
#
# @license EUPL-1.2+
# Copyright Gemeente Amsterdam
#
# This script performs cleanup operations on the Git repository, such as removing unreachable objects and pruning remote tracking branches.
#
# See: https://geekcafe.com/blog/2025/08/keeping-your-git-repository-clean-and-efficient/

set -euo pipefail

echo "Removing unreachable objects..."
git gc --prune=now

echo ""
echo "Pruning remote tracking branches..."
git remote prune origin

echo ""
echo "Repository cleanup complete!"

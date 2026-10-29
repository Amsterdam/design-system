# @license EUPL-1.2+
# Copyright Gemeente Amsterdam

import json
import os
import sys
from urllib.error import HTTPError
from urllib.parse import quote, urlencode
from urllib.request import Request, urlopen


# Read-only guard; callers hold the shared Pages lock before checking or writing.
def api(path):
    request = Request(
        f"{os.environ['GITHUB_API_URL']}/repos/{os.environ['GITHUB_REPOSITORY']}/{path}",
        headers={
            "Authorization": f"Bearer {os.environ['GH_TOKEN']}",
            "Accept": "application/vnd.github+json",
            "X-GitHub-Api-Version": "2022-11-28",
        },
    )
    # Let API errors fail the job: unavailable state is not permission to write.
    with urlopen(request, timeout=30) as response:
        return json.load(response)


def latest_preview_pr(branch):
    repository = os.environ["GITHUB_REPOSITORY"]
    query = urlencode({
        "state": "all", "head": f"{repository.split('/')[0]}:{branch}",
        "sort": "created", "direction": "desc", "per_page": 100,
    })
    for pull in api(f"pulls?{query}"):
        # Only this repository's newest preview PR controls this branch.
        # Fork PRs and release PRs must not close an unrelated preview.
        if (pull["head"]["ref"] == branch
                and (pull["head"]["repo"] or {}).get("full_name") == repository
                and pull["base"]["ref"] != "main"):
            return pull
    return None


def should_run(operation, branch, expected_sha):
    if operation not in ("deploy", "remove", "production"):
        raise ValueError(f"Unknown operation: {operation}")
    if operation != "remove":
        try:
            current = api(f"git/ref/heads/{quote(branch, safe='')}")
        except HTTPError as error:
            if error.code == 404:
                return False
            raise
        # Builds can reach the queue out of order; never publish an older SHA.
        if current["object"]["sha"] != expected_sha:
            return False
    if operation == "production":
        return True
    pull = latest_preview_pr(branch)
    if operation == "remove":
        # A close event may have waited in the queue while the PR was reopened.
        return pull is not None and pull["state"] == "closed"
    return pull is None or pull["state"] == "open"


if __name__ == "__main__":
    allowed = should_run(sys.argv[1], os.environ["RAW_BRANCH_NAME"], os.environ.get("SOURCE_SHA"))
    with open(os.environ["GITHUB_OUTPUT"], "a") as output:
        output.write(f"allowed={str(allowed).lower()}\n")
    if allowed:
        print("Operation is current.")
    else:
        # Annotate the run so a skip is visible without opening the log.
        print("::notice title=Pages operation skipped::The commit is no longer the branch head,"
              " the branch was deleted, or its pull request state no longer matches.")

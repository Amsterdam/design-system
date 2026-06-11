# @license EUPL-1.2+
# Copyright Gemeente Amsterdam
from __future__ import annotations

import datetime
import os
from typing import Iterator

import requests

REQUEST_TIMEOUT = 30


def short_name(branch: str) -> str:
    """Strip the first `<segment>/` from a branch name (mirrors deploy workflow)."""
    _, sep, rest = branch.partition("/")
    return rest if sep else branch


def check_response(response: requests.Response) -> requests.Response:
    """raise_for_status with the body included for clearer diagnostics."""
    if not response.ok:
        raise RuntimeError(
            f"{response.request.method} {response.url} -> {response.status_code}: {response.text}"
        )
    return response


def paginate(session: requests.Session, url: str) -> Iterator[list | dict]:
    next_url: str | None = f"{url}?per_page=100"
    while next_url:
        response = check_response(session.get(next_url, timeout=REQUEST_TIMEOUT))
        yield response.json()
        next_url = response.links.get("next", {}).get("url")


def fetch_branch_short_names(session: requests.Session, api: str) -> set[str]:
    return {
        short_name(branch["name"])
        for batch in paginate(session, f"{api}/branches")
        for branch in batch
    }


def parse_updated_at(item: dict, field_name: str = "updated_at") -> datetime.datetime | None:
    raw = item.get(field_name)
    if not raw:
        return None
    return datetime.datetime.fromisoformat(raw.replace("Z", "+00:00"))


def build_session(token: str) -> requests.Session:
    session = requests.Session()
    session.headers.update({
        "Authorization": f"token {token}",
        "Accept": "application/vnd.github+json",
        "X-GitHub-Api-Version": "2022-11-28",
    })
    return session


def validate_stale_days(stale_days: int) -> None:
    if stale_days < 0:
        raise ValueError("--stale-days must be a non-negative integer.")


def get_required_env(name: str) -> str:
    value = os.getenv(name)
    if not value:
        raise ValueError(f"required environment variable is missing: {name}")
    return value
# @license EUPL-1.2+
# Copyright Gemeente Amsterdam

import os
import unittest
from unittest.mock import patch
from urllib.error import HTTPError

import check_pages_operation as pages


class PagesOperationTests(unittest.TestCase):
    def setUp(self):
        self.environment = patch.dict(os.environ, {"GITHUB_REPOSITORY": "Amsterdam/design-system"})
        self.environment.start()
        self.addCleanup(self.environment.stop)

    def pull(self, state="open", base="develop", repository="Amsterdam/design-system"):
        return {"state": state, "head": {"ref": "feat/demo", "repo": {"full_name": repository}},
                "base": {"ref": base}}

    def test_current_branch_without_pr_can_deploy(self):
        with patch.object(pages, "api", side_effect=[{"object": {"sha": "current"}}, []]):
            self.assertTrue(pages.should_run("deploy", "feat/demo", "current"))

    def test_stale_build_cannot_deploy(self):
        with patch.object(pages, "api", return_value={"object": {"sha": "newer"}}) as api:
            self.assertFalse(pages.should_run("deploy", "feat/demo", "old"))
            self.assertEqual(api.call_count, 1)

    def test_closed_pr_blocks_in_flight_build(self):
        with patch.object(pages, "api", side_effect=[{"object": {"sha": "current"}}, [self.pull("closed")]]):
            self.assertFalse(pages.should_run("deploy", "feat/demo", "current"))

    def test_reopened_pr_allows_deploy_and_blocks_cleanup(self):
        with patch.object(pages, "api", side_effect=[{"object": {"sha": "current"}}, [self.pull()]]):
            self.assertTrue(pages.should_run("deploy", "feat/demo", "current"))
        with patch.object(pages, "api", return_value=[self.pull()]):
            self.assertFalse(pages.should_run("remove", "feat/demo", None))

    def test_closed_pr_allows_cleanup(self):
        with patch.object(pages, "api", return_value=[self.pull("closed")]):
            self.assertTrue(pages.should_run("remove", "feat/demo", None))

    def test_cleanup_needs_a_closed_preview_pr(self):
        for pulls in ([], [self.pull("closed", repository="other/fork")]):
            with self.subTest(pulls=pulls), patch.object(pages, "api", return_value=pulls):
                self.assertFalse(pages.should_run("remove", "feat/demo", None))

    def test_deleted_branch_is_skipped_but_api_failure_is_not(self):
        for code in (404, 403, 500):
            with self.subTest(code=code), patch.object(pages, "api", side_effect=HTTPError("url", code, "error", {}, None)):
                if code == 404:
                    self.assertFalse(pages.should_run("deploy", "feat/demo", "current"))
                else:
                    with self.assertRaises(HTTPError):
                        pages.should_run("deploy", "feat/demo", "current")

    def test_release_and_foreign_prs_do_not_control_preview(self):
        with patch.object(pages, "api", return_value=[self.pull("closed", base="main"), self.pull("closed", repository="other/fork")]):
            self.assertIsNone(pages.latest_preview_pr("feat/demo"))

    def test_production_checks_sha_without_reading_prs(self):
        with patch.object(pages, "api", return_value={"object": {"sha": "current"}}) as api:
            self.assertTrue(pages.should_run("production", "main", "current"))
            self.assertEqual(api.call_count, 1)

    def test_unknown_operation_fails(self):
        with self.assertRaises(ValueError):
            pages.should_run("typo", "feat/demo", "current")


if __name__ == "__main__":
    unittest.main()

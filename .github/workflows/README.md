<!-- @license CC0-1.0 -->

# GitHub Actions workflows

This folder holds every continuous integration and delivery workflow for the design system.
There are twelve of them, but they only do four kinds of work, and the file name now starts with the verb for that kind.
Job ids and step names follow the same rule — a verb first, and a name that matches what actually happens — so keep new ones consistent with their neighbours rather than inventing a new style.
Reading them by responsibility is the quickest way to understand the whole picture.

- **Check** — quality gates that run on every pull request.
- **Deploy** — build Storybook and deploy it to GitHub Pages.
- **Publish** — publish the packages to npm.
- **Remove** — delete preview deployments once a branch is gone.

Pull requests are made against `develop`, our integration branch.
Changes reach `main` through a release pull request, which is what triggers the production deploy and the npm publish.

## At a glance

| Workflow                      | Runs when                                                      | Responsible for                                                                                                                    |
| :---------------------------- | :------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------- |
| Check build and tests         | Every pull request; push to `main`                             | Build all packages, then run the linters and unit tests. The main quality gate.                                                    |
| Check visual regressions      | Pull request opened or marked ready; `/chromatic test` comment | Visual regression snapshots through Chromatic.                                                                                     |
| Check test coverage           | Every pull request                                             | Run the React tests with coverage and post a summary comment.                                                                      |
| Check bundle size             | Every pull request                                             | Report the compressed size change of the published bundles.                                                                        |
| Check PR title                | Pull request opened, edited, or synchronized                   | Enforce a Conventional Commit title (`feat`, `fix`, `chore`) so release-please can read it.                                        |
| Deploy acceptance Storybook   | Push to any branch except `main`; pull request reopened        | Build Storybook and publish a per-branch preview to `gh-pages` under `demo-<branch>`. Records a GitHub Deployment and Environment. |
| Deploy production Storybook   | Push to `main`                                                 | Build Storybook and publish the live documentation site to the `gh-pages` root.                                                    |
| Publish packages              | After “Check build and tests” succeeds on `main`               | Run release-please; if it cuts a release, build and publish the packages to npm.                                                   |
| Remove acceptance Storybook   | Pull request closed (base is not `main`)                       | Delete that branch’s `demo-<branch>` directory and deactivate its Deployment.                                                      |
| Remove stale deployments      | Weekly, Sunday 05:00 UTC; manual                               | Delete GitHub Deployment records for `demo-*` whose branch no longer exists.                                                       |
| Remove stale environments     | Weekly, Sunday 04:00 UTC; manual                               | Delete `demo-*` GitHub Environments whose branch no longer exists.                                                                 |
| Remove stale demo directories | After a major release; manual                                  | Remove stale `demo-*` directories from the `gh-pages` branch.                                                                      |

## How a change flows through them

### Opening or updating a pull request

The **Check** workflows run together and gate the merge.
**Check build and tests** builds the packages and runs the linters and unit tests.
**Check visual regressions** takes Chromatic snapshots, the coverage and bundle-size workflows post their reports as comments, and the title check validates the pull request title.

At the same time, **Deploy acceptance Storybook** publishes a live Storybook preview for the branch at `demo-<branch>` on GitHub Pages.

### Merging to `main`

A push to `main` runs two things in parallel.
**Deploy production Storybook** rebuilds Storybook and replaces the live documentation site at the `gh-pages` root, keeping all `demo-*` previews untouched.
**Check build and tests** runs again on `main`, and its success is the signal that starts **Publish packages**.

**Publish packages** runs release-please.
If there are releasable changes, release-please opens or updates a release pull request; merging that is what actually cuts the release.
When a release is cut, the workflow builds the packages and pushes them to npm.

### Closing a pull request

**Remove acceptance Storybook** removes that branch’s `demo-<branch>` directory from `gh-pages` and deactivates its Deployment, so previews do not pile up.

### On a schedule or a release

The remaining three **Remove** workflows sweep up whatever the per-pull-request removal missed (see the next section).

## The demo preview ecosystem

A single feature-branch preview is not one object — it spans three separate GitHub surfaces, each created by **Deploy acceptance Storybook**:

1. a `demo-<branch>` **directory** on the `gh-pages` branch (the actual files),
2. a GitHub **Deployment** record (the entry in the Deployments timeline),
3. a GitHub **Environment** named `demo-<branch>` (the entry under Settings → Environments).

**Remove acceptance Storybook** handles the common case: when a pull request is closed it deletes the directory and deactivates the Deployment.
But branches can disappear without a clean pull-request close, and the Environment is never removed by that workflow, so stale items accumulate on all three surfaces over time.

That is why there are three scheduled or release-driven removals rather than one — each targets a different surface and needs a different mechanism:

| Workflow                      | Surface it cleans      | Mechanism        | Trigger               |
| :---------------------------- | :--------------------- | :--------------- | :-------------------- |
| Remove stale demo directories | `gh-pages` directories | Git, Bash script | Major release; manual |
| Remove stale deployments      | Deployment records     | REST API, Python | Weekly; manual        |
| Remove stale environments     | Environments           | REST API, Python | Weekly; manual        |

All three decide what is stale the same way: a `demo-X` item is stale when no remote branch matches `X` after stripping the leading `<prefix>/` segment — exactly the transformation **Deploy acceptance Storybook** uses when it creates the preview.
They default to a dry run and apply a grace window so an in-flight deploy is never raced into deletion.
The supporting scripts live in [`.github/scripts`](../scripts).

## Notes and gotchas

- **Publish depends on the name “Check build and tests”.**
  `publish-packages.yml` triggers on `workflow_run` for the workflow with that exact name.
  If you rename that workflow, update the `workflows:` list in `publish-packages.yml` in the same change, or releases stop running.
- **`workflow_run` runs on the default branch.**
  Publish always executes from `develop`, then checks out `main` itself; this is intentional and noted inline in the file.
- **Required status checks follow job names, not workflow names.**
  Branch protection and rulesets refer to a check by its job's `name:` (or its id, if the job has no `name:`) — never the workflow's name or file. If you rename a job that's a required check, update the required status checks in the repository settings in the same change, or the check gets stuck on “Expected — waiting for status” forever.
- **Chromatic only snapshots the story named “Test”.**
  That is a Storybook convention unrelated to any workflow name; see the [testing documentation](../../documentation/tests.md).

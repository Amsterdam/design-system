# Publishing

We use a Release Please GitHub action to create changelog and release PRs for all our packages.
When the release PR is merged, that same action publishes the new release to npm, GitHub releases and deploys it to our main Storybook instance.

The [maintainers](./documentation/maintainers.md) can release new versions of our packages.
If you want to have rights to publish as well, contact one of the [maintainers](./maintainers.md).

## Conventional commits

To know whether a release is major, minor or patch and to generate changelogs automatically, we use the [conventional commits spec](https://www.conventionalcommits.org/en/v1.0.0/).
The titles of our PRs specify whether a change is:

- a `chore` which doesn’t trigger a release
- a `fix` resulting in a patch release,
- a new feature (`feat`), a minor release, or
- a breaking change (`feat!`), a major release.

Use the `chore` prefix when updating development dependencies, changing configuration or updating documentation that isn’t about a component.
Use the’ fix’ prefix for refactors, regular dependency updates or updates to documentation about components.

The PR title also describes the change in a clear, human-friendly way.
This PR title becomes the description of a commit when we squash merge a feature branch PR into `develop`.
These commit descriptions are eventually used to determine the release type and generate entries into our changelogs.

For example, a PR specifies that it’s introducing a breaking change and changes code in both the `css` and `react` packages.
This will cause a major version bump in both packages on release and add its description to the changelogs of both packages.

## How to create a release

1. Locally merge the latest version of `develop` into `main` using a fast-forward merge, and push to the remote:

   ```shell
     git checkout main
     git pull
     git merge --ff-only origin/develop
     git push
   ```

2. This triggers a GitHub Action, which creates a release PR.
   Review, approve and merge this PR.
   The same Action will then publish the release to npm and GitHub.
   It also deploys the released version to our Storybook environment.
3. When the release actions have completed, there’s a new release commit on `main`.
   Locally merge this commit back into `develop` and push to remote:

   ```shell
    git checkout develop
    git pull
    git merge --ff-only origin/main
    git push
   ```

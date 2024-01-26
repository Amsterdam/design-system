# Publishing

We use Lerna to create changelogs and releases for all our packages and to publish them to npm.

Only members of the `@amsterdam` group can publish to npm.
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

1. Pull in the latest version of the `develop` branch locally.
2. Run `npm run clean`
3. Run `npm run build`
4. Run `npm run release`. This causes Lerna to do several things:

   - It bumps the version numbers of the packages that have been changed.
     To do that, it relies on the conventional commit syntax used for all commit descriptions on the `develop` branch.
     Breaking changes result in a major bump; new features get a minor bump, and everything else is a patch bump.
   - It adds new entries to the changelogs of affected packages, again using the conventional commit descriptions.
   - It adds a release commit to `develop`.
   - It creates a release tag.
   - It pushes all this to the remote.

After we’ve created a new release, we want to publish it to npm:

1. Ensure being authenticated with npm by running `npm login`.
2. Run `npm run publish`

We also want to update our Storybook so it’s in sync with the new content of the packages on npm.
We do this by merging `develop` into `main`.
Note: the GitHub GUI doesn’t seem to allow you to perform fast-forward merges, so you should do this from your CLI.

1. `git checkout main`
2. `git merge --ff-only develop`
3. `git push`

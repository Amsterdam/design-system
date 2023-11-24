# Publishing

We use Lerna to create changelogs and releases for all our packages and to publish them to npm.

You can only publish if you have access to the `@amsterdam` group on npm.
If you want to have rights to publish as well, contact one of the [maintainers](./maintainers.md).

## Conventional commits

In order to know whether a release is major, minor or patch and to automatically generate changelogs, we use the [conventional commits spec](https://www.conventionalcommits.org/en/v1.0.0/).
In our PR titles, we specify whether a change is a patch, a fix (minor) or a breaking change (major).
The PR title also describes the change in a clear, human-friendly way.
This PR title becomes the description of a commit when we squash merge a feature branch PR into `develop`.
These commit descriptions are eventually used to figure out the release type and to generate entries into our changelogs.

For example, a PR specifies that it's introducing a breaking change and it changes code in both the `css` and the `react` packages.
This will cause a major version bump in both packages on release and add its description to the changelogs of both packages.

## How to create a release

1. Pull in the latest version of the `develop` branch locally.
2. Run `npm run clean`
3. Run `npm run build`
4. Run `npm run release`. This causes Lerna to do several things:

   - It bumps the version numbers of the packages that have been changed.
     To do that, it relies on the conventional commit syntax used for all commit descriptions on the `develop` branch.
     Breaking changes get a major bump, new features get a minor bump, everything else is a patch bump.
   - It adds new entries to the changelogs of the packages that have been changed, again using the conventional commit descriptions.
   - It adds a release commit to `develop`.
   - It creates a release tag.
   - It pushes all this to the remote.

After we've created a new release, we want to publish it to npm:

1. Make sure you're logged in to npm, by running `npm login`.
2. Run `npm run publish`

We also want to update our Storybook, so it's in sync with the new content of the packages on npm.
We do this by merging `develop` into `main`.
Note: the GitHub GUI doesn't seem to allow you to do fast forward merges, so you should do this from your cli.

1. `git checkout main`
2. `git merge --ff-only develop`
3. `git push`

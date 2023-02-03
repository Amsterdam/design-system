<!-- @license CC0-1.0 -->

# Contribution Guidelines for npm packages

## Store proprietary assets in separate (private) packages

You must avoid publishing copyrighted and licensed materials as part of a packages that indicate they are actually open source.

To this end, you can maintain a separate workspace directory (in addition to the usual `packages/` directory) called `proprietary/`.

- Do not include `"license": "EUPL-1.2"` in `package.json` files inside the `proprietary/` directory. For packages that are not open source, you can use the official alternative format: `"license": "SEE LICENSE IN proprietary.txt"`.
- Include `"private": true` as well if you don't mean to (re)distribute assets in this directory, such as licensed font files.
- USE `"private": false` for packages that contain design tokens for your proprietary visual design, to empower vendors that build products for your organization by allowing them to build upon your design system infrastructure.

To ensure you don't forget any of the above steps, it can be helpful to include a `proprietary/.npmpackagejsonlintrc.json` file with specific rules that would trigger a warning when running [`npm-package-json-lint`](https://www.npmjs.com/package/npm-package-json-lint) in your test automation scripts:

```json
{
  "rules": {
    "valid-values-license": ["error", ["SEE LICENSE IN proprietary.txt"]],
    "valid-values-private": ["error", [true]]
  }
}
```

To make your audience aware not all contents of your Git repository are open source, it will help to include a warning in your `README.md` file, so people visiting your GitHub page can easily find out about it.

## Install your project using `npm ci` instead of `npm install`

New dependencies and new versions must be tested for compatibility and vetted for security issues, before you and your team start using them. If you haven't already perfectly configured your dependencies to never use version ranges (`~1.0.0` or `^1.0.0`), it will help to use `npm ci` instead of `npm install`.

The `npm ci` command will install the original version that was used when the code was initially developed, and not automatically update to newer versions that might or might not be compatible. This also means you don't automatically benefit from security patches, therefore make sure to combine this method with tools like Dependabot to stay up to date.

Using `npm ci` in your team can also help prevent situations where a certain commit works for one person on their machine, but not for another.

If you are using Yarn instead of npm, you can use the equivalent command `yarn --frozen-lockfile`.

## Always install exact versions of dependencies

When you add a new dependency you will immediately check on your local machine to see if it works as intended, after that you commit changes to the dependencies and share your successful result with your team or with "_future you_". Not all 3rd-party packages you depend on will always strictly follow [semantic versioning](https://semver.org), and the result is that it is more difficult in the future to install the exact same versions you have been working with.

While it is easy enough to revert back to the original versions defined in `package-lock.json`, it is much more difficult (if not downright impossible) if your project starts relying on features introduced in more recent versions that are automatically provided by using `npm install` to install the latest possible version that matches the `~x.y.z` or `^x.y.z` version range.

You can aim to achieve "reproducible builds" using fixed versions in your `package.json`. To do so, you must install all packages using `npm --save --save-exact` or `npm --save-dev --save-exact`, but including this argument every time is easy to forget. Configure this behavior as default by including the following setting in the `.npmrc` file for your repository:

```text
# Do not use a version range prefix, to depend on exact version
save-exact=true
save-prefix=

```

## Update your `package.json` dependencies using `npm` only

To add dependencies to your project, use `npm --save` or `npm --save-dev` in the terminal instead of editing the file using your code editor. Doing so will avoid achieve a couple of things:

- Maintain alphabetical order perfectly, and you avoid later commits that "fix" your manual change.
- Automatically respect the `save-prefix` settings from your projects `.npmrc` file.
- Automatically update the `package-lock.json` file, without updating any unrelated dependencies in the process.
- Indentation remains standardized: no risk for accidentaly using tabs or 4 spaces instead of 2 spaces, which another later commit would then need to fix.

## Don't use code formatting tools for `package.json`

Using tools to format code in `package.json` will reduce the ability of automated tools to create clean commits, when they affect the maximum line length or using anything else than the 2 space default indentation. When tools like Dependabot are not able to create clean commits and affect only the lines of code relevant to the change, they will increase the amount of time you need to spend on resolving merge conflicts. There are so many things you can better spend your time on!

Configure tools like Prettier to avoid interfering with the formatting of dependency files:

`.prettierignore`:

```text
# Ignore generated files
package.json      # Node.js ecosystem
package-lock.json # Node.js ecosystem
yarn.lock         # Node.js ecosystem
composer.json     # PHP ecosystem
```

## Keep your dependencies up to date with automated pull requests

Tools like [Dependabot](https://dependabot.com) and [Snyk](http://snyk.io) can help you to stay up to date with the latest versions of dependencies, by automatically opening a pull request with a patch to update to the latest version.

A significant advantage is that every PR will immediately show the effect on your automated tests, and indicate which updates may be safe to install. GitHub Actions can show a red X-mark (❌) for changes that would cause your project to break, and require additional work to migrate your code and work with the new version.

Relying on these automated PRs can help find a balance between having exact and vetted dependencies, while at the same time staying up to date without too much hassle.

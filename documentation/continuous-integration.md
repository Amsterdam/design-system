<!-- @license CC0-1.0 -->

# Continuous integration

## Commit hashes for GitHub Actions

We use commit hashes instead of version numbers for GitHub Actions in our workflows.

Version numbers are based on Git tags, which are mutable.
This means a maintainer can alter what code a tag like 'v1.0.0' refers to.
If you use version number 'v1.0.0', you might download altered code without knowing it.
This is a security risk.

Commit hashes refer to specific commits, giving you more confidence about the version of the Action you are downloading.
While it is not impossible to generate the same hash with different content, it is very difficult.

### Maintenance

Dependabot supports commit hashes in workflows.
When a new version of an Action is released, it can update both the commit hash and the accompanying human-readable comment.
This makes maintenance fairly straightforward.

### Changing a workflow to use hashes

We have used [pin-github-action](https://www.npmjs.com/package/pin-github-action) to change our workflows from version numbers to hashes.
Use this command to get the correct format:

```sh
npx pin-github-action -c " {ref}" /path/to/workflow.yaml
```

### Further reading

- [Maturity levels of using GitHub Actions Securely](https://devopsjournal.io/blog/2021/12/11/GitHub-Actions-Maturity-Levels)

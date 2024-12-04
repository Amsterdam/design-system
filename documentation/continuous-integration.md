<!-- @license CC0-1.0 -->

# Continuous integration

## Commit hashes for GitHub Actions

We use a commit hash instead of a version number to specify which release of a GitHub Action we use in our workflows.

Version numbers are based on Git tags, which are mutable.
This is a security risk.

For instance, if Action X is tagged as 'v1.0.0', pointing to commit A, and a malicious actor takes over the Action X repository,
they can add harmful code in commit B.
They could then change the 'v1.0.0' tag to point to commit B instead.
If you use 'action-x@v1.0.0' in your workflow, you would download code from commit A one day and from commit B the next, without realizing it.

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

<!-- @license CC0-1.0 -->

# How we use Git

Several people work on our repository, which we aim to become comprehensive and long-lived.
In addition, our project is open source and part of the NL Design System community.
This context makes it vital to keep our code clean, its history clear, and our decisions transparent.
Agreeing on how to use version control helps reach these goals.

## Use Git

We use Git for version control.

### One repository

Our single repository is hosted on the GitHub account of the City of Amsterdam.

It is a monorepo holding several packages for our design tokens, assets, various libraries, and instances of Storybook.

Initially, we cloned it from the template that NL Design System provides.

### Configure your user data

Ensure to sign your commits with your real name and work e-mail address, preferably the one of the City.
Configure this immediately after downloading.

From the directory that holds the repository:

```sh
git config user.name Your Name

git config user.email your.email@amsterdam.nl
```

## Keep branches small

We work with feature branches on a `develop` branch.
When we want to release to npm and publish to Storybook, we merge `develop` into the `main` branch.

Feature branches are small, short-lived branches (aim for 2 working days).
This helps continuous integration and deployment, reduces the chance of merge conflicts and limits the scope of code reviews.

This approach is called ‘[GitFlow](https://datasift.github.io/gitflow/IntroducingGitFlow.html)’.

Feature branches are automatically deployed to their environment.
There are 2 ways to get the address of a branch deployment:

- If the branch has a pull request, you can find the address using the ‘View deployment’ button.
- You should click ‘Show environments’ to see this button.
- Otherwise, go to the repository on GitHub.com and click on [Deployments](https://github.com/Amsterdam/design-system/deployments).
- Find the branch in the list and click on the external website icon.

## Create a branch

Create a new branch through your shell or a GUI.
The possibility to create a branch from Jira is underway.

## Give the branch a name

The names of our branches follow a fixed format:

### Start with a group

We group branches to quickly see what type of work it contains and how urgent it may be.

The names of the groups are:

- `feature` for new functions and extensions to existing ones
- `bug` for bug fixes
- `refactor` for technical changes without functional impact
- `task` for any other work, e.g.
- documentation or configuration

Conclude the group label with a forward slash ‘/’.
Git applications use that convention to visually group branches.

### Add the task identifier

Add the ID of the appropriate sub-task to help locate specifications and discussions related to the work done in the branch.

From here on, a hyphen-minus ‘-’ is the separator.

### Describe the work to be done

Describe the contents of the branch in a few English words.
Derive these from the name of the product backlog item (PBI) to which the sub-task belongs, or in the case of larger PBIs, from the sub-task itself.

### Examples

All together, good branch names look like this:

- `feature/DES-178-introduce-checkbox`
- `bug/DES-447-correct-button-outline`
- `refactor/DES-368-use-singular-for-enums`
- `task/DES-104-add-initial-git-guidelines`

## Describe each commit

Take some time to determine a good description for your commit.
Try to describe the goal of the change.
Don’t describe what one can also deduce from the diff.

Provide a summary in English using the imperative mood.
If necessary, write context or details in prose after an empty line.
Read more in [this classic article](https://cbea.ms/git-commit/).

The goal is that anyone can quickly scan the progress of a branch based on the commit messages.

## Tidy up your branch

The commits in your branch should reflect the conceptual steps of the implementation process.
This allows reviewers to interpret the changes piece by piece rather than all of them as a whole.

If you commit regularly, this often happens automatically, but you may have committed too often or attempted multiple strategies to reach the end result.

With an ‘interactive rebase’, you can locally improve the clarity of your branch - that is, merge, split or reorder commits.
This hides unimportant steps or changes in strategy from the reviewer.

More explanation, for example, [here at SourceTree](https://www.atlassian.com/blog/sourcetree/interactive-rebase-sourcetree).

## Keep up with the latest changes

Before making a pull request, ensure your branch is as close to `develop` as possible to avoid unnecessary merge conflicts.

First, ensure that your local `develop` branch is current, e.g.
through `git fetch origin develop:develop` ([source](https://stackoverflow.com/a/17722977/2169092)).

### Merge

An alternative is to merge the `develop` branch into yours: `git pull origin develop`.
This will also ensure the local `develop` branch is current.

That adds one commit to your branch, containing all changes since the first divergence of your branches with `develop`.
If merge conflicts arise, they can be more complex than with a rebase, but each can be resolved at once.

## Git CLI shortcuts

For users of Git via the CLI, it may be helpful to create aliases for some commonly used git commands.
You can save this in a configuration file of your shell.
For example:

```sh
alias gcd="git checkout develop"
alias gcp="git checkout -"
alias gh="git push"
alias ghf="git push origin --force-with-lease"
alias gl="git log -3"
alias gp="git fetch --prune; git pull"
alias gpb="git branch --merged | grep -v "\*" | grep -Ev "(\*|main|develop)" | xargs -n 1 git branch -d"
alias gpr="git pull --rebase"
alias gra="git rebase --abort"
alias grc="git rebase --continue"
alias grd="git rebase develop"
alias gs="git status"
```

This list is based on personal preferences, so feel free to adjust it to meet your specific needs.
Just be cautious of any naming conflicts arising with existing commands or applications on your system.
If you prefer not to maintain your own list, you can join a community effort, such as [this plugin available from OhMyZsh](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/git).

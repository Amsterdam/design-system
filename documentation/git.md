# How we use Git

Several people work on our repository, which we aim to become comprehensive and long-lived. In addition, our project is open source and part of the NL Design System community. This context makes it vital to keep our code clean, its history clear, and our decisions transparent. Agreeing on how to use version control helps reach these goals.

## Use Git

We use Git for version control.

### One repository

Our single repository is hosted on the GitHub account of the City of Amsterdam.

It is a monorepo holding several packages for our design tokens, assets, various libraries, and instances of Storybook.

Initially, we cloned it from the template that NL Design System provides.

### Configure your user data

Ensure to sign your commits with your real name and work e-mail address, preferably the one of the City. Configure this immediately after downloading.

From the directory that holds the repository:

```bash
git config user.name Your Name

git config user.email your.email@amsterdam.nl
```

## Keep branches small

We work with small, short-lived branches (aim for 2 working days) directly on a `main` branch. This helps continuous integration and deployment, reduces the chance of merge conflicts and limits the scope of code reviews.

The approach is called ‘[trunk-based development](https://trunkbaseddevelopment.com/)’ and differs from the well-known ‘Git Flow’.

## Create a branch

Create a new branch through your shell or a GUI. The possibility to create a branch from Jira is underway.

## Give the branch a name

The names of our branches follow a fixed format:

### Start with a group

We group branches to quickly see what type of work it contains and how urgent it may be.

The names of the groups are:

- `feature` for new functions and extensions to existing ones
- `bug` for bug fixes
- `refactor` for technical changes without functional impact
- `task` for any other work, e.g. documentation or configuration

Conclude the group label with a forward slash ‘/’. Git applications use that convention to visually group branches.

### Add the task identifier

Add the id of the appropriate sub-task to help locate specifications and discussions related to the work done in the branch.

From here on, an underscore ‘-’ is the separator.

### Describe the work to be done

Describe the contents of the branch in a few English words. Derive these from the name of the product backlog item (PBI) to which the sub-task belongs, or in the case of larger PBIs, from the sub-task itself.

### Examples

All together, good branch names look like this:

- `feature/68178-introduce-checkbox`
- `bug/70447-correct-button-outline`
- `refactor/70368-use-singular-for-enums`
- `task/82104-add-initial-git-guidelines`

## Describe each commit

Take some time to determine a good description for your commit. Try to describe the goal of the change. Don’t describe what also be deduced from the diff.

Provide a summary, in English, using the imperative mood. If necessary, write context or details in prose after an empty line. Read more in [this classic article](https://cbea.ms/git-commit/).

The goal is that anyone can quickly scan the progress of a branch based on the commit messages.

## Tidy up your branch

The commits in your branch should reflect the conceptual steps of the implementation process. This allows reviewers to interpret the changes piece by piece rather than all of them as a whole.

If you commit regularly, this often happens automatically, but you may have committed too often or attempted multiple strategies to reach the end result.

With an ‘interactive rebase’, you can locally improve the clarity of your branch - that is, merge, split or reorder commits. This hides unimportant steps or changes in strategy from the reviewer.

More explanation, for example, [here at SourceTree](https://www.atlassian.com/blog/sourcetree/interactive-rebase-sourcetree).

## Keep up with the main branch

Before making a pull request, ensure your branch is as close to the main one as possible to avoid unnecessary merge conflicts.

First, ensure that your local main branch is current: `git checkout main && git pull && git checkout -`.

### Rebase

This can be done with a rebase: `git rebase main`.

It applies every commit from your branch on top of the main branch. If successful, the entire branch will appear to have started on the most recent state of the main branch.

There may be merge conflicts. As rebasing handles commits individually, one merge conflict may need to be resolved multiple times. After resolving a conflict, do `git rebase --continue`. If you get stuck, roll back everything with `git rebase --abort`.

If this branch already exists on the remote, you must force-push the rebase, overwriting the remote branch with your local one. This can be done via `git push origin --force-with-lease`.

If others have this branch locally, you should first consult with them, as they may lose work if they pull the remote branch after you’ve changed it.

### Merge

An alternative is to merge the main branch into yours: `git merge main`.

That adds one commit to your branch, containing all changes since the first divergence of your branches with the main one. If merge conflicts arise, they can be more complex than with a rebase, but each can be resolved at once.

### How to choose

Rebasing can be more laborious and has a risk of being destructive. It does keep the history in Git easier to comprehend because of its more linear form.

Merging often makes the tree resemble a shunting yard with connections upstream and downstream. It takes more time to locate branches and commits within them. Merge commits repeat changes already present in others.

Neither approach is mandatory or prohibited. It is good to continue evaluating with colleagues who work within the same repository.

## Git CLI shortcuts

For users of Git via the CLI, it may be useful to create aliases for some commonly used git commands. You can save this in a configuration file of your shell. For example:

```bash
alias gcm="git checkout main"
alias gcp="git checkout -"
alias gh="git push"
alias ghf="git push origin --force-with-lease"
alias gl="git log -3"
alias gp="git fetch --prune; git pull"
alias gpb="git branch --merged | grep -v "\*" | grep -Ev "(\*|master|develop)" | xargs -n 1 git branch -d"
alias gpr="git pull --rebase"
alias gra="git rebase --abort"
alias grc="git rebase --continue"
alias grm="git rebase main"
alias gs="git status"
```

Instead of maintaining such a list yourself: you can also adopt a community effort, e.g. [this plugin on OhMyZsh](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/git).

# Git method

Because we work with several people in the same repositories and because our code is open source, we have made a number of agreements about how we work.

The goal is for our code to be structured and written fairly clearly, so that it remains recognizable and pleasant to work with for everyone. It also takes less time to think about and review non-substantive matters.

## Use Git

We use Git for version control.

### Repositories

The repositories are in Azure – one for the app front end, one for each module back end, and a small number of others.

The repository for the modules backend currently also contains the frontend for the module management system MBS.

The repositories of the app front-end and those of the modules backend have been forked in GitHub. These are currently not actively maintained.

### Configuration

Immediately after downloading a repository locally, set yourself to link your commits to your email address of the Municipality of Amsterdam: `git config user.email "…@amsterdam.nl"`.

## Keep industries small

We work with small, short-lived branches (aim for 2 working days) directly on a 'main' branch. This helps continuous integration and deployment, reduces the chance of merge conflicts and limits the scope of code reviews.

This is called '[trunk based development](https://trunkbaseddevelopment.com/)' and is a clearly different approach than the well-known 'Git Flow'.

## Create a branch

You create a new branch via the card of a task in Azure Boards. This way, the branch and the task are directly linked and the task is automatically closed when the branch is merged.

This also displays the task sequence number so you can easily include it in the branch name. We do this to easily find the specification later from the implementation and vice versa.

Make sure you create the branch in the correct repository.

## Give the branch a name

The names of our branches follow a fixed format:

### Group

We group industries to quickly see what type of work it contains and how urgent it may be.

The names of the groups are:

- `feature` for new functions and extensions to existing ones
- `bug` for bug fix
- `refactor` for a technical change without functional impact
- 'task' for any other (small) chores

Immediately after the group follows a forward slash '/'. Git applications use that convention to visually group branches.

### Serial number

Then copy the serial number of the task ('task id') into the name of the branch.

From here on, an underscore '-' is the separator.

### Description

Describe the contents of the branch in a few words. Derive this from the name of the PBI to which the task belongs, or in the case of larger PBIs, from the task itself. We do this in English.

### Examples

That would look something like this:

- `feature/68178-replace-illustrations`
- `bug/70447-wasteguide-screen-sometimes-empty`
- `refactor/70368-rename-test-ids`
- `task/eslint-jsx-sort-props`

In this last example you see a sneaky branch without a task id, so without a task on the board. Only do this if the (extra) time for writing and reviewing this change outweighs its usefulness.

## Describe each commit

Take some time to determine a good description for your commit. Don't describe too literally what you change in that commit, because anyone can deduce that from the diff of that commit with the previous one.

Provide a brief summary, in English, using the imperative mood. Read more in [this fun classic](https://cbea.ms/git-commit/).

The goal is that anyone can easily scan the progress of a branch based on the commit messages.

## Tidy up your branch

It's nice if the commits in your branch are divided into conceptual steps. This way, the reviewers do not have to interpret all the new code at once, but piece by piece.

If you commit regularly, this often happens automatically, but it may also be that you commit too often, or that you choose a different solution after a few commits.

With an 'interactive rebase' you can locally tidy up your own branch - that is, merge, split or reorder commits.

More explanation, for example, [here at SourceTree](https://www.atlassian.com/blog/sourcetree/interactive-rebase-sourcetree).

## Integrate other industries

Before you make a pull request, make sure your branch is as close to 'main' as possible to avoid unnecessary merge conflicts.

### Rebase

You can do this via a rebase: `git rebase main`.

That puts all the commits from your branch one by one on top of `main`. Often this works suddenly and you then see your entire branch on top of 'main', as if you had only started it afterwards.

There may also be merge conflicts. You will then receive this for every commit after the first commit in which the conflict arose. After resolving a conflict, do `git rebase --continue`. If it doesn't work, roll back everything with `git rebase --abort`.

If this branch already exists on the remote, you need to force-push the rebase, which means you overwrite the remote branch with your local one. This can be done via `git push origin --force-with-lease`.

If others have this branch locally, you should first consult with them, because they may lose work if you do this and they want to pull the remote branch.

### Merge

An alternative is to merge `main` into your branch: `git merge main`.

That puts all changes to `main` since the commit where you branched `branch` into one commit in your branch. This can of course also cause merge conflicts. These can be more complex than with a rebase, but you only have to solve them once.

### Check `main`

Both when merging and rebasing, it is advisable to first ensure that your local `main` branch is up to date: `git checkout main && git pull && git checkout -`. Otherwise you won't be ready yet.

### Consideration

This makes merging seem a bit simpler than rebasing. You also leave history more intact.

After rebasing, the history in Git is easier to understand because of its more linear form. With a lot of merging, your history will look like a shunting yard with connections upstream and downstream.

Merging also gives you more merge commits, which by definition do not contain code that is not already in another commit and therefore add little value.

Neither approach is mandatory or prohibited. It is good to continue evaluating with colleagues who work within the same repository.

## Git CLI shortcuts

For users of git via the CLI, it may be useful to create aliases for some commonly used git commands. You can save this in a configuration file of your shell. For example:

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

You don't necessarily have to build such a list yourself: you can, for example, also adopt [this plugin on OhMyZsh](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/git).

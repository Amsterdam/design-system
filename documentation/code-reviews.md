# Method of code reviews

## Write a pull request

If you believe that the code in the branch meets the applicable acceptance criteria and meets the definition of done, you create a pull request (PR). If you have just pushed, a handy link will appear on the 'Pull requests' page of Azure to immediately create a PR from that branch to 'main', otherwise you will have to do that yourself.

### Title

Write a Dutch title with little jargon. We use these for the release notes - the list of titles of all pull requests since the previous release (or the messages of all merge commits to the 'main' branch) is a useful framework for this.

### Description

We will also provide the description of the PR in Dutch for the time being. Explain briefly but clearly what you have done – the detailed story can normally be found in the accompanying PBI.

If there are special circumstances, original ways of tackling something, things that you have deliberately left out of scope, mention those too. Test instructions, such as how to reproduce a bug or which test data you can use to arrive at the changes, also often save the reviewer a lot of time.

### Reviewers

Make sure that the right people are designated as reviewers, or better yet: set Azure to do this automatically for you.

Normally we want each PR to be approved by two other people. If you mark a reviewer as 'required', he or she must also approve, even if two others have already done so.

As an author, you can approve trivial PRs yourself, so that one other reviewer is sufficient. If the reviewer thinks it would be good for a third party to watch, he or she can add a mandatory reviewer (before giving approval) or ask the author to withdraw his approval.

### Own commentary

As an author, you can start a discussion about a piece of code by posting a comment about it yourself. For example, you can indicate in advance that you have doubts about your own implementation.

### Check the tests

When saving the PR, a number of tests are automatically performed. If one or more of these fail, the PR cannot be merged. After a few minutes they are ready and it is good to check whether everything is correct - otherwise the first reviewer is immediately blocked. Running the tests locally is a little faster, for example like this:

- front-end of the app: `npm run typescript && npm run lint:fix && npm test`.
  -a backend module: `python3 manage.py test && pylint $(find . -name '*.py' | grep -v -e venv -e migrations)`

### A PR is an intermediate step

The fact that you have created a PR does not mean “my work is finished, would you please take a look at it”. Think of it more like: “This is my proposal for implementing the task. Let us now use our shared knowledge and complete the work together as best as possible.”

If necessary, you can prepare the PR earlier, for example to see a clear diff, have someone else watch or to post comments or questions in advance. Then put the PR in 'draft' mode so that no one receives notifications or thinks that it is already time for the review.

## Provide feedback on code

Try to do a code review on a PR as quickly as possible. After all, we want to make industries live for as short a time as possible. The work is also still 'top of mind' for the author. Make sure you receive notifications of new PRs in your name.

Invest the time to fully understand the PR change. Read the title and description carefully. Typically you will check out the branch locally and test the functionality explicitly. Make yourself familiar with the new code as if you had written it yourself.

What aspects you can pay attention to during a code review is a topic for another time.

### Comment

It is important to realize that your written feedback may come across as more critical than you intended.

Your colleague has worked in good faith, make sure you communicate openly. Ask questions, make suggestions. “Would it be okay to…?” “Have you taken into account that…?” “I would expect such and such.”

Call each other if that is more convenient. And write a compliment if you come across something cool.

### Add commits

Instead of writing a comment, it is sometimes useful to commit the changes you propose yourself. Especially if you first want to try it out for yourself to see whether your idea actually works and is smarter, and the code is already there anyway.

Be sure to discuss with the author whether it is okay to push that commit. Configure the branch policy for 'main' so that the approval of the last committer does not count - after all, that code must also be reviewed by two others.

For minor changes it is more efficient to include a suggestion in a comment, which the author can accept and apply or reject at the touch of a button.

### Approve

If you have no feedback, or only comments for which you expect that further exchange is not necessary, you approve the PR ('Approve').

A PR will only be merged if automatic tests revealed no errors, all comments have been resolved and enough reviewers have approved the PR. Make sure there is no unnecessary waiting.

As an author, you may close a reviewer's comments ('Resolve') if you clearly agree. If you have a different opinion than the reviewer, or if you would like your changes to be reviewed, please leave the comment open.

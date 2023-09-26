# How we review code

We consider code reviews an essential practice of software engineering. Following the collective refinement of the task and one of the team taking up its implementation, the code review is the moment the work becomes collaborative again.

You open a pull request, explaining your approach and choices. Peers invest time in understanding the attempt and providing feedback. We document any emerging guidelines or decisions, do the work to resolve all comments, and integrate the increment into the product.

## Write a pull request

If you believe that the code in your branch meets the applicable acceptance criteria and the definition of done, you create a pull request (PR). If you have just pushed, a handy link will appear in the repo on github.com to create one immediately. Otherwise, you configure the new PR yourself.

### Set a title

Write an English title, avoiding jargon. This phrase should be easy to understand, as we use PR titles to compile release notes.

### Describe your approach

Clearly explain how you implemented the task. Be brief, e.g. by using bullet points. A reviewer will be able to find more context and details in the accompanying product backlog item.

If there are particular circumstances, original ways of tackling something, or things you have deliberately left out of scope, mention those as well. Instructions like steps to reproduce a bug or specific test data may also save the reviewer time.

### Add reviewers

Make sure that the right people are designated as reviewers. We want each PR to be approved by at least one of the maintainers.

### Add initial comments

As an author, you can start a discussion about a piece of code by commenting on it yourself. For example, you can indicate that you’d like feedback about a specific code fragment.

### Check the tests

When saving the PR, GitHub will statically analyse the code for linting errors or failing tests. Check back after a few minutes to verify there have been no errors – otherwise, the PR cannot merge, which will block the first reviewer. Alternatively, run the tests locally: `npm run lint && npm run test`.

### Consider the PR an intermediate step

Creating a PR does not imply “My work is done. Would you please look at it?”. Consider it more like: “This is my proposal for implementing the task. Let’s use our shared knowledge and complete the work together.”

If necessary, you can prepare the PR earlier; for example, to see a clear diff, have someone else watch or post comments or questions in advance. Then, put the PR in ‘draft’ mode so that no one receives notifications or thinks it is already time for the review.

## Provide feedback on code

Try to follow up on a pull request as quickly as possible. After all, we want to avoid long-living branches. The work will also be ‘top of mind’ for the author at the early stages. Make sure you receive notifications of new PRs in your name.

Invest the time to understand the PR change fully. Read the title and description carefully. Typically, you will check out the branch locally and test the functionality explicitly. Make yourself familiar with the new code as if you had written it yourself.

Use GitHub’s ‘Start a review’ feature to ensure the author receives only one notification for all your comments.

### Add comments

Please realise that your written feedback may come across as more critical than you intended.

Your colleague has worked in good faith; make sure you communicate openly. Ask questions and make suggestions. “Would it be okay to…?” “Have you taken into account that…?” “I would expect such and such.”

Call each other if that is more convenient. And write a compliment if you come across some quality work.

### Suggest changes

Use GitHub’s suggestion feature to propose specific changes to code. Though you’ll still want to introduce the change, suggestions are often more straightforward than more prose. The author can apply or reject the proposal at the touch of a button.

### Resolve comments

The author of the pull request is the one to resolve all comments.

### Approve the PR

If you have no feedback or only comments for which you expect that further exchange is not necessary, you approve the PR (‘Approve’).

A PR will only merge if automatic tests reveal no errors, all comments have been resolved, and enough reviewers have approved the PR. Make sure there is no unnecessary waiting.

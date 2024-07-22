<!-- @license CC0-1.0 -->

# Password Input

Helps users enter a password.

Use this component when the input requires sensitive information, like passwords or PINs.
It ensures that the input is not readable by others who might be looking at the screen.
The characters entered are hidden, represented by squares.

Consider setting the following attributes:

1. Allow the user’s password manager to automatically fill the password through `autocomplete="current-password"`.
   When asking for a new password, use `autocomplete="new-password"` instead.
2. Add a `minlength` attribute to ensure passwords meet a minimum length requirement.
   Do not add a `maxlength` attribute.
3. Use the `pattern` attribute to enforce password policies, like including numbers and special characters.
   Describe these policies in the [Field](?path=/docs/components-forms-field--docs)’s description as well.
4. If the password is a numeric PIN, add `inputmode="numeric"`.
   Devices with virtual keyboards then switch to a numeric keypad layout which makes entering the password easier.
5. Set `autocapitalize="none"`, `autocorrect="off"` and `spellcheck="false"` to stop browsers automatically changing user input.
   Passwords shouldn’t be checked for spelling or grammar.
   This may also prevent posting the password to third-party plugins.

Follow the [guidelines for asking for passwords](https://design-system.service.gov.uk/patterns/passwords/) of the GOV.UK Design System.

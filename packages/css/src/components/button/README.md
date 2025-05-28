<!-- @license CC0-1.0 -->

# Button

Allows the user to perform an action or operate the interface.

## Guidelines

- Describe the Button’s function through a short label.
- Use only 1 primary Button per screen.
- Wrap 2 or more consecutive buttons and/or links in an [Action Group](https://designsystem.amsterdam/?path=/docs/components-layout-action-group--docs).
- Add `type="submit"` to make the Button submit a form.
- Do not use a Button for navigation.
  Use e.g. a [Standalone Link](https://designsystem.amsterdam/?path=/docs/components-navigation-standalone-link--docs) instead.

## Relevant WCAG requirements

- [WCAG requirement 2.1.3](https://www.w3.org/TR/WCAG21/#keyboard-no-exception):
  You can activate the button with `Enter` or `Space`, and it is possible with ‘Tab’ the button to focus.
  Using `Space` does not result in scrolling the page.
- [WCAG requirement 2.4.6](https://www.w3.org/TR/WCAG21/#headings-and-labels): the label of the button must be clear
- [WCAG requirement 2.5.2](https://www.w3.org/TR/WCAG21/#pointer-cancellation):
  - do not use the `mousedown` event to activate the button, instead use the `click` event
  - `mousedown` may only be used if `mouseup` undoes the effect, for example, a “fast forward” button to fast-forward audio or video.
- [WCAG requirement 2.5.5](https://www.w3.org/TR/WCAG21/#target-size): The button must be large enough to click, and small buttons should not be too close to another button.

## References

- [W3C - Focus Visible](https://www.w3.org/WAI/WCAG21/Understanding/focus-visible.html)
- [W3C - Headings & labels](https://www.w3.org/TR/WCAG21/#headings-and-labels)

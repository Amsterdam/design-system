<!-- @license CC0-1.0 -->

# Rich text

Use Rich text to let editors format content with a limited set of HTML elements that match the Amsterdam Design System.

## Guidelines

- Offer only the formatting options that are needed for the content type.
- Prefer semantic elements like headings, lists, and links over visual styling.
- Make sure the output of the editor is validated and sanitized before it is stored or rendered.
- Do not expose formatting options that the design system does not support.

## Usage

Use the Rich text styles together with the React RichText component. The editor area is visually aligned with Text Area.

- Toolbar actions (for example bold, italic, list, link) use Icon Button and icons from the design system.
- The editable region should be announced as a multiline text field by assistive technologies.

## Accessibility

- The editable region must have an accessible name (`aria-label` or an associated label).
- Use `role="textbox"` and `aria-multiline="true"` for the contenteditable area.
- Ensure that keyboard users can reach all toolbar buttons and the editable region.
- Do not rely on colour alone to convey meaning inside rich text content.

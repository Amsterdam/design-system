<!-- @license CC0-1.0 -->

# Definition of done

## Quality requirements

### For components

#### Required accessibility checks

- Focus outline is visible for interactive components.
- Content does not overflow or get cut off on smaller screens.
- Native pointer (mouse), keyboard, and touch interactions work. For example, you can tab to interactive elements and you can pinch to zoom.
- Custom gestures do not conflict with native ones. For example, a horizontal swipe to scroll does not conflict with the browser’s swipe-to-navigate gesture.
- The component is visible and usable when page zoom is at 200%.
- The component is visible and usable at the maximum text size you can set in your browser settings. Note: this is not page zoom.
- Color is not the only way to communicate information.
- The component passes validation using [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview), [WAVE](https://wave.webaim.org/standalone), and [the Markup Validation Service](https://validator.w3.org/).
- Works correctly with a screen reader, at minimum with NVDA and Chrome on Windows, and VoiceOver and Safari on macOS or iOS:
  - All visible content is announced by a screen reader.
  - Elements have the correct role. For example, text that looks like a heading has the `heading` role.
  - Interactive elements are announced with their role, name, and state (e.g., “button, Submit, disabled”).
  - Dynamic changes (such as error messages or loading states) are announced without requiring focus to move.
  - The reading order matches the visual order.
  - All meaningful images and icons have descriptive alternative text.
  - Decorative images and icons are hidden from assistive technology.
- `prefers-reduced-motion` is used if it includes animation.
- Content does not overflow or get cut off when the provided CSS snippet is applied. See [WCAG 1.4.12](https://www.w3.org/TR/WCAG22/#text-spacing). Use the Stylus plugin in [Chrome](https://chromewebstore.google.com/detail/stylus/clngdbkpkpeebahjckkjfobafhncgmne) or [Firefox](https://addons.mozilla.org/en-US/firefox/addon/styl-us/) to make this easier.

```
* {
  line-height: 1.5 !important;
  letter-spacing: 0.12em !important;
  word-spacing: 0.16em !important;
}

p {
  margin-bottom: 2em !important;
}
```

#### Additional accessibility checks

- All content, including `aria-label` if used, displays correctly in a right-to-left (RTL) language when translated.
- The print preview renders the same as on a smaller screen, except for print-specific styles.
- The component is usable when CSS fails to load: unnecessary elements are not rendered, and visual elements like images are not shown overly large.
- The component degrades gracefully when JavaScript is unavailable or fails to load:
  - Static content is visible and readable.
  - Any functionality that can be implemented in HTML/CSS alone still works (e.g., a `<details>` element for disclosure, native `<select>` for dropdowns).
  - The component does not render a broken or empty state (e.g., a spinner that never resolves, or a blank container where content should be).
- Works correctly in forced colours mode:
  - All text and interactive elements remain visible and distinguishable.
  - Focus indicators are visible.
  - Icons and graphical elements that convey meaning are visible and distinguishable.
  - Borders and outlines are present where needed to distinguish UI regions.

#### Automated testing

- Unit tests are written and pass.
- A test story renders all component variants for visual regression testing.
- Visual changes in Chromatic are reviewed and approved.
- ESLint, Stylelint, and Prettier report no errors.

### For pages

- All required accessibility checks pass.
- The heading hierarchy of the page is correct.
  Use the HeadingsMap plugin in [Chrome](https://chromewebstore.google.com/detail/headingsmap/flbjommegcjonpdmenkdiocclhjacmbi) or [Firefox](https://addons.mozilla.org/en-US/firefox/addon/headingsmap/) to make this easier.

For a more thorough test, see [the City’s accessibility checklist](https://tamtam.amsterdam.nl/do/page?id=5391962-70616765) (internal Gemeente Amsterdam network only).

## Clean implementation

### Component setup

New components are created using our Plop templates. Extensions of existing components and new subcomponents also follow these templates.

### CSS validation

- All CSS declarations are necessary and have an effect.
- All CSS classes defined are actually used in the HTML.
- All classes used in the HTML are defined in the CSS.

### Token usage

- All tokens used are defined.
- No unused tokens are defined.

### Unit tests

- Ensure tests use the correct ARIA roles.
- For enum props, all variants are covered in unit tests.

### Exports

- Add or update exports in `index.*` files.
- Export the main component and its type. Also export the types of any subcomponents.

### Stories

- Add or update Storybook stories for new or changed components.

## Code conventions

- You’ve followed [the contribution guidelines](../CONTRIBUTING.md).
- You’ve followed the [NL Design System developer guidelines](https://nldesignsystem.nl/handboek/developer/introductie/).
- CSS follows [the CSS coding conventions](../packages/css/documentation/coding-conventions.md).
- React code follows [the React coding conventions](../packages/react/documentation/coding-conventions.md).

## Documentation

- Props are typed with JSDoc descriptions.
- A component README is written (documentation in English, example content in Dutch).
- Storybook stories exists for all component variants that are relevant to our users.
- Documentation follows Storybook conventions (Sentence case headings, Title Case component names).

## Licensing

- Code files have a @license EUPL-1.2+ header with Copyright Gemeente Amsterdam
- Documentation files have a @license CC0-1.0 header

## Design

The design team has looked at and approved new work.

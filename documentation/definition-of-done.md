<!-- @license CC0-1.0 -->

# Definition of done

## Quality requirements

### For components

#### Required accessibility checks

- Ensure focus outline is visible for interactive components.
- Test on both mobile and desktop devices.
- Verify visibility and usability when zoomed up to 200%.
- Verify visibility and usability when adjusting the text size to the maximum.
- Confirm that color is not the sole means of conveying information.
- Validate the component using [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview), [WAVE](https://wave.webaim.org/standalone), and [the Markup Validation Service](https://validator.w3.org/).
- Test with a screen reader.
- If the component includes animation, verify it respects the `prefers-reduced-motion` setting.
- Apply the provided CSS snippet and confirm that all elements are still rendered correctly, adhering to WCAG 1.4.12. In Chrome, you can use the [Stylus plugin](https://chromewebstore.google.com/detail/stylus/clngdbkpkpeebahjckkjfobafhncgmne) for easy implementation.

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

- Translate the component into a right-to-left (RTL) language and verify that all content, including `aria-label` if used, is translated and displays correctly in RTL.
- Check the print preview for correct rendering.
- Check if the component still makes sense when CSS fails to load.
- Ensure the component is still functional without JavaScript enabled.
- Test in forced colors mode.

#### Automated testing

- Unit tests are written and pass.
- A test story renders all component variants for visual regression testing.
- Visual changes in Chromatic are reviewed and approved.
- ESLint, Stylelint, and Prettier report no errors.

### For pages

- All required accessibility checks pass.
- Verify that the heading hierarchy of the page is correct.
  When using Chrome, the [HeadingsMap](https://chromewebstore.google.com/detail/headingsmap/flbjommegcjonpdmenkdiocclhjacmbi?pli=1) plugin makes this easier.

For a more thorough test, see [Mike's accessibility checklist](https://tamtam.amsterdam.nl/do/page?id=5391962-70616765) (internal Gemeente Amsterdam network only).

## Design

The design team has looked at and approved new work.

## Clean implementation

- **Component setup:** New components are created using our Plop templates. Extensions of existing components and new subcomponents also follow these templates.
- **CSS validation:**
  - All CSS declarations are necessary and have an effect.
  - All CSS classes defined are actually used in the HTML.
  - All classes used in the HTML are defined in the CSS.
- **Token usage:**
  - All tokens used are defined.
  - No unused tokens are defined.
- **Unit tests:**
  - Ensure tests use the correct ARIA roles.
  - For enum props, all variants are covered in unit tests.
- **Exports:**
  - Add or update exports in `index.*` files.
  - Export the main component and its type. Also export the types of any subcomponents.
- **Stories:**
  - Add or update Storybook stories for new or changed components.

## Code conventions

- You’ve followed [the contribution guidelines](../CONTRIBUTING.md).
- You’ve followed the [NL Design System developer guidelines](https://nldesignsystem.nl/handboek/developer/introductie/).
- CSS follows [the CSS coding conventions](../packages/css/documentation/coding-conventions.md).
- React code follows [the React coding conventions](../packages/react/documentation/coding-conventions.md).

## Documentation

- Props are typed with JSDoc descriptions.
- A component README is written (documentation in English, example content in Dutch).
- A Storybook story file exists with representative variants.
- Documentation follows Storybook conventions (Sentence case headings, Title Case component names).

## Licensing

- Code files have a @license EUPL-1.2+ header with Copyright Gemeente Amsterdam
- Documentation files have a @license CC0-1.0 header

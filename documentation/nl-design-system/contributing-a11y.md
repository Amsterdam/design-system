<!-- @license CC0-1.0 -->

# Contribution Guidelines for accessibility

## Consider accessibility in every step of the process

Before the work begins:

- Allocate time and budget to deliver and test for accessibility.
- Include accessibility requirements in your Definition of Done.

During design phase:

- Consider minimum font size when defining a font size scale for typography.
- Do not use font sizes that fall outside of the font size scale.
- Provide a color pallete where every background color is accompanied by a contrasting foreround color for text and icons.
- Provide designs for the various states of components, ensure the states can be distinguished from each other with varying levels of eyesight and color perception.
- Use vision simulation tools inside your design app, such as [Stark](https://www.getstark.co).

During refinement and planning of development work:

- Consider the guidelines from the [WAI-ARIA Authoring Practices](https://www.w3.org/TR/wai-aria-practices/#aria_ex), and see if documentation regarding ARIA-attributes and keyboard shortcuts exist for your type of widget. Add those to your development checklist. Warning: not every example widget implementation works great with screen readers, so test this yourself before deciding to use it as reference.
- When estimating Story Points for a component, make sure you have a clear understanding of the accessibility requirements. This helps you to avoid overcommitting to work in a sprint and feel forced to rush the accessibility aspects.

During development:

- Be mindful of accessibility warnings in Storybook.
- Stay in communication with designers to evolve the design when needed, do not let the initial design stand in the way of making an accessible product.
- Install browser plugins to test accessibility when integrating components in your project.

During testing:

- Test using just a keyboard, and no mouse or touch.
- Test in Windows with [High Contrast Mode](https://support.microsoft.com/en-us/windows/turn-high-contrast-mode-on-or-off-in-windows-909e9d89-a0f9-a3a9-b993-7a6dcee85025). The algorithm to display your website in highly contrasting colors isn't without flaws: sometimes important details such as icons and the focus outline are no longer perceivable.
- Test using a screen reader, consider using captions instead of the voice synthesizer.
- Test using visual perception simulation tools for blurry vision and color blindness.

When your project is in beta:

- Consider testing your product with users with diverse abilities.

For release candidates:

- Request an accessibility audit.
- Report back any issues related to design system components and patterns to the backlog.
- Fix reported bugs before going to production.

For production:

- Offer a way to report accessibility issues.

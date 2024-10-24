<!-- @license CC0-1.0 -->

# Image

Displays an image.

## Guidelines

- Do not forget to include a description of the image in the `alt` attribute.
  This ensures that screen reader users can also access this information.
  Additionally, it can aid in search engine optimization.
- A description is unnecessary for decorative images; use `alt=""` for these.
  Examples are images that add little to the nearby text or pictures that purely contribute to the design or atmosphere of the page (source: [W3C Web Accessibility Initiative](https://www.w3.org/WAI/tutorials/images/decorative/)).
- Optionally specify multiple candidates for the image through the `srcSet` attribute.
  For example, provide small, medium, and large variants for various screen sizes.
  This prevents unnecessary downloading of large files.
  Do this especially for the main image of a page, where the difference between sizes on a narrow and wide screen is most significant.
- Ensure that the aspect ratio of the image is supported by the [aspect ratio token](/docs/brand-design-tokens-aspect-ratio--docs). Alternatively, use the `cover` Image prop or the `object-fit: contain` CSS property to display the image correctly.

## Relevant WCAG requirements

- [WCAG 1.1.1](https://www.w3.org/TR/WCAG22/#non-text-content): Non-text content must have a text alternative.
- [WCAG 1.4.5](https://www.w3.org/TR/WCAG22/#images-of-text): Use text instead of images of text.
- [WCAG 1.4.9](https://www.w3.org/TR/WCAG22/#images-of-text-no-exception): Use images of text only when there is no alternative.

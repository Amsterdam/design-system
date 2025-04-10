<!-- @license CC0-1.0 -->

# Image

Displays an image.

## Design

Every Image should be shown in one of the [available aspect ratios](https://designsystem.amsterdam/?path=/docs/brand-design-tokens-aspect-ratio--docs).
The default is 16:9.
If the intrinsic dimensions of the source do not match an aspect ratio, the image will get cropped to cover the intended area.

## Guidelines

- The `alt` attribute is required, but can be empty.
- A description is unnecessary for decorative images; use `alt=""` for these.
  Non-visual browsers will then hide the image from the user.
  Examples are images that add little to the nearby text, and pictures that purely contribute to the design or atmosphere of the page (source: [W3C Web Accessibility Initiative](https://www.w3.org/WAI/tutorials/images/decorative/)).
- Do describe the content of the image if the image isn’t only decorative.
  When choosing a description for your images, imagine what you would say when reading the page to someone over the phone without mentioning that there’s an image on the page (source: [MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/alt)).
- Every image’s alternate text should be able to replace the image without altering the meaning of the page.
  You should never use `alt` for text that could be construed as a caption or title (source: [MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/alt)).
- The alternate text will also display if the image is not (yet) loaded.
  Additionally, it can be helpful for search engine optimization.
- Optionally specify multiple candidates for the image through the `srcSet` attribute.
  For example, provide small, medium, and large variants for various screen sizes.
  This prevents unnecessary downloading of large files.
  Do this especially for the main image of a page, where the difference between sizes on a narrow and wide screen is most significant.

## Relevant WCAG requirements

- [WCAG 1.1.1](https://www.w3.org/TR/WCAG22/#non-text-content): Non-text content must have a text alternative.
- [WCAG 1.4.5](https://www.w3.org/TR/WCAG22/#images-of-text): Use text instead of images of text.
- [WCAG 1.4.9](https://www.w3.org/TR/WCAG22/#images-of-text-no-exception): Use images of text only when there is no alternative.

## Further reading

- [Alt Text: Not Always Needed](https://www.nngroup.com/articles/alt-text-usability/)
  (Nielsen Norman Group)
  “Adding alt text to every image does not automatically make webpage content easy to navigate and consume.
  Screen-reader users [...] do not rely on visual information,
  which means they are not interested in designers’ attempts to recreate visual experiences for them.”
- [How to Write Good Alt Text](https://www.w3.org/WAI/tutorials/images/decision-tree/)
  (Web Accessibility Initiative)
  Four questions help you decide whether an image needs describing and how to do so.
  “This decision tree describes how to use the alt attribute of the image element in various situations.”

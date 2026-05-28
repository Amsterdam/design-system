<!-- @license CC0-1.0 -->

# Description List

A collection of terms and their descriptions.

## Design

- Description Lists have a vertical orientation when their nearest [query container](/docs/utilities-css-query-container--docs) — typically a Grid Cell, but also a Dialog or Page — is less than `32rem` wide (typically 512 pixels). Above this size, they change to a horizontal orientation, placing the descriptions to the right of their terms instead of below them.
- The column for the terms is as wide as the longest term, without wrapping. Its width can be adjusted to be ‘large’ (50%), ‘medium’ (33%), or ‘small’ (20%), which also allows the terms to wrap.
- The term is set in bold text.

## References

- [MDN: `<dl>`: The Description List element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dl)
- [WCAG: Using description lists](https://www.w3.org/WAI/WCAG22/Techniques/html/H40)

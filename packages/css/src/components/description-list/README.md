<!-- @license CC0-1.0 -->

# Description List

A collection of terms and their descriptions.

## Design

- The column for the terms is as wide as the longest term, without wrapping. Its width can be adjusted to be ‘large’ (50%), ‘medium’ (33%), or ‘small’ (20%), which also allows the terms to wrap.
- The term is set in bold text.
- Description Lists display in a vertical orientation by default. They display in a horizontal orientation (descriptions to the right of their terms) when enough space is available.
  Inside a [container query context](/docs/utilities-css-inline-size-context--docs), this happens at a container width of `32rem` (typically 512 pixels).
  Without a containment context, it falls back to a media query on the medium breakpoint.

## References

- [MDN: `<dl>`: The Description List element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dl)
- [WCAG: Using description lists](https://www.w3.org/WAI/WCAG22/Techniques/html/H40)

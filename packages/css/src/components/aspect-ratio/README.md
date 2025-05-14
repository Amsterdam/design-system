<!-- @license CC0-1.0 -->

# Aspect Ratio

Constrains media content to a supported aspect ratio.

## Class names

Each available aspect ratio has an associated class name.
The class can be applied to any component or element.

| Class name              | Example                                                                 |
| :---------------------- | :---------------------------------------------------------------------- |
| `ams-aspect-ratio-9-16` | <div className="ams-docs-token-example--space ams-aspect-ratio-9-16" /> |
| `ams-aspect-ratio-3-4`  | <div className="ams-docs-token-example--space ams-aspect-ratio-3-4" />  |
| `ams-aspect-ratio-1-1`  | <div className="ams-docs-token-example--space ams-aspect-ratio-1-1" />  |
| `ams-aspect-ratio-4-3`  | <div className="ams-docs-token-example--space ams-aspect-ratio-4-3" />  |
| `ams-aspect-ratio-16-9` | <div className="ams-docs-token-example--space ams-aspect-ratio-16-9" /> |
| `ams-aspect-ratio-16-5` | <div className="ams-docs-token-example--space ams-aspect-ratio-16-5" /> |

## Guidelines

- Apply one of these classes to an image, video or other media content to constrain its dimensions to one of the available aspect ratios.
- The default aspect ratio is 16:9.
- When using `width` and `height` attributes on an image (for example, when using the [Next Image component](https://nextjs.org/docs/app/api-reference/components/image)), the aspect ratio is determined by these values and will take precedence over the class. To correct this, use the class `ams-image`.

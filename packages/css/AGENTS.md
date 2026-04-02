<!-- @license CC0-1.0 -->

# CSS Package — Agent Instructions

These instructions are additive to the root [AGENTS.md](../../AGENTS.md). Read that first.

Full conventions: [documentation/coding-conventions.md](documentation/coding-conventions.md) and [README.md](README.md)

## Naming

BEM-ish NLDS naming:

- Block: `.ams-component`
- Modifier: `.ams-component--variant`
- Element: `.ams-component__element`

## Input state precedence (highest → lowest)

Style rules must respect this order so higher-priority states always win:

1. Disabled
2. Hover (suppressed when disabled)
3. Invalid (+ hover variant)
4. Default

For checkbox / radio / switch value states:

1. Indeterminate (overrides checked)
2. Checked
3. Default (unchecked)

## Pseudo-class blocks

Only list changed properties inside a pseudo-class block. Unchanged properties belong in the base class.

## Mixins

- Extract any pattern repeated 2+ times into a mixin.
- Name reset mixins after the element: `@mixin reset-ul`.
- Each declaration in a mixin must override the default user-agent style.
- Common mixins live in `src/common/`.

## Form validation

Support both native (`:invalid`) and manual (`aria-invalid`) validation styles.

## README

- Location: `src/components/<name>/README.md`
- Content: guidelines, usage intent, relevant WCAG requirements.
- Do **not** enumerate every token or list technical variants exhaustively.

## File locations

- Component SCSS: `src/components/<name>/<name>.scss`
- Register in: `src/components/index.scss`

Run lint: `pnpm lint:css` or auto-fix with `pnpm lint-fix:css`.

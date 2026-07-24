/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

/**
 * Shared parameters for the Lo-fi Mode snapshot sheets.
 *
 * `themes.options` pins every sheet to Lo-fi. The preview decorator resolves the selected theme
 * against this list, and a one-entry list always resolves to that entry. Without the pin the sheets
 * would render in whichever theme is selected — Spacious in a fresh browser — so Chromatic would
 * snapshot them in the default mode and cover nothing.
 *
 * `tags` deliberately does not live here: Storybook reads tags from the source with a static parser,
 * which cannot follow a spread of an imported object. Tags set through this meta silently index as
 * `dev` and `autodocs` instead. Each sheet writes its own tags literally for that reason.
 */
export const loFiMeta = {
  parameters: {
    themes: { options: ['Spacious Lo-fi'] },
  },
}

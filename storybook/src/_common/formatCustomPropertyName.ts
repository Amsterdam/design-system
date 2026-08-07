/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

/**
 * Converts a token path to the name of the CSS custom property that the build pipeline ships for it.
 * A trailing `default` segment is dropped, as the `name/customKebab` and `name/customCamel` transforms in the tokens
 * package do.
 * Those transforms also run the path through `kebabCase` and this does not, which holds only while every path segment
 * is lower case and hyphenated already, as all of them currently are.
 *
 * @param path - The token path segments, e.g. `['ams', 'color', 'interactive', 'default']`.
 * @returns The custom property name, including the leading double hyphen.
 *
 * @example
 * formatCustomPropertyName(['ams', 'color', 'interactive'])            // "--ams-color-interactive"
 * formatCustomPropertyName(['ams', 'color', 'interactive', 'default']) // "--ams-color-interactive"
 * formatCustomPropertyName(['ams', 'color', 'interactive', 'hover'])   // "--ams-color-interactive-hover"
 */
export function formatCustomPropertyName(path: string[]): string {
  const segments = path[path.length - 1] === 'default' ? path.slice(0, -1) : path

  return `--${segments.join('-')}`
}

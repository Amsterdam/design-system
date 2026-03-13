/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { kebabCase } from 'change-case'
import { transformTypes } from 'style-dictionary/enums'

/**
 * Strip a trailing `default` path segment when transforming to kebab case.
 *
 * @example
 * // Token path without 'default':
 * ['ams', 'color', 'primary'] → '--ams-color-primary'
 *
 * // Token path with trailing 'default':
 * ['ams', 'color', 'default'] → '--ams-color'
 */
export const nameCustomKebab = {
  name: 'name/customKebab',
  transform: function (token) {
    const filteredPath = token.path[token.path.length - 1] === 'default' ? token.path.slice(0, -1) : token.path

    return kebabCase(filteredPath.join(' '))
  },
  type: transformTypes.name,
}

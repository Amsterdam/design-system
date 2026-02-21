/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { camelCase } from 'change-case'
import { transformTypes } from 'style-dictionary/enums'

/**
 * Strip a trailing `default` path segment when transforming to camel case.
 *
 * @example
 * // Token path without 'default':
 * ['ams', 'color', 'primary'] → 'amsColorPrimary'
 *
 * // Token path with trailing 'default':
 * ['ams', 'color', 'default'] → 'amsColor'
 */
export const nameCustomCamel = {
  name: 'name/customCamel',
  transform: function (token) {
    const filteredPath = token.path[token.path.length - 1] === 'default' ? token.path.slice(0, -1) : token.path

    return camelCase(filteredPath.join(' '))
  },
  type: transformTypes.name,
}

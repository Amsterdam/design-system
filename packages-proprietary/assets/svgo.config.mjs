/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { basename } from 'node:path'

import { directionalIcons } from './directional-icons.mjs'

export default {
  plugins: [
    {
      fn: (root, _params, info) => {
        if (!info.path) return

        const svg = root.children.find((node) => node.type === 'element' && node.name === 'svg')

        if (!svg) return

        if (directionalIcons.has(basename(info.path, '.svg'))) {
          svg.attributes['data-directional'] = 'true'
        } else {
          delete svg.attributes['data-directional']
        }
      },
      name: 'markDirectionalIcons',
    },
    'removeDimensions',
    'removeUselessStrokeAndFill',
    {
      name: 'removeAttrs',
      params: {
        attrs: '(fill|stroke)',
      },
    },
    {
      name: 'sortAttrs',
      params: {
        order: [],
        xmlnsOrder: 'alphabetical',
      },
    },
  ],
}

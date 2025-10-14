/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { DOMNode } from 'html-react-parser'
import type { HTMLReactParserOptions } from 'html-react-parser'

import { attributesToProps, domToReact, Element } from 'html-react-parser'
import { createElement } from 'react'

const classLookup: Record<string, string> = {
  a: 'ams-link',
  p: 'ams-paragraph ams-mb-xl',
}

export const parserOptions: HTMLReactParserOptions = {
  replace(node) {
    if (node instanceof Element && node.attribs) {
      const className = classLookup[node.name]

      if (className) {
        return createElement(
          node.name,
          { ...attributesToProps(node.attribs), className },
          domToReact(node.children as DOMNode[], parserOptions),
        )
      }
    }

    return undefined
  },
}

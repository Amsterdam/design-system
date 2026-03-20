import { types as t } from '@babel/core'

export function logoTemplate({ componentName, jsx }, { tpl }) {
  // SVGR prefixes all component names with 'Svg'; strip it for logos
  const name = componentName.replace(/^Svg/, '')

  return tpl`
    /**
     * @license EUPL-1.2+
     * Copyright Gemeente Amsterdam
     */
    import type { ForwardedRef, SVGProps } from 'react'
    import { forwardRef } from 'react'

    const ${name} = forwardRef((props: SVGProps<SVGSVGElement>, ref: ForwardedRef<SVGSVGElement>) => (
      ${jsx}
    ))

    ${name}.displayName = ${t.stringLiteral(name)}

    export default ${name}
  `
}

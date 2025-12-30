/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { tokenToCss } from '../../_common/tokenToCss'

type TypographySampleProps = {
  fontFamily?: string
  fontSize?: string
  fontWeight?: string
  lineHeight?: string
}

export const TypographySample = ({ fontFamily, fontSize, fontWeight, lineHeight }: TypographySampleProps) => {
  return (
    <span
      style={{
        ...(fontFamily && { fontFamily: tokenToCss(fontFamily) }),
        ...(fontSize && { fontSize: tokenToCss(fontSize) }),
        ...(fontWeight && { fontWeight: tokenToCss(fontWeight) }),
        ...(lineHeight && { lineHeight: tokenToCss(lineHeight) }),
      }}
    >
      Abc
    </span>
  )
}

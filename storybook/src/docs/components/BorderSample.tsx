/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { CSSProperties, HTMLAttributes, PropsWithChildren } from 'react'

import './border-sample.css'
import { formatTokenValue } from '../../_common/formatTokenValue'

export type DivProps = PropsWithChildren<HTMLAttributes<HTMLDivElement>>

type BorderSampleProps = {
  borderInlineStartStyle?: string
  borderInlineStartWidth?: string
}

export const BorderSample = ({ borderInlineStartStyle, borderInlineStartWidth }: BorderSampleProps) => {
  return (
    <div
      className="ams-docs-border-sample"
      style={{
        ...(borderInlineStartStyle && {
          // borderInlineStartStyle is a strict CSS property, we need to cast it to CSSProperties
          borderInlineStartStyle: formatTokenValue<CSSProperties['borderInlineStartStyle']>(borderInlineStartStyle),
        }),
        ...(borderInlineStartWidth && { borderInlineStartWidth: formatTokenValue(borderInlineStartWidth) }),
      }}
    />
  )
}

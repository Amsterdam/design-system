/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { CSSProperties, HTMLAttributes, PropsWithChildren } from 'react'

import './border-sample.css'
import type { HTMLAttributes, PropsWithChildren } from 'react'

export type DivProps = PropsWithChildren<HTMLAttributes<HTMLDivElement>>

type BorderSampleProps = {
  borderStyle?: string
  borderWidth?: string
}

export const BorderSample = ({ borderStyle, borderWidth }: BorderSampleProps) => {
  return (
    <div
      className="ams-docs-border-sample"
      style={{
        ...(borderStyle && {
          // borderInlineStartStyle is a strict CSS property, we need to cast it to CSSProperties
          borderInlineStartStyle: formatTokenValue<CSSProperties['borderInlineStartStyle']>(borderStyle),
        }),
        ...(borderWidth && { borderInlineStartWidth: formatTokenValue(borderWidth) }),
      }}
    />
  )
}

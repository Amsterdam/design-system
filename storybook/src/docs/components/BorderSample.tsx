/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import './border-sample.css'
import type { HTMLAttributes, PropsWithChildren } from 'react'

export type DivProps = PropsWithChildren<HTMLAttributes<HTMLDivElement>>

type BorderSampleProps = {
  borderSize: string
}

export const BorderSample = ({ borderSize }: BorderSampleProps) => {
  const isVariable = borderSize.includes('{')
  const borderProp = isVariable ? `var(--${borderSize.replace(/[{}]/g, '').replace(/\./g, '-')})` : borderSize

  return <div className="ams-docs-border-sample" style={{ borderInlineStartWidth: borderProp }} />
}

/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { CSSProperties, HTMLAttributes } from 'react'

import './border-sample.css'
import { formatTokenValue } from '../../_common/formatTokenValue'

type BorderSampleProps = {
  style?: string
  width?: string
} & Omit<HTMLAttributes<HTMLDivElement>, 'className'>

export const BorderSample = ({ style, width }: BorderSampleProps) => (
  <div
    className="_ams-border-sample sb-unstyled"
    style={{
      ...(style && {
        // borderInlineStartStyle is a strict CSS property, we need to cast it to CSSProperties
        borderInlineStartStyle: formatTokenValue<CSSProperties['borderInlineStartStyle']>(style),
      }),
      ...(width && { borderInlineStartWidth: formatTokenValue(width) }),
    }}
  />
)

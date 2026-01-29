/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { CSSProperties, HTMLAttributes } from 'react'

import { clsx } from 'clsx'

import './border-sample.css'
import { formatTokenValue } from '../../_common/formatTokenValue'

type BorderSampleProps = {
  style?: string
  width?: string
} & HTMLAttributes<HTMLDivElement>

export const BorderSample = ({ className, style, width }: BorderSampleProps) => (
  <div
    className={clsx('_ams-border-sample', className, 'sb-unstyled')}
    style={{
      ...(style && {
        // borderInlineStartStyle is a strict CSS property, we need to cast it to CSSProperties
        borderInlineStartStyle: formatTokenValue<CSSProperties['borderInlineStartStyle']>(style),
      }),
      ...(width && { borderInlineStartWidth: formatTokenValue(width) }),
    }}
  />
)

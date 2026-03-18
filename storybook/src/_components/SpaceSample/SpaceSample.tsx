/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { HTMLAttributes } from 'react'

import './space-sample.css'
import { formatTokenValue } from '../../_common/formatTokenValue'

type SpaceSampleProps = {
  value?: string
} & Omit<HTMLAttributes<HTMLDivElement>, 'className'>

export const SpaceSample = ({ value }: SpaceSampleProps) => (
  <div
    className="_ams-space-sample sb-unstyled"
    style={{
      ...(value && { inlineSize: formatTokenValue(value) }),
    }}
  />
)

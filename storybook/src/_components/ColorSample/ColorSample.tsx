/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { HTMLAttributes } from 'react'

import './color-sample.css'
import { formatTokenValue } from '../../_common/formatTokenValue'

type ColorSampleProps = {
  value: string
} & Omit<HTMLAttributes<HTMLDivElement>, 'className'>

export const ColorSample = ({ value }: ColorSampleProps) =>
  value ? <div className="_ams-color-sample sb-unstyled" style={{ backgroundColor: formatTokenValue(value) }} /> : null

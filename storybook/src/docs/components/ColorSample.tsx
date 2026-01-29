/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { HTMLAttributes } from 'react'

import { clsx } from 'clsx'

import './color-sample.css'
import { formatTokenValue } from '../../_common/formatTokenValue'

type ColorSampleProps = {
  value: string
} & HTMLAttributes<HTMLDivElement>

export const ColorSample = ({ className, value }: ColorSampleProps) =>
  value ? (
    <div
      className={clsx('_ams-color-sample', className, 'sb-unstyled')}
      style={{ backgroundColor: formatTokenValue(value) }}
    />
  ) : null

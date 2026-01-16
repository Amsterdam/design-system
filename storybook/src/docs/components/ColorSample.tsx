/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { clsx } from 'clsx'

import './color-sample.css'
import { formatTokenValue } from '../../_common/formatTokenValue'

type ColorSampleProps = {
  color: string
}

export const ColorSample = ({ color }: ColorSampleProps) =>
  color ? (
    <div
      className={clsx('ams-docs-color-sample', 'sb-unstyled')}
      style={{ backgroundColor: formatTokenValue(color) }}
    />
  ) : null

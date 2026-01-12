/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { formatTokenValue } from '../../_common/formatTokenValue'
import './color-sample.css'

type ColorSampleProps = {
  color: string
}

export const ColorSample = ({ color }: ColorSampleProps) =>
  color ? <div className="ams-docs-color-sample" style={{ backgroundColor: formatTokenValue(color) }} /> : null

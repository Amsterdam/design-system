/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import './color-sample.css'

type ColorSampleProps = {
  color: string
}

export const ColorSample = ({ color }: ColorSampleProps) => {
  const isVariable = color.includes('{')
  const colorProp = isVariable ? `var(--${color.replace(/[{}]/g, '').replace(/\./g, '-')})` : color

  return color ? <div className="ams-docs-color-sample" style={{ backgroundColor: colorProp }} /> : null
}

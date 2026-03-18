/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import './inline-color-sample.css'

/** Hardcoded subset of the Amsterdam design system colour palette, keyed by colour name. */
const colors = {
  azure: '#009de6',
  black: '#202020',
  blue: '#004699',
  'blue-80': '#003677',
  green: '#00893c',
  lime: '#bed200',
  magenta: '#e50082',
  neutral: '#767676',
  'neutral-20': '#d1d1d1',
  orange: '#ff9100',
  purple: '#a00078',
  red: '#ec0000',
  'red-80': '#b70000',
  white: '#ffffff',
  yellow: '#ffe600',
}

/**
 * Renders a small inline colour swatch for use in documentation prose.
 * @param color - The name of a colour from the Amsterdam design system palette.
 */
export const InlineColorSample = ({ color }: { color: keyof typeof colors }) => (
  <span className="ams-inline-color-sample" style={{ backgroundColor: `${colors[color]}` }} />
)

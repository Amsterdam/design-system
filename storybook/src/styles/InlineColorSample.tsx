import './inline-color-sample.css'
import { clsx } from 'clsx'

const colors = {
  azure: '#009de6',
  black: '#202020',
  blue: '#004699',
  'blue-80': '#003677',
  green: '#00893c',
  lime: '#bed200',
  magenta: '#e50082',
  neutral: '#767676',
  'neutral-10': '#e8e8e8',
  'neutral-20': '#d1d1d1',
  orange: '#ff9100',
  purple: '#a00078',
  red: '#ec0000',
  'red-80': '#b70000',
  white: '#ffffff',
  yellow: '#ffe600',
}

export const InlineColorSample = ({ color }: { color: keyof typeof colors }) => (
  <span
    className={clsx('ams-inline-color-sample', color === 'white' && 'ams-inline-color-sample--white')}
    style={{ backgroundColor: `${colors[color]}` }}
  />
)

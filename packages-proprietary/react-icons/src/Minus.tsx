import type { SVGProps } from 'react'

const SvgMinus = (props: SVGProps<SVGSVGElement>) => (
  <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path clipRule="evenodd" d="M21.5 13h-19v-2h19z" fillRule="evenodd" />
  </svg>
)
export default SvgMinus

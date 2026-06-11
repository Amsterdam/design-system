import type { SVGProps } from 'react'

const SvgMinus = (props: SVGProps<SVGSVGElement>) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height={24}
    width={24}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path clipRule="evenodd" d="M21.5 13h-19v-2h19z" fill="#202020" fillRule="evenodd" />
  </svg>
)
export default SvgMinus

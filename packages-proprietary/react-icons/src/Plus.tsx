import type { SVGProps } from 'react'

const SvgPlus = (props: SVGProps<SVGSVGElement>) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height={24}
    width={24}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M11 13v8.5h2V13h8.5v-2H13V2.5h-2V11H2.5v2z" fill="#202020" />
  </svg>
)
export default SvgPlus

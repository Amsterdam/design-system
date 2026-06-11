import type { SVGProps } from 'react'

const SvgFilterFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height={24}
    width={24}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M2.5 2.5h19v2l-6.65 8.338v6.593L10.946 21.5H9.15v-8.662L2.5 4.5z" fill="#000" />
  </svg>
)
export default SvgFilterFill

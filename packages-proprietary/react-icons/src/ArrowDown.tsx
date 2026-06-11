import type { SVGProps } from 'react'

const SvgArrowDown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height={24}
    width={24}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="m17.327 13.342 1.423 1.42L12 21.5l-6.75-6.738 1.423-1.42 4.32 4.312V2.5h2.013v15.154z" fill="#000" />
  </svg>
)
export default SvgArrowDown

import type { SVGProps } from 'react'

const SvgArrowUp = (props: SVGProps<SVGSVGElement>) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height={24}
    width={24}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="m17.327 10.658 1.423-1.42L12 2.5 5.25 9.238l1.423 1.42 4.32-4.312V21.5h2.013V6.346z" fill="#000" />
  </svg>
)
export default SvgArrowUp

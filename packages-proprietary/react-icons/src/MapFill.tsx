import type { SVGProps } from 'react'

const SvgMapFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height={24}
    width={24}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M2.5 21.5V7l6-3.857V18.07zM10.5 3.2l4 2.8 7-3.5V17l-6 3.857V5.5l-1 .5-1-.7v15.4l-3-2.4z" fill="#202020" />
  </svg>
)
export default SvgMapFill

import type { SVGProps } from 'react'

const SvgArrowBackward = (props: SVGProps<SVGSVGElement>) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height={24}
    width={24}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M10.658 6.673 9.238 5.25 2.5 12l6.738 6.75 1.42-1.423-4.312-4.32H21.5v-2.013H6.346z" fill="#000" />
  </svg>
)
export default SvgArrowBackward

import type { SVGProps } from 'react'

const SvgPrevious = (props: SVGProps<SVGSVGElement>) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height={24}
    width={24}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M5.5 5h2v14h-2zM7.5 12l11 7V5z" fill="#000" />
  </svg>
)
export default SvgPrevious

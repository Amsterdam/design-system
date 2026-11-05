import type { SVGProps } from 'react'

const SvgChevronDoubleBackward = (props: SVGProps<SVGSVGElement>) => (
  <svg
    aria-hidden="true"
    data-directional="true"
    focusable="false"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="m11 12 9.589 9.5 1.41-1.398L13.824 12 22 3.898 20.589 2.5z" />
    <path d="m3 12 9.589 9.5 1.41-1.398L5.824 12 14 3.898 12.589 2.5z" />
  </svg>
)
export default SvgChevronDoubleBackward

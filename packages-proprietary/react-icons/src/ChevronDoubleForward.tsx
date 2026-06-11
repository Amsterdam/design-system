import type { SVGProps } from 'react'

const SvgChevronDoubleForward = (props: SVGProps<SVGSVGElement>) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height={24}
    width={24}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M14 12 4.41 21.5 3 20.102 11.177 12 3 3.898 4.41 2.5z" fill="#181818" />
    <path d="m22 12-9.589 9.5L11 20.102 19.177 12 11 3.898 12.41 2.5z" fill="#181818" />
  </svg>
)
export default SvgChevronDoubleForward

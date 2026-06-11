import type { SVGProps } from 'react'

const SvgChevronForward = (props: SVGProps<SVGSVGElement>) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height={24}
    width={24}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      clipRule="evenodd"
      d="M7.911 2.5 17.5 12l-9.589 9.5L6.5 20.102 14.677 12 6.5 3.898z"
      fill="#202020"
      fillRule="evenodd"
    />
  </svg>
)
export default SvgChevronForward

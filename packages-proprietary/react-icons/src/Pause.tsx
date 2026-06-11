import type { SVGProps } from 'react'

const SvgPause = (props: SVGProps<SVGSVGElement>) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height={24}
    width={24}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M14 19.174v-15h4v15zm-8 0v-15h4v15z" fill="#000" />
  </svg>
)
export default SvgPause

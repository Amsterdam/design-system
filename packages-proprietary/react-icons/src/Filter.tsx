import type { SVGProps } from 'react'
const SvgFilter = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false" {...props}>
    <path
      fillRule="evenodd"
      d="M14.83 12.838 21.48 4.5v-2h-19v2l6.65 8.338V21.5h1.796l3.903-2.069zm-1.9 5.45v-5.45l.414-1.184L19.129 4.4H4.83l5.785 7.253.414 1.185v6.457z"
      clipRule="evenodd"
    />
  </svg>
)
export default SvgFilter

import type { SVGProps } from 'react'

const SvgBellFill = (props: SVGProps<SVGSVGElement>) => (
  <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      clipRule="evenodd"
      d="M13.989 3.787a2 2 0 0 0-3.978 0A7 7 0 0 0 5 10.5V14l-1.5 2v2h17v-2L19 14v-3.5a7 7 0 0 0-5.011-6.713M12 22.5a3 3 0 0 1-3-3h6a3 3 0 0 1-3 3"
      fillRule="evenodd"
    />
  </svg>
)
export default SvgBellFill

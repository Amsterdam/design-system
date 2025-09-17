import type { SVGProps } from 'react'
const SvgBell = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false" {...props}>
    <path
      fillRule="evenodd"
      d="M13.989 3.787a2 2 0 0 0-3.978 0A7 7 0 0 0 5 10.5V13l-1.5 2v3.5h17V15L19 13v-2.5a7 7 0 0 0-5.011-6.713m4.511 11.88-1.5-2V10.5a5 5 0 0 0-10 0v3.167l-1.5 2v.833h13zM11 19.5a1 1 0 1 0 2 0h2a3 3 0 1 1-6 0z"
      clipRule="evenodd"
    />
  </svg>
)
export default SvgBell

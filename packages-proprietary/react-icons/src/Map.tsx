import type { SVGProps } from 'react'
const SvgMap = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false" {...props}>
    <path
      fillRule="evenodd"
      d="m8.5 15.768-4 2.286V8.092l4-2.572zm2-.03 3 2.4V7.742l-3-2.1zM14.5 6l7-3.5V17l-7 4.5-5-4-7 4V7l7-4.5zm1 12.48 4-2.572V5.736l-4 2z"
      clipRule="evenodd"
    />
  </svg>
)
export default SvgMap

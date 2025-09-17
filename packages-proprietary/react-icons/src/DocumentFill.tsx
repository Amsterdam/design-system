import type { SVGProps } from 'react'
const SvgDocumentFill = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false" {...props}>
    <path
      fillRule="evenodd"
      d="M4 22V2h16v11.82l-7.74 5.3L14.7 22zm4-6h3.44v-2H8zm0-4h8v-2H8zm0-4h8V6H8z"
      clipRule="evenodd"
    />
    <path d="M17.43 22h-.11l-2.1-2.49 4.76-3.26z" />
  </svg>
)
export default SvgDocumentFill

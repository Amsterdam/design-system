import type { SVGProps } from 'react'

const SvgDocumentFill = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4 22V2h16v11.82l-7.74 5.3L14.7 22zm4-6h3.44v-2H8zm0-4h8v-2H8zm0-4h8V6H8z"
      fill="#202020"
      fillRule="evenodd"
    />
    <path d="M17.43 22h-.11l-2.1-2.49 4.76-3.26z" fill="#202020" />
  </svg>
)
export default SvgDocumentFill

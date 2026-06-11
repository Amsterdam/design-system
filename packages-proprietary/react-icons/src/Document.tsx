import type { SVGProps } from 'react'

const SvgDocument = (props: SVGProps<SVGSVGElement>) => (
  <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M16 6H8v2h8zM8 10h8v2H8zM8 14h5.79v2H8z" />
    <path clipRule="evenodd" d="M4 22V2h16v14.21L17.43 22zM18 4H6v16.01h9.56l-1.38-1.55L18 15.63z" fillRule="evenodd" />
  </svg>
)
export default SvgDocument

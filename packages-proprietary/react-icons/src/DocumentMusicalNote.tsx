import type { SVGProps } from 'react'

const SvgDocumentMusicalNote = (props: SVGProps<SVGSVGElement>) => (
  <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="m16.3 9.293-1.412 1.414-1.792-1.793V14A2.499 2.499 0 1 1 8.1 14a2.5 2.5 0 0 1 2.997-2.45V6.5h2.412z" />
    <path clipRule="evenodd" d="M20 16.21 17.43 22H4V2h16zm-14 3.8h9.56l-1.38-1.55L18 15.63V4H6z" fillRule="evenodd" />
  </svg>
)
export default SvgDocumentMusicalNote

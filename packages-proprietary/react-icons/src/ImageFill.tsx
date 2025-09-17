import type { SVGProps } from 'react'
const SvgImageFill = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false" {...props}>
    <path d="M6.25 7.5a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5" />
    <path fillRule="evenodd" d="M1 20V4h22v16zm20-4V6H3v12l5-5 3 3 5-5z" clipRule="evenodd" />
  </svg>
)
export default SvgImageFill

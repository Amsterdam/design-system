import type { SVGProps } from 'react'
const SvgImage = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false" {...props}>
    <path d="M6.25 7.5a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5" />
    <path
      fillRule="evenodd"
      d="M1 20V4h22v16zm20-5.414V6H3v10.586l5-5 3 3 5-5zm0 2.828-5-5-5 5-3-3L4.414 18H21z"
      clipRule="evenodd"
    />
  </svg>
)
export default SvgImage

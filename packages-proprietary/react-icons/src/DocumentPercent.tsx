import type { SVGProps } from 'react'

const SvgDocumentPercent = (props: SVGProps<SVGSVGElement>) => (
  <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      clipRule="evenodd"
      d="M4 2v20h13.43L20 16.21V2zm2 2h12v11.63l-3.82 2.83 1.38 1.55H6zm3.61 3.777a.59.59 0 1 1-.83.837.59.59 0 0 1 .83-.837m1.132-1.14A2.195 2.195 0 1 1 7.65 9.753a2.195 2.195 0 0 1 3.093-3.116m3.904.618-6.83 6.83 1.135 1.136 6.83-6.83zm.577 6.924a.59.59 0 1 0-.837-.83.59.59 0 0 0 .837.83m1.14 1.131a2.195 2.195 0 1 0-3.116-3.093 2.195 2.195 0 0 0 3.116 3.093"
      fillRule="evenodd"
    />
  </svg>
)
export default SvgDocumentPercent

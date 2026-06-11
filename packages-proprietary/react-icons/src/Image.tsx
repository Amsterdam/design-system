import type { SVGProps } from 'react'

const SvgImage = (props: SVGProps<SVGSVGElement>) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height={24}
    width={24}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M6.25 7.5a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5" fill="#202020" />
    <path
      clipRule="evenodd"
      d="M1 20V4h22v16zm20-5.414V6H3v10.586l5-5 3 3 5-5zm0 2.828-5-5-5 5-3-3L4.414 18H21z"
      fill="#202020"
      fillRule="evenodd"
    />
  </svg>
)
export default SvgImage

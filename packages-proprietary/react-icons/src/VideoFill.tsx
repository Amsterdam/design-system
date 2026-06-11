import type { SVGProps } from 'react'

const SvgVideoFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height={24}
    width={24}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path clipRule="evenodd" d="M1 4h22v16H1zm8.71 4.29L16.139 12l-6.427 3.71z" fill="#000" fillRule="evenodd" />
  </svg>
)
export default SvgVideoFill

import type { SVGProps } from 'react'

const SvgInfoFill = (props: SVGProps<SVGSVGElement>) => (
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
      d="M21.5 21.5h-19v-19h19zM11 10.177v6.922h2v-6.922zm1-3.275c-.69 0-1.19.48-1.19 1.16s.5 1.16 1.19 1.16 1.19-.48 1.19-1.16-.5-1.16-1.19-1.16"
      fill="#000"
      fillRule="evenodd"
    />
  </svg>
)
export default SvgInfoFill

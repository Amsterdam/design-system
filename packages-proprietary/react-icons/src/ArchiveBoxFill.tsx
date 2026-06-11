import type { SVGProps } from 'react'

const SvgArchiveBoxFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height={24}
    width={24}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path clipRule="evenodd" d="M20 21.5H4V10h16zm-11-7h6v-3H9z" fill="#000" fillRule="evenodd" />
    <path d="M21.5 8.5h-19v-6h19z" fill="#000" />
  </svg>
)
export default SvgArchiveBoxFill

import type { SVGProps } from 'react'

const SvgCopyFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height={24}
    width={24}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M6.5 2.5v4h-4v15h15v-4h4v-15zm9 17h-11v-11h2v9h9z" fill="#202020" />
  </svg>
)
export default SvgCopyFill

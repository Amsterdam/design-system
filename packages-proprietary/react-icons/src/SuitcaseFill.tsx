import type { SVGProps } from 'react'

const SvgSuitcaseFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height={24}
    width={24}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M17 2.5H7v3.996h2V4.5h6v1.996h2zM9 6.5v15h6v-15zM7 21.5v-15H2.5v15zM21.5 21.5H17v-15h4.5z" fill="#000" />
  </svg>
)
export default SvgSuitcaseFill

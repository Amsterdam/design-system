import type { SVGProps } from 'react'
const SvgPlus = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false" {...props}>
    <path d="M11 13v8.5h2V13h8.5v-2H13V2.5h-2V11H2.5v2z" />
  </svg>
)
export default SvgPlus

import type { SVGProps } from 'react'
const SvgInfo = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false" {...props}>
    <path d="M12 9.222c-.69 0-1.19-.48-1.19-1.16s.5-1.16 1.19-1.16 1.19.48 1.19 1.16-.5 1.16-1.19 1.16M13 10.176h-2v6.922h2z" />
    <path d="M21.5 2.5v19h-19v-19zm-17 17h15v-15h-15z" />
  </svg>
)
export default SvgInfo

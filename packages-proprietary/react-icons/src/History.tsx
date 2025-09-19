import type { SVGProps } from 'react'

const SvgHistory = (props: SVGProps<SVGSVGElement>) => (
  <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12h2a8 8 0 1 0 1.07-4h2.627v2H2V4h2v2a9.99 9.99 0 0 1 8-4" />
    <path d="m13 11.586 2.707 2.707-1.414 1.414L11 12.414V6h2z" />
  </svg>
)
export default SvgHistory

import type { SVGProps } from 'react'

const SvgFullScreenClose = (props: SVGProps<SVGSVGElement>) => (
  <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M9 2.5V9H2.5v2H11V2.5zM2.5 15H9v6.5h2V13H2.5zM15 9V2.5h-2V11h8.5V9zM21.5 15H15v6.5h-2V13h8.5z" />
  </svg>
)
export default SvgFullScreenClose

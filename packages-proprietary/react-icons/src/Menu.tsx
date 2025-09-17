import type { SVGProps } from 'react'

const SvgMenu = (props: SVGProps<SVGSVGElement>) => (
  <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M23 5H1v2h22zM23 11H1v2h22zM1 17h22v2H1z" />
  </svg>
)
export default SvgMenu

import type { SVGProps } from 'react'
const SvgBuilding = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false" {...props}>
    <path d="M8 5h3v3H8zM11 10H8v3h3zM8 15h3v3H8zM16 5h-3v3h3zM13 10h3v3h-3zM16 15h-3v3h3z" />
    <path fillRule="evenodd" d="M20 1v22H4V1zm-2 2H6v18h12z" clipRule="evenodd" />
  </svg>
)
export default SvgBuilding

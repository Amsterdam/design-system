import type { SVGProps } from 'react'
const SvgCar = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false" {...props}>
    <path d="M8 13H5v2h3zM16 13h3v2h-3z" />
    <path
      fillRule="evenodd"
      d="M23 7h-3.5L18 4H6L4.5 7H1v2h2.5L3 10H2v10h3v-2h14v2h3V10h-1l-.5-1H23zM7.24 6h9.53l2 4H5.24zM20 16H4v-4h16z"
      clipRule="evenodd"
    />
  </svg>
)
export default SvgCar

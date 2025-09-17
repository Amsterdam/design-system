import type { SVGProps } from 'react'
const SvgParkingGarage = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false" {...props}>
    <path d="M21.352 5.945 12 2.432 2.648 5.945l.704 1.872L12 4.568l8.648 3.249z" />
    <path
      fillRule="evenodd"
      d="M8 21V8h5.545C16.161 8 18 9.78 18 12.3s-1.84 4.3-4.455 4.3h-2.847V21zm2.698-6.54h2.622c1.185 0 1.962-.84 1.962-2.16 0-1.3-.777-2.16-1.962-2.16h-2.623z"
      clipRule="evenodd"
    />
  </svg>
)
export default SvgParkingGarage

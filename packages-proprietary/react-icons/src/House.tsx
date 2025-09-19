import type { SVGProps } from 'react'

const SvgHouse = (props: SVGProps<SVGSVGElement>) => (
  <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      clipRule="evenodd"
      d="M2.5 8.58 12 2.5l4.5 2.88V2.5h2v4.16l3 1.92V21.5h-19zm2 1.094V19.5H9v-5.924c0-.546.448-.989 1-.989h4c.552 0 1 .443 1 .99V19.5h4.5V9.674l-7.5-4.8zm6.5 4.892v4.935h2v-4.935z"
      fillRule="evenodd"
    />
  </svg>
)
export default SvgHouse

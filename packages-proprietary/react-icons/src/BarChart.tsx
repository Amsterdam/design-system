import type { SVGProps } from 'react'

const SvgBarChart = (props: SVGProps<SVGSVGElement>) => (
  <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      clipRule="evenodd"
      d="M2.5 2.5v19h19.118v-19H14v5H8.3v5H4.5v-10zm2 12v5h3.618v-5zm5.8-5h3.618v10H10.3zm5.7 10h3.617v-15H16z"
      fillRule="evenodd"
    />
  </svg>
)
export default SvgBarChart

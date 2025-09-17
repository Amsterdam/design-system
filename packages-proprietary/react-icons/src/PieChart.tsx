import type { SVGProps } from 'react'
const SvgPieChart = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false" {...props}>
    <path
      fillRule="evenodd"
      d="M4.015 11.5a8 8 0 1 1 6.116 8.28l2.756-8.28zm-2.003 0C2.272 6.21 6.645 2 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10c-.863 0-1.701-.11-2.502-.316l-.365 1.097-.949-.316C4.011 21.079 1 17.143 1 12.5v-1zm5.874 8.696A8.51 8.51 0 0 1 3.058 13.5h7.055z"
      clipRule="evenodd"
    />
  </svg>
)
export default SvgPieChart

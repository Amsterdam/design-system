import type { SVGProps } from 'react'

const SvgHouseWithFlagFill = (props: SVGProps<SVGSVGElement>) => (
  <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      clipRule="evenodd"
      d="M13 6.257 9 3.638 1 8.876V20h12zm-4.6 7.916V18h-2v-4.627a1.2 1.2 0 0 1 1.2-1.2h2.894a1.2 1.2 0 0 1 1.2 1.2V18h-2v-3.828z"
      fillRule="evenodd"
    />
    <path d="M17 20v-9.29h6V4h-8v16z" />
  </svg>
)
export default SvgHouseWithFlagFill

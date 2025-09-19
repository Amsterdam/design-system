import type { SVGProps } from 'react'

const SvgTable = (props: SVGProps<SVGSVGElement>) => (
  <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      clipRule="evenodd"
      d="M18.5 2.5a3 3 0 0 1 3 3v13a3 3 0 0 1-3 3h-13a3 3 0 0 1-3-3v-13a3 3 0 0 1 2.846-2.996L5.5 2.5zm-14 16a1 1 0 0 0 1 1h2.75v-2.9H4.5zm5.75 1h3.5v-2.9h-3.5zm5.5 0h2.75a1 1 0 0 0 1-1v-1.9h-3.75zM4.5 14.6h3.75v-2.7H4.5zm5.75 0h3.5v-2.7h-3.5zm5.5 0h3.75v-2.7h-3.75zM4.5 9.9h3.75V7.25H4.5zm5.75 0h3.5V7.25h-3.5zm5.5 0h3.75V7.25h-3.75z"
      fillRule="evenodd"
    />
  </svg>
)
export default SvgTable

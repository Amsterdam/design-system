import type { SVGProps } from 'react'

const SvgBed = (props: SVGProps<SVGSVGElement>) => (
  <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      clipRule="evenodd"
      d="M1 6h2v7.267h20V18h-2v-2.733H3V18H1zm7 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0m1-2h9.5a4 4 0 0 1 4 4v.097H9z"
      fillRule="evenodd"
    />
  </svg>
)
export default SvgBed

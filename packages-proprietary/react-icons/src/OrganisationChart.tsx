import type { SVGProps } from 'react'

const SvgOrganisationChart = (props: SVGProps<SVGSVGElement>) => (
  <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      clipRule="evenodd"
      d="M9 2.5v6h2V11H4v4.5H2v6h6v-6H6V13h5v2.5H9v6h6v-6h-2V13h5v2.5h-2v6h6v-6h-2V11h-7V8.5h2v-6zm2 15h2v2h-2zm-5 0H4v2h2zm12 0h2v2h-2z"
      fillRule="evenodd"
    />
  </svg>
)
export default SvgOrganisationChart

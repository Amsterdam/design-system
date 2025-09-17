import type { SVGProps } from 'react'

const SvgMonitor = (props: SVGProps<SVGSVGElement>) => (
  <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      clipRule="evenodd"
      d="M20 6H4v10h16zM2 4v14h8v1H6.5v2h11v-2H14v-1h8V4zm6.718 4.142L6.112 10.75l-1.06-1.061 2.606-2.606zm-1.824 4.952 4.17-4.17-1.06-1.06-4.17 4.17z"
      fillRule="evenodd"
    />
  </svg>
)
export default SvgMonitor

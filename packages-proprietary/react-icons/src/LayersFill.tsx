import type { SVGProps } from 'react'

const SvgLayersFill = (props: SVGProps<SVGSVGElement>) => (
  <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M5.374 15.237 2.5 16.713l9.108 4.678c.285.146.62.145.904-.002l8.988-4.676-2.833-1.474-5.463 2.842a2.48 2.48 0 0 1-2.281.006z" />
    <path d="M5.518 10.524 2.5 12.074l9.108 4.679c.285.146.62.145.904-.003l8.988-4.676-2.976-1.548-5.32 2.768a2.48 2.48 0 0 1-2.281.006z" />
    <path
      clipRule="evenodd"
      d="M12.512 2.611a.98.98 0 0 0-.904-.002L2.5 7.287l9.108 4.679c.285.146.62.145.904-.003L21.5 7.287z"
      fillRule="evenodd"
    />
  </svg>
)
export default SvgLayersFill

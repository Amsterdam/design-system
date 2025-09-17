import type { SVGProps } from 'react'
const SvgCameraFill = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false" {...props}>
    <path d="M12 15.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
    <path
      fillRule="evenodd"
      d="M8 3a1 1 0 0 0-1 1v1H1v15h22V5h-6V4a1 1 0 0 0-1-1zm9 9.5a5 5 0 1 1-10 0 5 5 0 0 1 10 0m1.5-2.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
      clipRule="evenodd"
    />
  </svg>
)
export default SvgCameraFill

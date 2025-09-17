import type { SVGProps } from 'react'

const SvgCamera = (props: SVGProps<SVGSVGElement>) => (
  <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      clipRule="evenodd"
      d="M17 12.5a5 5 0 1 1-10 0 5 5 0 0 1 10 0m-5 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
      fillRule="evenodd"
    />
    <path d="M18.5 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
    <path
      clipRule="evenodd"
      d="M17 5V4a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v1H1v15h22V5zm4 2h-6V5H9v2H3v11h18z"
      fillRule="evenodd"
    />
  </svg>
)
export default SvgCamera

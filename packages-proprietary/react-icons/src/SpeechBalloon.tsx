import type { SVGProps } from 'react'

const SvgSpeechBalloon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    aria-hidden="true"
    data-directional="true"
    focusable="false"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      clipRule="evenodd"
      d="M21.5 2.866v15.267h-7.94L6.49 22l-1.44-3.867H2.5V2.866zM4.5 16.1V4.9h15V16.1h-6.44l-5.51 3.01-1.12-3.01z"
      fillRule="evenodd"
    />
  </svg>
)
export default SvgSpeechBalloon

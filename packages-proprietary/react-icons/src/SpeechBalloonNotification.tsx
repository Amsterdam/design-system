import type { SVGProps } from 'react'

const SvgSpeechBalloonNotification = (props: SVGProps<SVGSVGElement>) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height={24}
    width={24}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M21.5 5.021c0 1.669-1.343 3.021-3 3.021s-3-1.352-3-3.02c0-1.67 1.343-3.022 3-3.022s3 1.353 3 3.021"
      fill="#202020"
    />
    <path
      d="M19.5 16.099V9.956a4.9 4.9 0 0 0 2-.927v9.104h-7.94L6.49 22l-1.44-3.867H2.5V2.866H14c-.3.624-.47 1.31-.49 2.034H4.5V16.1h1.93l1.12 3.01 5.51-3.01z"
      fill="#202020"
    />
  </svg>
)
export default SvgSpeechBalloonNotification

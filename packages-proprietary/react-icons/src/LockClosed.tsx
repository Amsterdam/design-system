import type { SVGProps } from 'react'

const SvgLockClosed = (props: SVGProps<SVGSVGElement>) => (
  <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M13.25 14.65c0 .5-.293.931-.717 1.131L13 17.65h-2l.467-1.869a1.25 1.25 0 1 1 1.783-1.131" />
    <path
      clipRule="evenodd"
      d="M7 9.5v-2a5 5 0 0 1 10 0v2h3v12H4v-12zm2 0v-2a3 3 0 1 1 6 0v2zm-3 2v8h12v-8z"
      fillRule="evenodd"
    />
  </svg>
)
export default SvgLockClosed

import type { SVGProps } from 'react'
const SvgGridFill = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false" {...props}>
    <path
      fillRule="evenodd"
      d="M16.5 21.5h3a2 2 0 0 0 2-2v-2.75h-5zm0-6.75h5v-5h-5zm-2-5v5h-5v-5zm2-2h5V4.5a2 2 0 0 0-2-2h-3zm-2-5.25v5.25h-5V2.5zm0 14.25v4.75h-5v-4.75zm-7-2v-5h-5v5zm0-7V2.5h-3a2 2 0 0 0-2 2v3.25zm0 13.75v-4.75h-5v2.75a2 2 0 0 0 2 2z"
      clipRule="evenodd"
    />
  </svg>
)
export default SvgGridFill

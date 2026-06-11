import type { SVGProps } from 'react'

const SvgClipboard = (props: SVGProps<SVGSVGElement>) => (
  <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      clipRule="evenodd"
      d="M7 2h10v1h3v19H4V3h3zm0 3H6v15h12V5h-1v1H7zm1 5a1 1 0 1 0 0-2 1 1 0 0 0 0 2m0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2m1 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0m1-7h7V8h-7zm7 4h-7v-2h7zm-7 4h5v-2h-5z"
      fillRule="evenodd"
    />
  </svg>
)
export default SvgClipboard

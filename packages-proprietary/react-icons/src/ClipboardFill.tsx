import type { SVGProps } from 'react'

const SvgClipboardFill = (props: SVGProps<SVGSVGElement>) => (
  <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      clipRule="evenodd"
      d="M6 3H4v19h16V3h-2v4H6zm1.5-1v3.5h9V2zm.5 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2m0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2m1 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0m1-7h7V8h-7zm5 8h-5v-2h5zm-5-4h7v-2h-7z"
      fillRule="evenodd"
    />
  </svg>
)
export default SvgClipboardFill

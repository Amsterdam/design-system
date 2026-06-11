import type { SVGProps } from 'react'

const SvgCalendarFill = (props: SVGProps<SVGSVGElement>) => (
  <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M17 2v2h4v3H3V4h4V2h2v2h6V2z" />
    <path
      clipRule="evenodd"
      d="M3.02 21.5V9H21v6.56l-2.57 5.94zM7 17h2v-2H7zm0-4h2v-2H7zm4 4h2v-2h-2zm0-4h2v-2h-2zm4 0h2v-2h-2z"
      fillRule="evenodd"
    />
  </svg>
)
export default SvgCalendarFill

import type { SVGProps } from 'react'
const SvgCalendar = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false" {...props}>
    <path d="M7 11h2v2H7zM11 11h2v2h-2zM9 15H7v2h2zM11 15h2v2h-2zM17 11h-2v2h2z" />
    <path
      fillRule="evenodd"
      d="M17 2v2h4v11.56l-2.57 5.94H3.02V7H3V4h4V2h2v2h6V2zm-1.82 15.87 3.82-2.9V8.92H5.02V19.5H16.6z"
      clipRule="evenodd"
    />
  </svg>
)
export default SvgCalendar

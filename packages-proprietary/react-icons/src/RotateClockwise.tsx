import type { SVGProps } from 'react'

const SvgRotateClockwise = (props: SVGProps<SVGSVGElement>) => (
  <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path clipRule="evenodd" d="M20 23H9V12h11zm-9-2h7v-7h-7z" fillRule="evenodd" />
    <path d="m15.414 5.71-4.707 4.707-1.414-1.414 2.293-2.293H9a3 3 0 0 0-3 3v6H4v-6a5 5 0 0 1 5-5h2.586L9.293 2.417l1.414-1.414z" />
  </svg>
)
export default SvgRotateClockwise

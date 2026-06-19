import type { SVGProps } from 'react'

const SvgRotateCounterclockwise = (props: SVGProps<SVGSVGElement>) => (
  <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path clipRule="evenodd" d="M15 23H4V12h11zm-9-2h7v-7H6z" fillRule="evenodd" />
    <path d="M14.707 2.417 12.414 4.71H15a5 5 0 0 1 5 5v6h-2v-6a3 3 0 0 0-3-3h-2.586l2.293 2.293-1.414 1.414L8.586 5.71l4.707-4.707z" />
  </svg>
)
export default SvgRotateCounterclockwise

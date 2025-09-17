import type { SVGProps } from 'react'

const SvgBall = (props: SVGProps<SVGSVGElement>) => (
  <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="m12 8.25 3.566 2.591-1.362 4.193H9.796L8.434 10.84z" />
    <path
      clipRule="evenodd"
      d="M20.068 6.091a10 10 0 0 0-5.143-3.656A10 10 0 0 0 12 2a9.99 9.99 0 0 0-8.068 4.091A9.96 9.96 0 0 0 2 11.967V12c0 5.523 4.477 10 10 10 .954 0 1.878-.134 2.752-.383A10.01 10.01 0 0 0 22 12v-.033a9.96 9.96 0 0 0-1.932-5.876m-2.042 10.375A7.47 7.47 0 0 0 19.5 12v-.033l-2.316-1.683.877-2.702a7.5 7.5 0 0 0-3.327-2.568L12 7 9.266 5.014A7.5 7.5 0 0 0 5.94 7.582l.877 2.702L4.5 11.967V12c0 1.673.548 3.219 1.474 4.466h3.23l.908 2.794a7.514 7.514 0 0 0 3.776 0l.908-2.794z"
      fillRule="evenodd"
    />
  </svg>
)
export default SvgBall

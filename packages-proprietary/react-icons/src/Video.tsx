import type { SVGProps } from 'react'

const SvgVideo = (props: SVGProps<SVGSVGElement>) => (
  <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M9.71 8.29 16.139 12l-6.427 3.71z" />
    <path clipRule="evenodd" d="M23 4H1v16h22zm-2 2H3v12h18z" fillRule="evenodd" />
  </svg>
)
export default SvgVideo

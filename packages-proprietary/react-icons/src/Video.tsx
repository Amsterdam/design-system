import type { SVGProps } from 'react'

const SvgVideo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height={24}
    width={24}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M9.71 8.29 16.139 12l-6.427 3.71z" fill="#000" />
    <path clipRule="evenodd" d="M23 4H1v16h22zm-2 2H3v12h18z" fill="#000" fillRule="evenodd" />
  </svg>
)
export default SvgVideo

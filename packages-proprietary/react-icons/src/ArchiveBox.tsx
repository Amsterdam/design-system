import type { SVGProps } from 'react'

const SvgArchiveBox = (props: SVGProps<SVGSVGElement>) => (
  <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M15 14H9v-3h6z" />
    <path
      clipRule="evenodd"
      d="M21.5 9.5H20v12H4v-12H2.5v-7h19zM6 19.5h12v-10H6zm-1.5-12h15v-3h-15z"
      fillRule="evenodd"
    />
  </svg>
)
export default SvgArchiveBox

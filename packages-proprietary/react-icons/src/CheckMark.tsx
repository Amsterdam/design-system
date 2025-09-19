import type { SVGProps } from 'react'

const SvgCheckMark = (props: SVGProps<SVGSVGElement>) => (
  <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      clipRule="evenodd"
      d="M8.642 17.032 20.014 4 21.5 5.304 8.677 20 2.5 13.243l1.456-1.338z"
      fillRule="evenodd"
    />
  </svg>
)
export default SvgCheckMark

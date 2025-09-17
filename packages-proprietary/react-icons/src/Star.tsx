import type { SVGProps } from 'react'

const SvgStar = (props: SVGProps<SVGSVGElement>) => (
  <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      clipRule="evenodd"
      d="m7 14.5-1 7 6-3.5 6 3.5-1-7 4.5-4.5L15 9l-3-6.5L9 9l-6.5 1zm-.295-3.123 2.416 2.416-.556 3.896L12 15.685l3.435 2.004-.556-3.896 2.416-2.416-3.66-.564L12 7.273l-1.634 3.54z"
      fillRule="evenodd"
    />
  </svg>
)
export default SvgStar

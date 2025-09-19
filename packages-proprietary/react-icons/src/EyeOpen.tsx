import type { SVGProps } from 'react'

const SvgEyeOpen = (props: SVGProps<SVGSVGElement>) => (
  <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0" />
    <path
      clipRule="evenodd"
      d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8m2.31 0c1.18 1.86 4.29 6 8.69 6 4.43 0 7.52-4.13 8.69-6-1.18-1.86-4.26-6-8.69-6s-7.52 4.13-8.69 6"
      fillRule="evenodd"
    />
  </svg>
)
export default SvgEyeOpen

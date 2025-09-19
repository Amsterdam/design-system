import type { SVGProps } from 'react'

const SvgStandBy = (props: SVGProps<SVGSVGElement>) => (
  <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M11 1v12h2V1z" />
    <path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 4.462-7.774L6.452 2.5A11 11 0 0 0 1 12c0 6.075 4.925 11 11 11s11-4.925 11-11c0-4.051-2.19-7.591-5.451-9.5l-1.01 1.726A9 9 0 0 1 21 12" />
  </svg>
)
export default SvgStandBy

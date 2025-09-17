import type { SVGProps } from 'react'

const SvgClose = (props: SVGProps<SVGSVGElement>) => (
  <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M21 4.587 19.57 3l-7.565 7.495L4.43 3 3 4.587l7.482 7.419L3 19.413 4.43 21l7.575-7.495L19.57 21 21 19.413l-7.482-7.408z" />
  </svg>
)
export default SvgClose

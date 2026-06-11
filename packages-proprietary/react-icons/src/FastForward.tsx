import type { SVGProps } from 'react'

const SvgFastForward = (props: SVGProps<SVGSVGElement>) => (
  <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M12 12v7l11-7-11-7zM12 12 1 19V5z" />
  </svg>
)
export default SvgFastForward

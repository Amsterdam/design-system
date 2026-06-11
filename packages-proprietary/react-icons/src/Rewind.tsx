import type { SVGProps } from 'react'

const SvgRewind = (props: SVGProps<SVGSVGElement>) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height={24}
    width={24}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M12 12V5L1 12l11 7zM12 12l11-7v14z" fill="#000" />
  </svg>
)
export default SvgRewind

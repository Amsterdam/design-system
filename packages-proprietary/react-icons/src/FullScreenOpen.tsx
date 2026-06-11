import type { SVGProps } from 'react'

const SvgFullScreenOpen = (props: SVGProps<SVGSVGElement>) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height={24}
    width={24}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4.5 11V4.5H11v-2H2.5V11zM11 19.5H4.5V13h-2v8.5H11zM19.5 4.5V11h2V2.5H13v2zM13 19.5h6.5V13h2v8.5H13z"
      fill="#000"
    />
  </svg>
)
export default SvgFullScreenOpen

import type { SVGProps } from 'react'

const SvgList = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2M5 7h18V5H5zM23 13H5v-2h18zM2 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2M23 19H5v-2h18zM2 19a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
      fill="#202020"
    />
  </svg>
)
export default SvgList

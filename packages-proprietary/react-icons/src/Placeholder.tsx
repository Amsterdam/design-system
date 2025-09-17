import type { SVGProps } from 'react'

const SvgPlaceholder = (props: SVGProps<SVGSVGElement>) => (
  <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      clipRule="evenodd"
      d="M2 2h2.5v1.667h-.833V4.5H2zm0 17.5V22h2.5v-1.667h-.833V19.5zM19.5 22H22v-2.5h-1.667v.833H19.5zM22 4.5V2h-2.5v1.667h.833V4.5zM5.333 2v1.667h3.334V2zm5 0v1.667h3.334V2zm5 0v1.667h3.334V2zM22 5.333h-1.667v3.334H22zm0 5h-1.667v3.334H22zm0 5h-1.667v3.334H22zM18.667 22v-1.667h-3.334V22zm-5 0v-1.667h-3.334V22zm-5 0v-1.667H5.333V22zM2 18.667h1.667v-3.334H2zm0-5h1.667v-3.334H2zm0-5h1.667V5.333H2z"
      fillRule="evenodd"
    />
  </svg>
)
export default SvgPlaceholder

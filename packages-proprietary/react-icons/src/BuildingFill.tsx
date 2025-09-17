import type { SVGProps } from 'react'
const SvgBuildingFill = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false" {...props}>
    <path
      fillRule="evenodd"
      d="M20 23V1H4v22zM8 5h3v3H8zm3 5H8v3h3zm-3 5h3v3H8zm8-10h-3v3h3zm-3 5h3v3h-3zm3 5h-3v3h3z"
      clipRule="evenodd"
    />
  </svg>
)
export default SvgBuildingFill

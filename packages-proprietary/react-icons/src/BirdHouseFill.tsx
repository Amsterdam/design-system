import type { SVGProps } from 'react'

const SvgBirdHouseFill = (props: SVGProps<SVGSVGElement>) => (
  <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M12 11a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5" fill="#000" />
    <path
      clipRule="evenodd"
      d="m21.5 11.651-1.374 1.454-1.073-1.014L17.31 21.5H6.688l-1.742-9.41-1.072 1.015L2.5 11.65 12 2.5zM12 9a3.25 3.25 0 1 0 0 6.5A3.25 3.25 0 0 0 12 9"
      fill="#000"
      fillRule="evenodd"
    />
  </svg>
)
export default SvgBirdHouseFill

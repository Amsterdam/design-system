import type { SVGProps } from 'react'

const SvgBirdHouse = (props: SVGProps<SVGSVGElement>) => (
  <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      clipRule="evenodd"
      d="M12 9a3.25 3.25 0 1 1 0 6.5A3.25 3.25 0 0 1 12 9m0 2a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5"
      fillRule="evenodd"
    />
    <path
      clipRule="evenodd"
      d="m21.5 11.651-1.374 1.454-1.073-1.014L17.31 21.5H6.688l-1.742-9.41-1.072 1.015L2.5 11.65 12 2.5zM6.676 10.458 8.349 19.5h7.302l1.672-9.042L12 5.251z"
      fillRule="evenodd"
    />
  </svg>
)
export default SvgBirdHouse

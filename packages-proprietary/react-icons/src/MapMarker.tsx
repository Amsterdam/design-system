import type { SVGProps } from 'react'

const SvgMapMarker = (props: SVGProps<SVGSVGElement>) => (
  <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      clipRule="evenodd"
      d="M12 5.896a4.34 4.34 0 0 1 4.337 4.338l-.006.223a4.338 4.338 0 0 1-8.663 0l-.005-.223a4.34 4.34 0 0 1 4.336-4.338m0 2A2.338 2.338 0 1 0 12 12.572 2.338 2.338 0 0 0 12 7.896"
      fillRule="evenodd"
    />
    <path
      clipRule="evenodd"
      d="M12 1c7.732 0 9.842 6.387 9.842 9.226l-.005.265C21.638 16.065 15.23 21.137 12 23c-3.281-1.893-9.842-7.097-9.842-12.774C2.158 7.386 4.267 1 12 1m0 2C8.772 3 6.892 4.294 5.767 5.764c-1.197 1.564-1.61 3.43-1.61 4.462 0 2.093 1.24 4.344 3.169 6.459C8.83 18.334 10.59 19.714 12 20.644c1.408-.93 3.169-2.31 4.673-3.96 1.93-2.114 3.17-4.365 3.17-6.458 0-1.031-.413-2.898-1.61-4.462C17.108 4.294 15.228 3 11.999 3"
      fillRule="evenodd"
    />
  </svg>
)
export default SvgMapMarker

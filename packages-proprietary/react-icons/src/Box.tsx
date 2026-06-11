import type { SVGProps } from 'react'

const SvgBox = (props: SVGProps<SVGSVGElement>) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height={24}
    width={24}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M5.986 11.62a1 1 0 0 1 1.334-.47l1.84.88a1 1 0 1 1-.863 1.804l-1.84-.88a1 1 0 0 1-.47-1.334" fill="#000" />
    <path
      clipRule="evenodd"
      d="M21.5 7.25v9.5l-9.212 4.75L2.5 16.75v-9.5l9.788-4.75zm-17 8.248 6.75 3.275v-7.277L4.5 8.22zm8.75-3.994v7.249l6.25-3.223V8.281zM10.791 9.05l1.469.713 4.876-2.514-1.444-.745zM7.079 7.25l1.469.712 4.967-2.58-1.255-.647z"
      fill="#000"
      fillRule="evenodd"
    />
  </svg>
)
export default SvgBox

import type { SVGProps } from 'react'

const SvgBoxFill = (props: SVGProps<SVGSVGElement>) => (
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
      clipRule="evenodd"
      d="M21.5 7.25v9.5l-9.212 4.75L2.5 16.75v-9.5l9.788-4.75zm-14.18 3.9a1.001 1.001 0 0 0-.863 1.804l1.84.88a1 1 0 1 0 .862-1.804zm3.471-2.1 1.469.714 4.876-2.514-1.444-.745zm-3.712-1.8 1.469.712 4.967-2.58-1.255-.647z"
      fill="#000"
      fillRule="evenodd"
    />
  </svg>
)
export default SvgBoxFill

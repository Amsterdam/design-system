import type { SVGProps } from 'react'

const SvgCityPassFill = (props: SVGProps<SVGSVGElement>) => (
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
      d="M1 5.5A1.5 1.5 0 0 1 2.5 4h19A1.5 1.5 0 0 1 23 5.5v13a1.5 1.5 0 0 1-1.5 1.5h-19A1.5 1.5 0 0 1 1 18.5zm11.5 2v2h3.586l-3.934 3.934 1.414 1.414 3.934-3.934V14.5h2v-7zm-8 9h6v-2h-6z"
      fill="#000"
      fillRule="evenodd"
    />
  </svg>
)
export default SvgCityPassFill

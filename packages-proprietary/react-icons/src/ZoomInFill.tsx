import type { SVGProps } from 'react'

const SvgZoomInFill = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10.116 2.5a7.62 7.62 0 0 1 7.616 7.617c0 1.736-.579 3.331-1.574 4.61L21.5 20.06 20.058 21.5l-5.331-5.342a7.46 7.46 0 0 1-4.61 1.574A7.62 7.62 0 0 1 2.5 10.117 7.62 7.62 0 0 1 10.116 2.5M9 5.9v3H6v2h3v3h2v-3h3v-2h-3v-3z"
      fill="#000"
      fillRule="evenodd"
    />
  </svg>
)
export default SvgZoomInFill

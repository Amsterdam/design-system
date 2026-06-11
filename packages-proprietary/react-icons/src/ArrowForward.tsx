import type { SVGProps } from 'react'

const SvgArrowForward = (props: SVGProps<SVGSVGElement>) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height={24}
    width={24}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="m13.342 6.673 1.42-1.423L21.5 12l-6.738 6.75-1.42-1.423 4.312-4.32H2.5v-2.013h15.154z" fill="#000" />
  </svg>
)
export default SvgArrowForward

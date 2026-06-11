import type { SVGProps } from 'react'

const SvgTableFill = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.5 18.3v3.2h-2a3 3 0 0 1-3-3v-.2zM14.5 18.3v3.2h-5v-3.2zM21.5 18.5a3 3 0 0 1-3 3h-2v-3.2h5zM21.5 16.3h-5v-3.2h5zM7.5 13.1v3.2h-5v-3.2zM14.5 13.1v3.2h-5v-3.2zM21.5 11.1h-5V7.9h5zM7.5 7.9v3.2h-5V7.9zM14.5 7.9v3.2h-5V7.9zM18.5 2.5a3 3 0 0 1 3 3v.4h-19v-.4a3 3 0 0 1 3-3z"
      fill="#202020"
    />
  </svg>
)
export default SvgTableFill

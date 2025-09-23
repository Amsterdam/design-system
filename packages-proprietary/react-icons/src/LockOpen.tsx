import type { SVGProps } from 'react'

const SvgLockOpen = (props: SVGProps<SVGSVGElement>) => (
  <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M12.533 15.781a1.25 1.25 0 1 0-1.066 0L11 17.65h2z" />
    <path
      clipRule="evenodd"
      d="M7 9.5v-3a5 5 0 0 1 10 0h-2a3 3 0 1 0-6 0v3h11v12H4v-12zm-1 10v-8h12v8z"
      fillRule="evenodd"
    />
  </svg>
)
export default SvgLockOpen

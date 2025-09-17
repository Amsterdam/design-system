import type { SVGProps } from 'react'

const SvgBus = (props: SVGProps<SVGSVGElement>) => (
  <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      clipRule="evenodd"
      d="M10 4.5h8V6h-8zm-2 0H6V6h2zM6 8v3.42l1.016.58h9.968L18 11.42V8zm0 9.5v-3.777l.484.277h11.032l.484-.277V17.5zm-2-13a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2V6h2a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-1V8h-1v11.5h-1v2h-4v-2H9v2H5v-2H4V8H3v4H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h2zm13.5 12.25H15v-2h2.5zm-11 0H9v-2H6.5z"
      fillRule="evenodd"
    />
  </svg>
)
export default SvgBus

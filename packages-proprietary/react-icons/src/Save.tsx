import type { SVGProps } from 'react'

const SvgSave = (props: SVGProps<SVGSVGElement>) => (
  <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      clipRule="evenodd"
      d="M21.5 8.157V19.5a2 2 0 0 1-2 2h-15a2 2 0 0 1-2-2v-15a2 2 0 0 1 2-2h11.344zM4.5 19.5h1.976v-6h11.048v6H19.5V8.984L15.016 4.5H15v2a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-2H4.5zm3.976 0h7.048v-4H8.476zM8 6.5h5v-2H8z"
      fillRule="evenodd"
    />
  </svg>
)
export default SvgSave

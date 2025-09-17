import type { SVGProps } from 'react'

const SvgGrid = (props: SVGProps<SVGSVGElement>) => (
  <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      clipRule="evenodd"
      d="M5.5 21.5a3 3 0 0 1-3-3v-13a3 3 0 0 1 3-3h13a3 3 0 0 1 3 3v13a3 3 0 0 1-3 3zm10.263-2v-3.54H19.5v2.54a1 1 0 0 1-1 1zm3.737-14a1 1 0 0 0-1-1h-2.737v3.934H19.5zm-3.737 8.46v-3.526H19.5v3.527zm-2-3.526h-3.526v3.527h3.526zm0-5.934h-3.526v3.934h3.526zm0 11.46h-3.526v3.54h3.526zm-5.526-2H4.5v-3.526h3.737zm0-5.526H4.5V5.5a1 1 0 0 1 1-1h2.737zm0 11.066H5.5a1 1 0 0 1-1-1v-2.54h3.737z"
      fillRule="evenodd"
    />
  </svg>
)
export default SvgGrid

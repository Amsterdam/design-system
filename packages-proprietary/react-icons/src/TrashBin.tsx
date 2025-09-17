import type { SVGProps } from 'react'
const SvgTrashBin = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false" {...props}>
    <path d="M9 17.5v-9h2v9zM13 8.5v9h2v-9z" />
    <path
      fillRule="evenodd"
      d="M19 6.5v15H5v-15H2.5v-2h5.125v-1a1 1 0 0 1 1-1h6.75a1 1 0 0 1 1 1v1H21.5v2zm-12 13v-13h10v13z"
      clipRule="evenodd"
    />
  </svg>
)
export default SvgTrashBin

import type { SVGProps } from 'react'

const SvgTrashBinFill = (props: SVGProps<SVGSVGElement>) => (
  <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      clipRule="evenodd"
      d="M7.625 3.5a1 1 0 0 1 1-1h6.75a1 1 0 0 1 1 1v1H21.5v2H19v15H5v-15H2.5v-2h5.125zM8.75 17.75v-9.5h2v9.5zm4.5-9.5v9.5h2v-9.5z"
      fillRule="evenodd"
    />
  </svg>
)
export default SvgTrashBinFill

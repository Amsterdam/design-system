import type { SVGProps } from 'react'
const SvgCrossHairFill = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false" {...props}>
    <path d="M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10" />
    <path
      fillRule="evenodd"
      d="M10.842 23v-2.074a9.005 9.005 0 0 1-7.768-7.768H1v-2h2.039a9.004 9.004 0 0 1 7.803-8.084V1h2v2.039a9 9 0 0 1 8.12 8.119H23v2h-2.074a9.004 9.004 0 0 1-8.084 7.803V23zM12 19a7 7 0 1 0 0-14 7 7 0 0 0 0 14"
      clipRule="evenodd"
    />
  </svg>
)
export default SvgCrossHairFill

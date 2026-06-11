import type { SVGProps } from 'react'

const SvgFaceNeutral = (props: SVGProps<SVGSVGElement>) => (
  <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      clipRule="evenodd"
      d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0m2 0c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1s11 4.925 11 11M7 14v2h10v-2zm2.5-3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M16 12a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"
      fillRule="evenodd"
    />
  </svg>
)
export default SvgFaceNeutral

import type { SVGProps } from 'react'

const SvgSuitcase = (props: SVGProps<SVGSVGElement>) => (
  <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      clipRule="evenodd"
      d="M7 2.5v4H2.5v15h19v-15H17v-4zm8 4v-2H9v2zm4.5 2v11h-2.485v-11zm-4.485 0v11h-6.03v-11zM4.5 19.5h2.485v-11H4.5z"
      fillRule="evenodd"
    />
  </svg>
)
export default SvgSuitcase

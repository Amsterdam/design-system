import type { SVGProps } from 'react'

const SvgDuplicate = (props: SVGProps<SVGSVGElement>) => (
  <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M15 13.5h-2V11h-2.5V9H13V6.5h2V9h2.5v2H15z" />
    <path
      clipRule="evenodd"
      d="M6.5 2.5h15v15h-4v4h-15v-15h4zm-2 17h11v-2h-9v-9h-2zm4-4h11v-11h-11z"
      fillRule="evenodd"
    />
  </svg>
)
export default SvgDuplicate

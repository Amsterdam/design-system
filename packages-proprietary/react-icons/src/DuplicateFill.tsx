import type { SVGProps } from 'react'

const SvgDuplicateFill = (props: SVGProps<SVGSVGElement>) => (
  <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M6.5 2.5v4h-4v15h15v-4h4v-15zm9 17h-11v-11h2v9h9zm2-8.5H15v2.5h-2V11h-2.5V9H13V6.5h2V9h2.5z" />
  </svg>
)
export default SvgDuplicateFill

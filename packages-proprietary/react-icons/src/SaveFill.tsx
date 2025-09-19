import type { SVGProps } from 'react'

const SvgSaveFill = (props: SVGProps<SVGSVGElement>) => (
  <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M13 2.5v3H8v-3zM15.524 21.5H8.476v-6h7.048z" />
    <path d="M21.5 8.157V19.5a2 2 0 0 1-2 2h-1.976v-8H6.476v8H4.5a2 2 0 0 1-2-2v-15a2 2 0 0 1 2-2H6v3a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2v-3h.844z" />
  </svg>
)
export default SvgSaveFill

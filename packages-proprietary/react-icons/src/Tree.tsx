import type { SVGProps } from 'react'

const SvgTree = (props: SVGProps<SVGSVGElement>) => (
  <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="m14.508 8.641.491-1.285a3.21 3.21 0 1 0-5.998 0l.492 1.285-1.025.92A5.297 5.297 0 0 0 10 18.406v2.111A7.297 7.297 0 0 1 7.133 8.072a5.21 5.21 0 1 1 9.734 0A7.296 7.296 0 0 1 14 20.519v-2.113a5.296 5.296 0 0 0 1.532-8.846z" />
    <path d="M13 13.52V11h-2v4.903l-1.4-.833-.92 1.547 2.32 1.38V23h2v-6.915l2.31-2.345-1.283-1.263z" />
  </svg>
)
export default SvgTree

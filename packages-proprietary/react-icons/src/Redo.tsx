import type { SVGProps } from 'react'

const SvgRedo = (props: SVGProps<SVGSVGElement>) => (
  <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M11.293 2.401 12.707 1l4.207 4.168-4.207 4.168-1.414-1.401 1.725-1.709A8 8 0 0 0 12 6.16a7.509 7.509 0 0 0-4.772 1.698A7.38 7.38 0 0 0 4.5 13.588c0 4.103 3.358 7.43 7.5 7.43s7.5-3.327 7.5-7.43a7.38 7.38 0 0 0-2.604-5.63l1.417-1.403a9.35 9.35 0 0 1 3.187 7.033C21.5 18.786 17.247 23 12 23s-9.5-4.214-9.5-9.411a9.36 9.36 0 0 1 3.455-7.26A9.5 9.5 0 0 1 12 4.176q.587 0 1.155.07z" />
  </svg>
)
export default SvgRedo

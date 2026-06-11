import type { SVGProps } from 'react'

const SvgError = (props: SVGProps<SVGSVGElement>) => (
  <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="m22.879 12-5.44 9.422H6.561L1.121 12 6.56 2.58H17.44zM7.716 4.578 3.43 12l4.284 7.42 8.57.001L20.57 12l-4.286-7.42z" />
    <path d="m16.558 15.144-1.414 1.414-7.702-7.702 1.414-1.414z" />
    <path d="m15.144 7.442 1.414 1.414-7.702 7.702-1.414-1.414z" />
  </svg>
)
export default SvgError

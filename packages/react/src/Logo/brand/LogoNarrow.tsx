import { forwardRef } from 'react'
import type { ForwardedRef, SVGProps } from 'react'

const LogoNarrow = forwardRef((props: SVGProps<SVGSVGElement>, ref: ForwardedRef<SVGSVGElement>) => (
  <svg
    className="ams-logo"
    aria-hidden="true"
    focusable="false"
    ref={ref}
    viewBox="0 0 12 40"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      className="ams-logo__emblem"
      fill="#EC0000"
      d="m0 37.648 3.527-3.527L0 30.593l2.352-2.351 3.527 3.527 3.528-3.527 2.351 2.351-3.527 3.528 3.527 3.527L9.407 40l-3.528-3.527L2.352 40 0 37.648ZM0 23.54l3.527-3.528L0 16.485l2.352-2.352 3.527 3.528 3.528-3.528 2.351 2.352-3.527 3.527 3.527 3.528-2.351 2.351-3.528-3.527-3.527 3.527L0 23.54ZM0 9.407l3.527-3.528L0 2.352 2.352 0l3.527 3.527L9.407 0l2.351 2.352-3.527 3.527 3.527 3.528-2.351 2.351-3.528-3.527-3.526 3.527L0 9.407Z"
    />
  </svg>
))

LogoNarrow.displayName = 'LogoCrosses'

export default LogoNarrow

import type { SVGProps } from 'react'

const SvgSuccess = (props: SVGProps<SVGSVGElement>) => (
  <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="m8.07 10.88 2.64 2.89 5.91-6.08 1.43 1.4-7.38 7.6-4.07-4.46z" />
    <path
      clipRule="evenodd"
      d="M1 12C1 5.92 5.92 1 12 1s11 4.92 11 11-4.92 11-11 11S1 18.08 1 12m2 0c0 4.96 4.04 9 9 9s9-4.04 9-9-4.04-9-9-9-9 4.04-9 9"
      fillRule="evenodd"
    />
  </svg>
)
export default SvgSuccess

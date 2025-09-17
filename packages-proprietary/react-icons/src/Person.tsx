import type { SVGProps } from 'react'

const SvgPerson = (props: SVGProps<SVGSVGElement>) => (
  <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      clipRule="evenodd"
      d="M16.747 6.75a4.75 4.75 0 1 1-9.5 0 4.75 4.75 0 0 1 9.5 0m-4.75 2.75a2.75 2.75 0 1 0 0-5.5 2.75 2.75 0 0 0 0 5.5"
      fillRule="evenodd"
    />
    <path d="M3.18 14.48a2 2 0 0 0-.126.484L2 22h2.013l.309-2 .71-4.735v-.002l.006-.036.002-.011.01-.025a.3.3 0 0 1 .11-.135.3.3 0 0 1 .167-.056h13.35c.051 0 .12.02.187.078a.3.3 0 0 1 .108.183l1.011 6.74h2.02l-1.053-7.037A2.325 2.325 0 0 0 18.677 13H5.327c-.942 0-1.811.597-2.147 1.48" />
  </svg>
)
export default SvgPerson

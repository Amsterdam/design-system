import type { SVGProps } from 'react'
const SvgHeart = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false" {...props}>
    <path
      fillRule="evenodd"
      d="m12 8.178-1.533-1.83C9.766 5.511 8.835 4.75 7.5 4.75A3.5 3.5 0 0 0 4 8.25c0 .968.416 2.154 1.258 3.502.829 1.326 1.966 2.643 3.156 3.834A40 40 0 0 0 12 18.749l.313-.248a40 40 0 0 0 3.273-2.915c1.19-1.19 2.327-2.508 3.155-3.834C19.585 10.404 20 9.218 20 8.25a3.5 3.5 0 0 0-3.5-3.5c-1.335 0-2.266.761-2.967 1.598zm-1.468-4.476A5.26 5.26 0 0 0 7.5 2.75 5.5 5.5 0 0 0 2 8.25c0 6 10 13 10 13s10-7 10-13a5.5 5.5 0 0 0-5.5-5.5 5.26 5.26 0 0 0-3.032.952A7.4 7.4 0 0 0 12 5.064a7.4 7.4 0 0 0-1.468-1.362"
      clipRule="evenodd"
    />
  </svg>
)
export default SvgHeart

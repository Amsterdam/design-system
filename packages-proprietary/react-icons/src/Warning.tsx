import type { SVGProps } from 'react'

const SvgWarning = (props: SVGProps<SVGSVGElement>) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height={24}
    width={24}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m11.802 15.14-.528-4.48h1.999l-.529 4.48zM11.414 16.757c0-.423.307-.858.863-.858.547 0 .864.432.864.858 0 .435-.32.857-.864.857a.856.856 0 0 1-.863-.857"
      fill="#202020"
    />
    <path
      clipRule="evenodd"
      d="M22.75 21 12.283 3 1.25 21zm-3.464-1.987H4.809l7.429-12.12z"
      fill="#202020"
      fillRule="evenodd"
    />
  </svg>
)
export default SvgWarning

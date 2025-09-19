import type { SVGProps } from 'react'

const SvgBankCard = (props: SVGProps<SVGSVGElement>) => (
  <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      clipRule="evenodd"
      d="M3 6.5h18v1H3zm0 4v7h18v-7zm-2-4a2 2 0 0 1 2-2h18a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2zM12 15H4v-2h8zm8-2.5h-4v3h4z"
      fillRule="evenodd"
    />
  </svg>
)
export default SvgBankCard

import type { SVGProps } from 'react'

const SvgIdentityCard = (props: SVGProps<SVGSVGElement>) => (
  <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      clipRule="evenodd"
      d="M14 6h7v12H3V6h7v1.5h4zM1 4h22v16H1zm12 8.3h7v-2h-7zm5.6 3.5H13v-2h5.6zM7.969 12.095a1.797 1.797 0 1 0 0-3.595 1.797 1.797 0 0 0 0 3.595m-1.957.594c-.504 0-.935.362-1.021.858L4.596 15.8h6.78l-.394-2.253a1.04 1.04 0 0 0-1.021-.858z"
      fillRule="evenodd"
    />
  </svg>
)
export default SvgIdentityCard

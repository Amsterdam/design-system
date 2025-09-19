import type { SVGProps } from 'react'

const SvgEmbed = (props: SVGProps<SVGSVGElement>) => (
  <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="m12.869 3.775-3.687 16 1.95.45 3.686-16zM17.156 17.692l-1.414-1.414 4.243-4.243-4.243-4.242 1.414-1.414 5.657 5.656zM.914 12.035l5.657 5.657 1.414-1.414-4.243-4.243 4.243-4.242L6.57 6.379z" />
  </svg>
)
export default SvgEmbed

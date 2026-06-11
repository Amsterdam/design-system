import type { SVGProps } from 'react'

const SvgLayers = (props: SVGProps<SVGSVGElement>) => (
  <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      clipRule="evenodd"
      d="M12.512 2.611a.98.98 0 0 0-.904-.002L2.5 7.287l9.108 4.679c.285.146.62.145.904-.003L21.5 7.287zm-.457 2.054L6.95 7.287l5.105 2.623 5.04-2.623z"
      fillRule="evenodd"
    />
    <path d="m21.5 12.074-3.03-1.576-2.155 1.17.78.406-5.04 2.623-5.105-2.623.761-.391-2.163-1.174L2.5 12.074l9.108 4.679c.285.146.62.145.904-.003z" />
    <path d="m18.47 15.137 3.03 1.576-8.988 4.676a.98.98 0 0 1-.904.002L2.5 16.713l3.048-1.566 2.163 1.174-.761.392 5.105 2.622 5.04-2.622-.78-.406z" />
  </svg>
)
export default SvgLayers

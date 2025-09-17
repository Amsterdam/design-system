import type { SVGProps } from 'react'
const SvgPrint = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false" {...props}>
    <path d="M8.675 4.968h6.65v1.48h-6.65zM17.7 11.995c.525 0 .95-.442.95-.987s-.425-.987-.95-.987-.95.442-.95.987.425.987.95.987M13.275 15.578H9.15v1.48h4.125z" />
    <path
      fillRule="evenodd"
      d="M18.175 2.5v4.935H21.5V17.8h-4.05L15.87 21.5H6.3l.099-3.701H2.5V7.435h3.325V2.5zM16.75 7.435h-9.5V3.981h9.5zM19.6 9.41H4.4v6.416h2.052l.085-3.208h10.926l.165 3.208H19.6zM7.962 14.097h8.076l.237 2.688-2.722 2.095.983 1.147H7.726z"
      clipRule="evenodd"
    />
  </svg>
)
export default SvgPrint

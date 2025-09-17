import type { SVGProps } from 'react'

const SvgPrintFill = (props: SVGProps<SVGSVGElement>) => (
  <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M8.675 4.968h6.65v1.48h-6.65zM9.15 15.578h4.125v1.48H9.15z" />
    <path
      clipRule="evenodd"
      d="M5.825 7.435V2.5h12.35v4.935H21.5V17.8h-4.05L15.87 21.5H6.3l.099-3.701H2.5V7.435zm10.925 0V3.981h-9.5v3.454zm-.712 6.662H7.963l-.238 5.93h6.812l-.984-1.148 2.722-2.094zm2.612-3.089c0 .545-.425.987-.95.987s-.95-.442-.95-.987.425-.987.95-.987.95.442.95.987"
      fillRule="evenodd"
    />
  </svg>
)
export default SvgPrintFill

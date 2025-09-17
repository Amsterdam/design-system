import type { SVGProps } from 'react'
const SvgRulerFill = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false" {...props}>
    <path
      fillRule="evenodd"
      d="M5.476 17.087 3.68 15.29l-1.266 1.265 4.95 4.95L21.506 7.364l-4.95-4.95-1.209 1.21 1.796 1.795-1.06 1.061-1.797-1.796-.707.707 2.503 2.503-1.06 1.06-2.503-2.502-.707.707 1.796 1.796-1.061 1.06L10.75 8.22l-.707.707 2.503 2.503-1.06 1.06-2.504-2.503-.707.707 1.796 1.796-1.06 1.061-1.797-1.796-.707.707 2.503 2.503-1.06 1.061-2.503-2.503-.708.707 1.796 1.796z"
      clipRule="evenodd"
    />
  </svg>
)
export default SvgRulerFill

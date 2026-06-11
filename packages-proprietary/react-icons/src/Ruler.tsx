import type { SVGProps } from 'react'

const SvgRuler = (props: SVGProps<SVGSVGElement>) => (
  <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      clipRule="evenodd"
      d="m7.922 12.462-.707.707 1.796 1.796-1.06 1.061-1.796-1.796-.707.707 1.088 1.089-1.06 1.06-1.09-1.088-.558.558 3.536 3.536L20.092 7.364l-3.536-3.536-.502.503 1.09 1.088-1.062 1.061-1.089-1.089-.707.707 1.796 1.796-1.06 1.061-1.796-1.796-.707.707 1.088 1.089-1.06 1.06-1.089-1.088-.707.707 1.796 1.796-1.06 1.06-1.797-1.796-.707.708 1.089 1.089-1.06 1.06zM1 16.556l6.364 6.364L22.92 7.364 16.556 1z"
      fillRule="evenodd"
    />
  </svg>
)
export default SvgRuler

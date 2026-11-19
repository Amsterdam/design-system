import type { SVGProps } from 'react'

const SvgNewspaper = (props: SVGProps<SVGSVGElement>) => (
  <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M14.5 16.356H6V14.93h8.5zM9.8 13.43H6v-4h3.8zM14.5 13.43h-3.2v-1.25h3.2zM14.5 10.68h-3.2V9.43h3.2zM14.5 7.925H6V6.5h8.5z" />
    <path
      clipRule="evenodd"
      d="M18 9.5h3.5v9.25a2.75 2.75 0 0 1-2.75 2.75H5.5a3 3 0 0 1-3-3v-16H18zm-13.5 9a1 1 0 0 0 1 1h10.606a2.8 2.8 0 0 1-.106-.75V4.5H4.5zm13.5.25a.75.75 0 0 0 1.5 0V11.5H18z"
      fillRule="evenodd"
    />
  </svg>
)
export default SvgNewspaper

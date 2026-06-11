import type { SVGProps } from 'react'

const SvgZoomOut = (props: SVGProps<SVGSVGElement>) => (
  <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M14 10.9H6v-2h8z" fill="#000" />
    <path
      clipRule="evenodd"
      d="M10.116 2.5a7.62 7.62 0 0 1 7.616 7.617c0 1.736-.579 3.331-1.574 4.61L21.5 20.06 20.058 21.5l-5.331-5.342a7.46 7.46 0 0 1-4.61 1.574A7.62 7.62 0 0 1 2.5 10.117 7.62 7.62 0 0 1 10.116 2.5m0 2.031a5.595 5.595 0 0 0-5.585 5.586 5.595 5.595 0 0 0 5.585 5.585 5.52 5.52 0 0 0 3.158-.985 5.4 5.4 0 0 0 1.443-1.442c.62-.893.984-1.98.984-3.158a5.595 5.595 0 0 0-5.585-5.586"
      fill="#000"
      fillRule="evenodd"
    />
  </svg>
)
export default SvgZoomOut

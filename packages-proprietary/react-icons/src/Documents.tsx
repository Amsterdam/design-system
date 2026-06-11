import type { SVGProps } from 'react'

const SvgDocuments = (props: SVGProps<SVGSVGElement>) => (
  <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M17.5 7.852h-7v2.004h7zM10.5 11.57h7v2.003h-7zM10.5 15.286h5.06v2.004H10.5z" />
    <path
      clipRule="evenodd"
      d="m17.62 1 .27 3.577H21V17.66L18.75 23H7v-1.853l-2.55.19L3 2.102zM6.29 19.183l.71-.05V4.577h8.89l-.11-1.433-10.63.811zM9 6.58v14.416h8.03l-.47-.58-.65-.792 2.94-2.364.15-.12V6.58z"
      fillRule="evenodd"
    />
  </svg>
)
export default SvgDocuments

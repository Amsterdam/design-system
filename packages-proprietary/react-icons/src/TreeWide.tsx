import type { SVGProps } from 'react'

const SvgTreeWide = (props: SVGProps<SVGSVGElement>) => (
  <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M2.5 12a5 5 0 0 0 5 5H10v-2H7.5a3 3 0 0 1-.289-5.986l1.647-.156.156-1.647a3 3 0 0 1 5.972 0l.156 1.647 1.647.156A3 3 0 0 1 16.5 15h-1.171L14 16.328V17h2.5a5 5 0 0 0 .477-9.977 5 5 0 0 0-9.954 0A5 5 0 0 0 2.5 12" />
    <path d="m13 13.086 1.293-1.293 1.414 1.414L13 15.914V19.5h2v2H9v-2h2v-5.086l-2.707-2.207 1.414-1.414L11 11.75V9h2z" />
  </svg>
)
export default SvgTreeWide

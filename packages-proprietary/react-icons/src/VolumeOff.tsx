import type { SVGProps } from 'react'

const SvgVolumeOff = (props: SVGProps<SVGSVGElement>) => (
  <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path clipRule="evenodd" d="m14 21.5-7-5H2.5v-9H7l7-5zm-6.36-12H4.5v5h3.14L12 17.613V6.387z" fillRule="evenodd" />
    <path d="m22.686 9.707-2.293 2.292 2.293 2.294-1.413 1.414-2.294-2.294-2.293 2.294-1.415-1.414 2.293-2.294-2.291-2.292 1.413-1.414 2.293 2.292 2.293-2.292z" />
  </svg>
)
export default SvgVolumeOff

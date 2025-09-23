import type { SVGProps } from 'react'

const SvgMapMarkerFill = (props: SVGProps<SVGSVGElement>) => (
  <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M12 7.896a2.339 2.339 0 1 1-2.337 2.338A2.34 2.34 0 0 1 12 7.896" />
    <path
      clipRule="evenodd"
      d="M12 1c7.733 0 9.842 6.387 9.842 9.226C21.842 15.903 15.28 21.108 12 23c-3.28-1.892-9.842-7.097-9.842-12.774C2.158 7.386 4.268 1 12 1m0 4.896a4.34 4.34 0 0 0-4.337 4.338l.006.223a4.338 4.338 0 0 0 8.663 0l.006-.223A4.34 4.34 0 0 0 12 5.896"
      fillRule="evenodd"
    />
  </svg>
)
export default SvgMapMarkerFill

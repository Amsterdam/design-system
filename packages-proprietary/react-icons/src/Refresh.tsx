import type { SVGProps } from 'react'

const SvgRefresh = (props: SVGProps<SVGSVGElement>) => (
  <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M4.678 8.309A8.1 8.1 0 0 0 4 11.553c0 4.383 3.487 7.947 7.824 8.041l-1.477 1.484 1.415 1.422 3.888-3.91-3.888-3.91-1.415 1.423 1.472 1.48C8.59 17.485 6 14.822 6 11.552c0-.79.152-1.546.427-2.238zM8.35 5.41l3.888 3.91 1.415-1.423-1.472-1.48c3.23.097 5.819 2.76 5.819 6.03 0 .787-.15 1.54-.424 2.23l1.762.98a8.1 8.1 0 0 0 .662-3.21c0-4.383-3.487-7.947-7.824-8.041l1.477-1.484L12.238 1.5z"
      fill="#181818"
    />
  </svg>
)
export default SvgRefresh

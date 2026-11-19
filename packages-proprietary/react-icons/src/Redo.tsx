import type { SVGProps } from 'react'

const SvgRedo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    aria-hidden="true"
    data-directional="true"
    focusable="false"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="m10.674 2.37 1.685 1.683a9.5 9.5 0 0 0-8.871 5.273A9.501 9.501 0 0 0 17.49 21.298a9.5 9.5 0 0 0 3.37-11.179l-1.864.72A7.5 7.5 0 1 1 12 6.045c.113 0 .227.006.34.01l-1.667 1.667 1.415 1.414 4.09-4.09-4.09-4.09z" />
  </svg>
)
export default SvgRedo

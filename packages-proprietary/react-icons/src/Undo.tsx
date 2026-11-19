import type { SVGProps } from 'react'

const SvgUndo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    aria-hidden="true"
    data-directional="true"
    focusable="false"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M13.326 2.37 11.64 4.052a9.5 9.5 0 0 1 8.871 5.273A9.502 9.502 0 0 1 6.51 21.298a9.5 9.5 0 0 1-3.37-11.179l1.864.72A7.5 7.5 0 1 0 12 6.045c-.113 0-.227.006-.34.01l1.667 1.667-1.415 1.414-4.09-4.09 4.09-4.09z" />
  </svg>
)
export default SvgUndo

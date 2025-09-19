import type { SVGProps } from 'react'

const SvgUpload = (props: SVGProps<SVGSVGElement>) => (
  <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="m15.753 9.121-2.76-2.793v9.586h-1.977V6.328l-2.76 2.793-1.398-1.414L12.004 2.5l5.147 5.207z" />
    <path d="m21.5 17.207-3.664 3.707c-.37.375-.874.586-1.398.586H7.48a1.97 1.97 0 0 1-1.415-.604L2.5 17.198l1.415-1.396L7.48 19.5h8.96l3.663-3.707z" />
  </svg>
)
export default SvgUpload

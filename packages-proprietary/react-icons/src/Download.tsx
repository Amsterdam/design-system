import type { SVGProps } from 'react'

const SvgDownload = (props: SVGProps<SVGSVGElement>) => (
  <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="m15.797 9.293-2.793 2.793V2.5h-2v9.586L8.212 9.293l-1.415 1.414 5.207 5.207 5.208-5.207z" />
    <path d="m21.502 17.207-3.708 3.707a2 2 0 0 1-1.414.586H7.536c-.43 0-1.056-.218-1.432-.604l-3.606-3.698 1.432-1.396L7.536 19.5h8.844l3.707-3.707z" />
  </svg>
)
export default SvgDownload

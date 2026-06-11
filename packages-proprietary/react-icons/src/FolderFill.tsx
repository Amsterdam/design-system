import type { SVGProps } from 'react'

const SvgFolderFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height={24}
    width={24}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M9 5.5 7 4H1v16l4-9.5h14v-5z" fill="#000" />
    <path d="M22.158 12.5H6.328L4.012 18 3.2 20H19z" fill="#000" />
  </svg>
)
export default SvgFolderFill

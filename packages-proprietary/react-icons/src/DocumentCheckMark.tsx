import type { SVGProps } from 'react'

const SvgDocumentCheckMark = (props: SVGProps<SVGSVGElement>) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height={24}
    width={24}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M14.5 21.5H4v-19h14v9.046l-1.75 1.875V4.227H5.75v15.546h7.244z" fill="#000" />
    <path
      d="M7 8.5h8v-2H7zM12 12.5H7v-2h5zM15.13 19.763l6.378-6.857-1.464-1.363-4.803 5.163-1.68-2.093-1.56 1.252z"
      fill="#000"
    />
  </svg>
)
export default SvgDocumentCheckMark

import type { SVGProps } from 'react'

const SvgPencil = (props: SVGProps<SVGSVGElement>) => (
  <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      clipRule="evenodd"
      d="M15.034 3.522a3.5 3.5 0 0 1 4.942 0 3.483 3.483 0 0 1 0 4.933L9.105 19.306 2 21.486l1.795-6.746zm3.53 1.41a1.5 1.5 0 0 0-2.118 0l-.874.871 2.119 2.114.873-.872a1.493 1.493 0 0 0 0-2.114M5.587 15.77l8.573-8.557 2.119 2.114-8.235 8.22-3.19.978z"
      fillRule="evenodd"
    />
    <path d="M11.415 21.5H21v-1.993h-9.585z" />
  </svg>
)
export default SvgPencil

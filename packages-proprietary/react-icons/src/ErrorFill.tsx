import type { SVGProps } from 'react'

const SvgErrorFill = (props: SVGProps<SVGSVGElement>) => (
  <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      clipRule="evenodd"
      d="m22.879 12-5.44 9.422-10.877-.001L1.122 12 6.56 2.58h10.878zM12 10.586 8.856 7.442 7.442 8.856 10.586 12l-3.144 3.145 1.414 1.414L12 13.414l3.145 3.145 1.414-1.415L13.414 12l3.145-3.145-1.415-1.413z"
      fillRule="evenodd"
    />
  </svg>
)
export default SvgErrorFill

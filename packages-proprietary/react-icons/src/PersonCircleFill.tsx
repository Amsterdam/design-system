import type { SVGProps } from 'react'

const SvgPersonCircleFill = (props: SVGProps<SVGSVGElement>) => (
  <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M11.975 12.964c2.174 0 3.936-1.783 3.936-3.982S14.15 5 11.975 5 8.04 6.783 8.04 8.982s1.762 3.982 3.935 3.982" />
    <path
      clipRule="evenodd"
      d="M23 12c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1s11 4.925 11 11m-3.77 5.36-.058-.646c-.146-.896-1.004-1.76-1.987-1.76H6.815c-.823 0-1.583.536-1.876 1.326-.029.07-.052.172-.07.26a3 3 0 0 0-.057.354l-.042.467a9 9 0 1 1 14.46 0"
      fillRule="evenodd"
    />
  </svg>
)
export default SvgPersonCircleFill

import type { SVGProps } from 'react'

const SvgStroller = (props: SVGProps<SVGSVGElement>) => (
  <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      clipRule="evenodd"
      d="M14.16 3.05h-1v6.99H7.097L6.379 7.5H2.84v2h2.026l1.85 6.544c.1.357.295.669.552.911a3 3 0 1 0 5.401.545h.842a3 3 0 1 0 5.408-.534c.265-.245.464-.563.566-.929l1.669-5.987h.006a7 7 0 0 0-7-7m5 6.99a5 5 0 0 0-4-4.89v4.89zM8.84 18.5a1 1 0 1 1 2 0 1 1 0 0 1-2 0m-.2-3-.978-3.46h10.861l-.964 3.46zm7.7 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2"
      fillRule="evenodd"
    />
  </svg>
)
export default SvgStroller

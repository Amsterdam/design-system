import type { SVGProps } from 'react'

const SvgPark = (props: SVGProps<SVGSVGElement>) => (
  <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      clipRule="evenodd"
      d="m18.787 7.857.37-.964a3.237 3.237 0 1 0-6.05 0l.369.964-.769.69a5.133 5.133 0 0 0 2.543 8.878v-1l-2.136-1.282.772-1.286 1.364.818V10h1.5v2.69l1.22-1.22 1.06 1.06-2.28 2.28v2.653a5.132 5.132 0 0 0 2.806-8.917zM16.75 18.971A6.632 6.632 0 0 0 20.557 7.43a4.737 4.737 0 1 0-8.851 0 6.633 6.633 0 0 0 3.544 11.512V21H9.858l-.386-1.25h1.587v-1.5H9.04l-.375-1.5h.716v-1.5H2.676v1.5h.716l-.375 1.5H1v1.5h1.586L2.2 21H1v2h22v-2h-6.25zM5.083 16.75h1.893l.463 1.5H4.62zm-.927 3h3.747L8.289 21H3.77z"
      fillRule="evenodd"
    />
  </svg>
)
export default SvgPark

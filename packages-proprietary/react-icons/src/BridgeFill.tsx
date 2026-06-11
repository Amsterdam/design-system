import type { SVGProps } from 'react'

const SvgBridgeFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height={24}
    width={24}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      clipRule="evenodd"
      d="M15 4.5a.75.75 0 0 1 .75.75v.445L23 7.91v1.568l-1.25-.383V12.4l1.25.349v6h-6.335a5 5 0 1 0-9.33 0H1v-6l1.25-.349V9.095L1 9.478V7.91l7.25-2.215V5.25a.75.75 0 0 1 1.5 0v.25h1.5v-.25a.75.75 0 0 1 1.5 0v.25h1.5v-.25A.75.75 0 0 1 15 4.5M3.75 8.637v3.347l1.5-.418V8.18zm15 2.93 1.5.417V8.637l-1.5-.458zm-3-.836 1.5.418V7.721l-1.5-.458zm-9-3.01v3.427l1.5-.417V7.263zm3 2.592.097-.026-.097.032v.002c.479-.162.98-.275 1.5-.33V7h-1.5zm3-.323c.52.056 1.021.169 1.5.331l-.102-.035.102.029V7h-1.5z"
      fill="#000"
      fillRule="evenodd"
    />
  </svg>
)
export default SvgBridgeFill

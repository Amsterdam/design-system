import type { SVGProps } from 'react'

const SvgBridge = (props: SVGProps<SVGSVGElement>) => (
  <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      clipRule="evenodd"
      d="M15 4.5a.75.75 0 0 1 .75.75v.445L23 7.91v1.568l-1.25-.383V12.4l1.25.349v6h-6.335a5 5 0 1 0-9.33 0H1v-6l1.25-.349V9.095L1 9.478V7.91l7.25-2.215V5.25a.75.75 0 0 1 1.5 0v.25h1.5v-.25a.75.75 0 0 1 1.5 0v.25h1.5v-.25A.75.75 0 0 1 15 4.5M4.28 13.395l-1.78.495v3.36h2.508Q5 17.1 5 16.95c0-1.538.496-2.96 1.337-4.114zm13.382-.56a6.97 6.97 0 0 1 1.33 4.415H21.5v-3.36l-1.78-.495zM3.75 8.638v3.347l1.5-.418V8.18zm15 2.93 1.5.417V8.637l-1.5-.458zm-12-3.846v3.428l1.5-.418V7.263zm9 3.01 1.5.418V7.721l-1.5-.458zm-6-.416.103-.029a7 7 0 0 1 1.397-.296V7h-1.5zm3-.325q.724.079 1.398.296l.102.029V7h-1.5z"
      fillRule="evenodd"
    />
  </svg>
)
export default SvgBridge

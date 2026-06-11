import type { SVGProps } from 'react'

const SvgUndo = (props: SVGProps<SVGSVGElement>) => (
  <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M12.707 2.401 11.293 1 7.086 5.168l4.207 4.168 1.414-1.401-1.725-1.709A8 8 0 0 1 12 6.16a7.51 7.51 0 0 1 4.772 1.698 7.38 7.38 0 0 1 2.728 5.732c0 4.103-3.358 7.43-7.5 7.43s-7.5-3.327-7.5-7.43a7.38 7.38 0 0 1 2.604-5.63L5.687 6.557A9.35 9.35 0 0 0 2.5 13.589C2.5 18.786 6.753 23 12 23s9.5-4.214 9.5-9.411a9.36 9.36 0 0 0-3.454-7.26A9.5 9.5 0 0 0 12 4.176q-.587 0-1.155.07z" />
  </svg>
)
export default SvgUndo

import type { SVGProps } from 'react'

const SvgCake = (props: SVGProps<SVGSVGElement>) => (
  <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      clipRule="evenodd"
      d="M12 7a1.5 1.5 0 0 0 1.5-1.5C13.5 4.672 12 2 12 2s-1.5 2.672-1.5 3.5A1.5 1.5 0 0 0 12 7m1 1v2.5h2.5V9h2v1.5h1a3 3 0 0 1 3 3v8h-19v-8a3 3 0 0 1 3-3h1V9h2v1.5H11V8zm-8.5 5.5a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1v1.327l-.068.055a2 2 0 0 1-2.315.138l-1.919-1.2-2.138 1.337a2 2 0 0 1-2.12 0l-2.138-1.336-1.919 1.2a2 2 0 0 1-2.315-.139l-.068-.055zm0 3.6v2.4h15v-2.4a4 4 0 0 1-3.444-.384l-.858-.537-1.077.674a4 4 0 0 1-4.242 0l-1.077-.674-.858.537A4 4 0 0 1 4.5 17.1m3-9.1A1.5 1.5 0 0 0 9 6.5C9 5.672 7.5 3 7.5 3S6 5.672 6 6.5A1.5 1.5 0 0 0 7.5 8m9 0A1.5 1.5 0 0 0 18 6.5c0-.828-1.5-3.5-1.5-3.5S15 5.672 15 6.5A1.5 1.5 0 0 0 16.5 8"
      fillRule="evenodd"
    />
  </svg>
)
export default SvgCake

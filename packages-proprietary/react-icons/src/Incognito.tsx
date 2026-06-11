import type { SVGProps } from 'react'

const SvgIncognito = (props: SVGProps<SVGSVGElement>) => (
  <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      clipRule="evenodd"
      d="M16.5 14.5a3.5 3.5 0 1 1-3.354 4.5h-2.292a3.501 3.501 0 1 1 0-2h2.292a3.5 3.5 0 0 1 3.354-2.5m-9 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m9 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M19.796 11.64l-.026-.011q.906.435 1.73.97l-1.09 1.676C18.231 12.858 14.995 12 12 12c-3.308 0-5.889.754-7.994 2.016L2.5 12.599q.833-.542 1.751-.98l-.048.022L5.5 2.5h13zm-13.442-.853-.048.016C7.924 10.285 9.674 10 12 10c1.82 0 4.064.283 5.679.798l-.034-.01-.867-6.288H7.222z"
      fillRule="evenodd"
    />
  </svg>
)
export default SvgIncognito

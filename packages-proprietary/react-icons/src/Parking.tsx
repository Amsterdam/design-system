import type { SVGProps } from 'react'
const SvgParking = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false" {...props}>
    <path
      fillRule="evenodd"
      d="M4.5 4.5h15v15h-15zm-2 0a2 2 0 0 1 2-2h15a2 2 0 0 1 2 2v15a2 2 0 0 1-2 2h-15a2 2 0 0 1-2-2zM8 6v12h2.428v-4.062h2.563c2.354 0 4.009-1.643 4.009-3.969S15.345 6 12.99 6zm4.788 5.963h-2.36V7.975h2.36c1.067 0 1.766.794 1.766 1.994 0 1.219-.7 1.994-1.766 1.994"
      clipRule="evenodd"
    />
  </svg>
)
export default SvgParking

import type { SVGProps } from 'react'

const SvgVotingBallot = (props: SVGProps<SVGSVGElement>) => (
  <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      clipRule="evenodd"
      d="M14.322 1.988 9.848 9.736l.325 2.476 2.565 1.48 2.306-.956 4.473-7.748L21.25 5.99l-3.5 6.062v10.418h-15v-15h6.098L12.59.989zm-6.454 8.023a5.5 5.5 0 1 0 7.868 4.603l-6.888 2.855z"
      fillRule="evenodd"
    />
    <path d="m17.786 3.99-3.625 6.278-1.733-1 3.625-6.28z" />
  </svg>
)
export default SvgVotingBallot

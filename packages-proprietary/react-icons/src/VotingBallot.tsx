import type { SVGProps } from 'react'

const SvgVotingBallot = (props: SVGProps<SVGSVGElement>) => (
  <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      clipRule="evenodd"
      d="M14.071 1.999 9.598 9.747l.325 2.476 2.564 1.48 2.307-.956L19.267 5l1.732 1L18 11.193v11.264H3v-14h4.288q.47-.233.974-.397L12.339 1zm-6.424 8.256a5.5 5.5 0 1 0 8.325 4.167l-.099.042-7.275 3.016z"
      fillRule="evenodd"
    />
    <path d="m17.535 4-3.625 6.278-1.732-1L15.803 3z" />
  </svg>
)
export default SvgVotingBallot

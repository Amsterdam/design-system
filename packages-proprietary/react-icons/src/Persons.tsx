import type { SVGProps } from 'react'

const SvgPersons = (props: SVGProps<SVGSVGElement>) => (
  <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      clipRule="evenodd"
      d="M7 9.88c.352 0 .69-.066 1-.187a4.26 4.26 0 0 1 1.72-2.15q.03-.203.03-.413A2.75 2.75 0 1 0 7 9.88m0-2a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5M19.75 7.13A2.75 2.75 0 0 1 16 9.693a4.26 4.26 0 0 0-1.72-2.15 2.75 2.75 0 1 1 5.47-.413m-2 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0"
      fillRule="evenodd"
    />
    <path d="M6.945 16.345a2 2 0 0 1 1.927-1.465h6.257a2 2 0 0 1 1.928 1.465l.907 3.267h-2.076l-.759-2.732H8.872l-.76 2.732H6.038z" />
    <path
      clipRule="evenodd"
      d="M12 13.88a2.75 2.75 0 1 0 0-5.5 2.75 2.75 0 0 0 0 5.5m0-2a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5"
      fillRule="evenodd"
    />
    <path d="M3.856 11.38h3.86c.042.732.271 1.414.64 2h-4.5l-.765 2.732H1l.915-3.267a2.01 2.01 0 0 1 1.941-1.465M20.144 13.38h-4.52c.37-.586.598-1.268.641-2h3.879c.905 0 1.7.599 1.941 1.465L23 16.112h-2.091z" />
  </svg>
)
export default SvgPersons

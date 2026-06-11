import type { SVGProps } from 'react'

const SvgEarthFill = (props: SVGProps<SVGSVGElement>) => (
  <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      clipRule="evenodd"
      d="M23 12c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1s11 4.925 11 11m-12.75 8.83q.85.169 1.75.17a8.96 8.96 0 0 0 5.214-1.663V17.02l-2.134-1.584-1.61.598-1.97-2.741v-2.838L12.732 9h1.622l2.215 1.41h4.29a9 9 0 0 0-.638-2.077l-1.135.151-3.048-1.524-1.558.52-1.32-.33 1.377-3.788A9 9 0 0 0 12 3c-1.323 0-2.58.286-3.712.799l2.626.583-.364 1.817-1.41.94-1 1.5-1.391.928-2.045 1.022-1.7 1.7q.024.736.161 1.437l2.128-1.064.911 1.661h2.394l1.098 2.118H11.5v1.447l-1.559 2.017z"
      fillRule="evenodd"
    />
  </svg>
)
export default SvgEarthFill

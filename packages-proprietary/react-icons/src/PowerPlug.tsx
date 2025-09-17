import type { SVGProps } from 'react'

const SvgPowerPlug = (props: SVGProps<SVGSVGElement>) => (
  <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      clipRule="evenodd"
      d="M15.037 2.5V6h2.005V2.5h2.006V6h.474c1.091 0 2.045.896 1.974 2.062-.28 4.592-2.424 6.672-4.33 7.257v1.122a5.413 5.413 0 0 1-10.825 0v-1.957a4 4 0 0 0-4-4H2v-2h.34a6 6 0 0 1 6 6v1.957a3.413 3.413 0 0 0 6.826 0V15.37h-.13c-1.948-.507-4.22-2.571-4.51-7.308C10.457 6.896 11.41 6 12.502 6h.53V2.5zM12.533 8c.307 4.722 2.72 5.5 3.479 5.5.757 0 3.17-.778 3.478-5.5z"
      fillRule="evenodd"
    />
  </svg>
)
export default SvgPowerPlug

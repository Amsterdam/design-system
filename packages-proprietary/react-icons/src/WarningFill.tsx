import type { SVGProps } from 'react'

const SvgWarningFill = (props: SVGProps<SVGSVGElement>) => (
  <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      clipRule="evenodd"
      d="M12.283 3 22.75 21H1.25zm-.555 12.283-.604-5.12h2.284l-.603 5.12zm-.444 1.848c0-.483.351-.98.987-.98.624 0 .986.494.986.98 0 .497-.364.98-.986.98a.97.97 0 0 1-.987-.98"
      fillRule="evenodd"
    />
  </svg>
)
export default SvgWarningFill

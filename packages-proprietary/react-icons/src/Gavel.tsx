import type { SVGProps } from 'react'
const SvgGavel = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false" {...props}>
    <path
      fillRule="evenodd"
      d="M4.213 11.796a.98.98 0 0 1 0-1.4l7.45-7.356a1.013 1.013 0 0 1 1.42 0l4.611 4.553a.98.98 0 0 1 0 1.401l-3.06 3.021 6.866 6.779-1.42 1.401-6.865-6.779-2.971 2.934a1.013 1.013 0 0 1-1.42 0zm5.321 2.452-3.192-3.152 6.03-5.954 3.194 3.152z"
      clipRule="evenodd"
    />
    <path d="M4.005 19.269v-1.486h7.024v1.486h1.505v1.981H2.5v-1.981z" />
  </svg>
)
export default SvgGavel

import type { SVGProps } from 'react'

const SvgFontSize = (props: SVGProps<SVGSVGElement>) => (
  <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M19.275 15.89h-6.27l-.73-1.798H18.6l-3.25-8.344h-.05l-3.127 8.091-1.008-2.479L14.076 4h2.6L23 20h-2.15z" />
    <path
      clipRule="evenodd"
      d="M5.68 8.48 1 20h2.412l.972-2.534h5.202L10.558 20h2.502L8.38 8.48zm-.594 7.072 1.872-4.857h.036l1.872 4.857z"
      fillRule="evenodd"
    />
  </svg>
)
export default SvgFontSize

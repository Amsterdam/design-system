import type { SVGProps } from 'react'

const SvgDocumentWithPencil = (props: SVGProps<SVGSVGElement>) => (
  <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      clipRule="evenodd"
      d="m5.686 19.658 1.336-6.69 8.877-10.61a3.24 3.24 0 0 1 2.26-1.17c.823-.05 1.646.2 2.289.73a3.17 3.17 0 0 1 1.165 2.18c.08.86-.171 1.7-.723 2.36l-8.867 10.61zm3.204-5.8-.502 2.54 2.41-.99 6.824-8.162-1.896-1.572zm10.453-8.67-.436.521-1.896-1.573.424-.508a1.243 1.243 0 0 1 1.737-.16c.252.21.412.51.442.83s-.07.64-.27.89"
      fillRule="evenodd"
    />
    <path d="M16.431 16.448v-1.53l2.008-2.4v4.51l-2.58 5.79H2.373v-20h10.523l-1.677 2H4.382v16h9.6l-1.386-1.54z" />
  </svg>
)
export default SvgDocumentWithPencil

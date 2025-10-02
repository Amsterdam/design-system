import type { SVGProps } from 'react'

const SvgLinkedIn = (props: SVGProps<SVGSVGElement>) => (
  <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M20.097 2.5H3.903c-.775 0-1.403.628-1.403 1.403v16.194c0 .775.628 1.403 1.403 1.403h16.194c.775 0 1.403-.628 1.403-1.403V3.903c0-.775-.628-1.403-1.403-1.403M8.163 18.687H5.306V9.612h2.857v9.074M6.735 8.354c-.909 0-1.646-.692-1.646-1.64 0-.947.737-1.64 1.646-1.64.91 0 1.647.693 1.647 1.64 0 .948-.737 1.64-1.647 1.64m11.958 10.34h-2.856v-4.956c0-1.462-.621-1.913-1.424-1.913-.847 0-1.678.637-1.678 1.95v4.92H9.878V9.618h2.747v1.258h.037c.276-.558 1.242-1.512 2.716-1.512 1.594 0 3.316.946 3.316 3.717z" />
  </svg>
)

/**
 * @name This icon was previously spelled als ‘Linkedin’, with a lowercase ‘i’.
 * Use ‘LinkedIn’ instead.
 */
export default SvgLinkedIn

import type { SVGProps } from 'react'

const SvgWasteContainerFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height={24}
    width={24}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M17.678 23H4.823L4.08 11.25h14.342zM17.355 1.927c.746-1.754 1.968-.686 2.541.473.573 1.158-1.435 2.536-2.204 1.956-.15.805-.42 1.227-.784 1.288-.36.06-.726-.213-.959-.465-.375-.446-.336-.951.01-1.41-.925-.003-1.287-.177-1.332-.42-.102-.55.734-.972 1.108-1.198-.18-1.295 1.046-1.382 1.62-.224"
      fill="#000"
    />
    <path
      clipRule="evenodd"
      d="M14.303 2c-.783.779-.892 2.127.367 2.53.038 1.45 1.982 2.64 3.14 1.527l.69 3.676H4l1.228-6.545A1.405 1.405 0 0 1 6.628 2zm-5.21 2.5a1 1 0 0 0-.944.67l-.435 1.25a1 1 0 0 0 .943 1.33h5.185a1 1 0 0 0 .944-1.33l-.435-1.25a1 1 0 0 0-.945-.67z"
      fill="#000"
      fillRule="evenodd"
    />
  </svg>
)
export default SvgWasteContainerFill

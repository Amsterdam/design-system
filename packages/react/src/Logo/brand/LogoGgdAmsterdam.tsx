import { forwardRef } from 'react'
import type { ForwardedRef, SVGProps } from 'react'

const LogoGgdAmsterdam = forwardRef((props: SVGProps<SVGSVGElement>, ref: ForwardedRef<SVGSVGElement>) => (
  <svg
    aria-hidden="true"
    className="ams-logo"
    focusable="false"
    ref={ref}
    viewBox="0 0 115 40"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      className="ams-logo__emblem"
      d="m0 37.648 3.527-3.527L0 30.593l2.352-2.351 3.527 3.527 3.528-3.527 2.351 2.351-3.527 3.528 3.527 3.527L9.407 40l-3.528-3.527L2.352 40 0 37.648ZM0 23.54l3.527-3.528L0 16.485l2.352-2.352 3.527 3.528 3.528-3.528 2.351 2.352-3.527 3.527 3.527 3.528-2.351 2.351-3.528-3.527-3.527 3.527L0 23.54ZM0 9.407l3.527-3.528L0 2.352 2.352 0l3.527 3.527L9.407 0l2.351 2.352-3.527 3.527 3.527 3.528-2.351 2.351-3.528-3.527-3.526 3.527L0 9.407Z"
      fill="#EC0000"
    />
    <path
      className="ams-logo__text-primary"
      d="m23.73 25.267 4.952 12.381h-2.647l-1.03-2.724H19.5l-1.028 2.724h-2.553l4.953-12.381h2.858Zm-3.486 7.6h4l-1.982-5.219h-.037l-1.981 5.22ZM32.454 28.24v1.275h.038c.476-.971 1.315-1.505 2.4-1.505 1.22 0 2.133.534 2.704 1.6.572-1.028 1.62-1.6 2.953-1.6 2.323 0 3.447 1.296 3.447 3.944v5.696h-2.362v-5.296c0-1.543-.534-2.286-1.638-2.286-1.104 0-1.695.82-1.695 2.362v5.22h-2.363v-5.296c0-1.562-.514-2.286-1.638-2.286-1.124 0-1.695.838-1.695 2.362v5.22h-2.362v-9.41h2.211ZM48.34 33.706c-1.275-.381-2.513-1.067-2.513-2.78 0-1.715 1.447-2.916 3.6-2.916 1.448 0 2.572.514 3.2 1.466l-1.351 1.353c-.477-.59-1.124-.915-1.829-.915-.8 0-1.296.362-1.296.933 0 .762.8.895 1.963 1.257 1.276.381 2.514 1.067 2.514 2.781 0 1.715-1.524 2.99-3.772 2.99-1.466 0-2.648-.514-3.334-1.486l1.353-1.352c.513.609 1.2.934 1.962.934.915 0 1.466-.381 1.466-1.01 0-.762-.8-.895-1.962-1.258v.003ZM55.122 34.277v-4.076h-1.62v-1.963h.858c.78 0 1.085-.304 1.085-1.085v-1.466h2.019v2.552h2.286v1.963h-2.286v4.076c0 .915.476 1.43 1.352 1.43.267 0 .59-.038.78-.096v1.981c-.285.076-.819.133-1.237.133-2.133 0-3.238-1.18-3.238-3.447v-.002ZM60.911 32.944c0-2.915 1.963-4.934 4.763-4.934s4.743 2 4.743 4.876c0 .228-.038.59-.077.839h-7.048c.172 1.275 1.257 2.133 2.648 2.133 1.03 0 1.924-.381 2.514-1.067l1.429 1.391c-.857 1.105-2.343 1.696-4.058 1.696-2.895 0-4.915-2.038-4.915-4.934h.001Zm2.381-.953h4.744c-.153-1.238-1.106-2.076-2.381-2.076-1.276 0-2.229.838-2.363 2.076ZM74.607 28.24V29.8h.038c.457-1.066 1.296-1.638 2.4-1.638.285 0 .685.038.838.095v2.248c-.267-.076-.78-.132-1.162-.132-1.2 0-1.98.914-1.98 2.323v4.953h-2.363v-9.41h2.23ZM78.551 32.983c0-2.915 1.924-4.972 4.648-4.972 1.257 0 2.286.553 2.934 1.562h.037V23.84h2.362v13.81h-2.228v-1.467h-.037c-.61 1.067-1.752 1.696-3.067 1.696-2.724 0-4.648-2.038-4.648-4.895l-.001-.001Zm7.62-.038c0-1.695-1.048-2.82-2.591-2.82-1.543 0-2.61 1.143-2.61 2.82 0 1.677 1.049 2.82 2.61 2.82s2.59-1.124 2.59-2.82ZM90.34 34.963c0-1.81 1.506-2.895 4.02-2.915l1.828-.019v-.304c0-1.106-.704-1.677-1.981-1.677-.838 0-1.581.323-2.095.915l-1.429-1.391c.82-1.01 2.133-1.562 3.752-1.562 2.514 0 4.114 1.371 4.114 3.562v3.733c0 .343.153.495.534.495h.172v1.847H98.15c-.895 0-1.506-.418-1.696-1.105h-.038c-.59.857-1.561 1.333-2.743 1.333-1.981 0-3.333-1.18-3.333-2.915v.003Zm5.848-.82v-.534l-1.561.02c-1.238.018-1.905.457-1.905 1.275 0 .724.571 1.238 1.37 1.238 1.239 0 2.096-.82 2.096-2v.001ZM103.312 28.24v1.275h.038c.476-.971 1.315-1.505 2.4-1.505 1.219 0 2.133.534 2.704 1.6.572-1.028 1.619-1.6 2.953-1.6 2.323 0 3.447 1.296 3.447 3.944v5.696h-2.362v-5.296c0-1.543-.534-2.286-1.638-2.286-1.104 0-1.695.82-1.695 2.362v5.22h-2.363v-5.296c0-1.562-.513-2.286-1.638-2.286-1.124 0-1.695.838-1.695 2.362v5.22h-2.362v-9.41h2.211Z"
      fill="#EC0000"
    />
    <path
      className="ams-logo__text-secondary"
      d="M16.436 8.581c0-3.752 2.629-6.4 6.343-6.4 1.886 0 3.466.61 4.59 1.829L25.732 5.57c-.705-.78-1.715-1.238-2.915-1.238-2.248 0-3.81 1.752-3.81 4.248 0 2.496 1.524 4.324 3.714 4.324 2 0 3.392-1.143 3.392-2.8v-.323h-2.99V7.705h5.505V9.63c0 3.162-2.458 5.39-5.982 5.39s-6.21-2.666-6.21-6.438ZM30.34 8.581c0-3.752 2.63-6.4 6.344-6.4 1.886 0 3.467.61 4.59 1.829L39.638 5.57c-.705-.78-1.715-1.238-2.915-1.238-2.248 0-3.81 1.752-3.81 4.248 0 2.496 1.524 4.324 3.715 4.324 2 0 3.39-1.143 3.39-2.8v-.323h-2.99V7.705h5.506V9.63c0 3.162-2.458 5.39-5.982 5.39s-6.21-2.666-6.21-6.438ZM44.836 2.41h4.61c3.809 0 6.343 2.476 6.343 6.19 0 3.714-2.59 6.19-6.363 6.19h-4.59V2.41Zm4.419 10.229c2.38 0 3.942-1.543 3.942-4.02 0-2.475-1.524-4.057-3.923-4.057H47.35v8.077h1.905Z"
      fill="#000"
    />
  </svg>
))

LogoGgdAmsterdam.displayName = 'LogoGgdAmsterdam'

export default LogoGgdAmsterdam

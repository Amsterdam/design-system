import { forwardRef } from 'react'
import type { ForwardedRef, SVGProps } from 'react'

const LogoAmsterdam = forwardRef((props: SVGProps<SVGSVGElement>, ref: ForwardedRef<SVGSVGElement>) => (
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
      className="ams-logo__text-primary"
      d="M16.435 8.581c0-3.752 2.63-6.4 6.344-6.4 1.886 0 3.466.61 4.59 1.829L25.731 5.57c-.704-.78-1.714-1.238-2.915-1.238-2.248 0-3.81 1.752-3.81 4.248 0 2.496 1.524 4.324 3.715 4.324 2 0 3.391-1.143 3.391-2.8v-.323h-2.99V7.705h5.505V9.63c0 3.162-2.457 5.39-5.981 5.39s-6.21-2.666-6.21-6.438ZM30.225 10.086c0-2.915 1.962-4.934 4.762-4.934s4.743 2 4.743 4.876c0 .229-.037.59-.076.839h-7.048C32.778 12.143 33.863 13 35.254 13c1.029 0 1.924-.381 2.514-1.067l1.428 1.391c-.857 1.106-2.343 1.696-4.057 1.696-2.895 0-4.915-2.038-4.915-4.934h.001Zm2.381-.952h4.743c-.152-1.238-1.105-2.077-2.38-2.077-1.276 0-2.229.839-2.363 2.077ZM43.902 5.382v1.275h.038c.476-.97 1.314-1.505 2.4-1.505 1.219 0 2.132.534 2.704 1.6.571-1.028 1.62-1.6 2.952-1.6 2.324 0 3.448 1.296 3.448 3.943v5.696h-2.362V9.495c0-1.543-.534-2.286-1.638-2.286-1.104 0-1.696.82-1.696 2.362v5.22h-2.362V9.495c0-1.562-.514-2.286-1.638-2.286-1.124 0-1.695.838-1.695 2.362v5.22H41.69V5.38h2.212ZM57.312 10.086c0-2.915 1.963-4.934 4.762-4.934 2.8 0 4.744 2 4.744 4.876 0 .229-.038.59-.077.839h-7.048C59.865 12.143 60.95 13 62.341 13c1.03 0 1.924-.381 2.514-1.067l1.429 1.391c-.857 1.106-2.344 1.696-4.058 1.696-2.895 0-4.915-2.038-4.915-4.934h.001Zm2.381-.952h4.743c-.152-1.238-1.105-2.077-2.38-2.077-1.276 0-2.229.839-2.363 2.077ZM68.189 10.086c0-2.915 1.962-4.934 4.762-4.934s4.743 2 4.743 4.876c0 .229-.038.59-.077.839H70.57C70.74 12.143 71.827 13 73.218 13c1.028 0 1.923-.381 2.513-1.067l1.429 1.391c-.857 1.106-2.343 1.696-4.058 1.696-2.895 0-4.915-2.038-4.915-4.934h.002Zm2.38-.952h4.744c-.153-1.238-1.105-2.077-2.381-2.077-1.276 0-2.228.839-2.362 2.077ZM81.883 5.382v1.275h.038c.438-.933 1.39-1.505 2.495-1.505 2.362 0 3.582 1.353 3.582 3.943v5.696h-2.363V9.552c0-1.6-.571-2.343-1.772-2.343-1.2 0-1.847.838-1.847 2.4v5.18h-2.362V5.382h2.23ZM91.026 11.42V7.342h-1.619V5.381h.858c.78 0 1.085-.305 1.085-1.086V2.83h2.019v2.553h2.285v1.962H93.37v4.077c0 .915.476 1.428 1.352 1.428.267 0 .59-.037.78-.095v1.981c-.285.077-.819.133-1.238.133-2.133 0-3.238-1.18-3.238-3.447l.001-.002ZM96.817 10.086c0-2.915 1.963-4.934 4.762-4.934 2.8 0 4.744 2 4.744 4.876 0 .229-.038.59-.077.839h-7.048c.172 1.276 1.257 2.133 2.648 2.133 1.029 0 1.924-.381 2.514-1.067l1.429 1.391c-.857 1.106-2.344 1.696-4.058 1.696-2.895 0-4.915-2.038-4.915-4.934h.001Zm2.381-.952h4.744c-.153-1.238-1.106-2.077-2.382-2.077-1.275 0-2.228.839-2.362 2.077ZM23.73 25.267l4.952 12.381h-2.647l-1.03-2.724H19.5l-1.028 2.724h-2.553l4.953-12.38h2.858Zm-3.486 7.6h4l-1.982-5.219h-.037l-1.981 5.22ZM32.454 28.24v1.275h.038c.476-.97 1.315-1.505 2.4-1.505 1.22 0 2.133.534 2.704 1.6.572-1.028 1.62-1.6 2.953-1.6 2.323 0 3.447 1.296 3.447 3.944v5.696h-2.362v-5.296c0-1.543-.534-2.286-1.638-2.286-1.104 0-1.695.82-1.695 2.362v5.22h-2.363v-5.296c0-1.562-.514-2.286-1.638-2.286-1.124 0-1.695.838-1.695 2.362v5.22h-2.362v-9.41h2.211ZM48.34 33.706c-1.275-.381-2.513-1.067-2.513-2.78 0-1.715 1.447-2.916 3.6-2.916 1.448 0 2.572.514 3.2 1.466l-1.351 1.353c-.477-.59-1.124-.915-1.829-.915-.8 0-1.296.362-1.296.933 0 .762.8.895 1.963 1.257 1.276.381 2.514 1.067 2.514 2.781 0 1.715-1.524 2.99-3.772 2.99-1.466 0-2.648-.514-3.334-1.486l1.353-1.352c.513.609 1.2.934 1.962.934.915 0 1.466-.381 1.466-1.01 0-.762-.8-.895-1.962-1.258v.003ZM55.122 34.277v-4.076h-1.62v-1.963h.858c.78 0 1.085-.304 1.085-1.085v-1.466h2.019v2.552h2.286v1.963h-2.286v4.076c0 .915.476 1.43 1.352 1.43.267 0 .59-.038.78-.096v1.981c-.285.077-.819.133-1.237.133-2.133 0-3.238-1.18-3.238-3.447v-.002ZM60.911 32.944c0-2.915 1.963-4.934 4.763-4.934s4.743 2 4.743 4.876c0 .228-.038.59-.077.839h-7.048c.172 1.276 1.257 2.133 2.648 2.133 1.03 0 1.924-.381 2.514-1.067l1.429 1.391c-.857 1.105-2.343 1.696-4.058 1.696-2.895 0-4.915-2.038-4.915-4.934h.001Zm2.381-.952h4.744c-.153-1.239-1.106-2.077-2.381-2.077-1.276 0-2.229.838-2.363 2.077ZM74.607 28.24V29.8h.038c.457-1.066 1.296-1.638 2.4-1.638.285 0 .685.038.838.095v2.248c-.267-.076-.78-.132-1.162-.132-1.2 0-1.98.914-1.98 2.323v4.953h-2.363v-9.41h2.23ZM78.551 32.983c0-2.915 1.924-4.972 4.648-4.972 1.257 0 2.286.553 2.934 1.562h.037V23.84h2.362v13.81h-2.228v-1.467h-.037c-.61 1.067-1.752 1.696-3.067 1.696-2.724 0-4.648-2.038-4.648-4.895l-.001-.001Zm7.62-.038c0-1.695-1.048-2.82-2.591-2.82-1.543 0-2.61 1.143-2.61 2.82 0 1.677 1.049 2.82 2.61 2.82s2.59-1.124 2.59-2.82ZM90.34 34.963c0-1.81 1.506-2.895 4.02-2.915l1.828-.019v-.304c0-1.106-.704-1.677-1.981-1.677-.838 0-1.581.323-2.095.915l-1.429-1.391c.82-1.01 2.133-1.562 3.752-1.562 2.514 0 4.114 1.371 4.114 3.562v3.733c0 .343.153.495.534.495h.172v1.847H98.15c-.895 0-1.506-.418-1.696-1.105h-.038c-.59.857-1.561 1.333-2.743 1.333-1.981 0-3.333-1.18-3.333-2.914v.002Zm5.848-.82v-.534l-1.561.02c-1.238.018-1.905.457-1.905 1.275 0 .724.571 1.238 1.37 1.238 1.239 0 2.096-.82 2.096-2v.001ZM103.312 28.24v1.275h.038c.476-.97 1.315-1.505 2.4-1.505 1.219 0 2.133.534 2.704 1.6.572-1.028 1.619-1.6 2.953-1.6 2.323 0 3.447 1.296 3.447 3.944v5.696h-2.362v-5.296c0-1.543-.534-2.286-1.638-2.286-1.104 0-1.695.82-1.695 2.362v5.22h-2.363v-5.296c0-1.562-.513-2.286-1.638-2.286-1.124 0-1.695.838-1.695 2.362v5.22h-2.362v-9.41h2.211Z"
      fill="#EC0000"
    />
    <path
      className="ams-logo__emblem"
      d="m0 37.648 3.527-3.527L0 30.593l2.352-2.351 3.527 3.527 3.528-3.527 2.351 2.351-3.527 3.528 3.527 3.527L9.407 40l-3.528-3.527L2.352 40 0 37.648ZM0 23.54l3.527-3.528L0 16.485l2.352-2.352 3.527 3.528 3.528-3.528 2.351 2.352-3.527 3.527 3.527 3.528-2.351 2.351-3.528-3.527-3.527 3.527L0 23.54ZM0 9.407l3.527-3.528L0 2.352 2.352 0l3.527 3.527L9.407 0l2.351 2.352-3.527 3.527 3.527 3.528-2.351 2.351-3.528-3.527-3.526 3.527L0 9.407Z"
      fill="#EC0000"
    />
  </svg>
))

LogoAmsterdam.displayName = 'LogoAmsterdam'

export default LogoAmsterdam

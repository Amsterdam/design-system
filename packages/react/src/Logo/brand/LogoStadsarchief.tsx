import { forwardRef } from 'react'
import type { ForwardedRef, SVGProps } from 'react'

const LogoStadsarchief = forwardRef((props: SVGProps<SVGSVGElement>, ref: ForwardedRef<SVGSVGElement>) => (
  <svg
    className="ams-logo"
    aria-hidden="true"
    focusable="false"
    ref={ref}
    viewBox="0 0 98 40"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      className="ams-logo__emblem"
      fill="#EC0000"
      d="m0 37.648 3.527-3.527L0 30.593l2.352-2.351 3.527 3.527 3.528-3.527 2.351 2.351-3.527 3.528 3.527 3.527L9.407 40l-3.528-3.527L2.352 40 0 37.648ZM0 9.407l3.527-3.528L0 2.352 2.352 0l3.527 3.527L9.407 0l2.351 2.352-3.527 3.527 3.527 3.528-2.351 2.351-3.528-3.527-3.526 3.527L0 9.407ZM0 23.54l3.527-3.528L0 16.485l2.352-2.352 3.527 3.528 3.528-3.528 2.351 2.352-3.527 3.527 3.527 3.528-2.351 2.351-3.528-3.527-3.527 3.527L0 23.54Z"
    />
    <path
      className="ams-logo__text-primary"
      fill="#EC0000"
      d="M20.937 15.334h2.17l3.76 9.4h-2.011l-.78-2.068h-4.18l-.782 2.068h-1.937l3.76-9.4Zm-.477 5.77h3.037l-1.504-3.962h-.03l-1.503 3.963ZM28.052 17.59h1.678v.969h.03c.36-.737.997-1.143 1.822-1.143.925 0 1.62.405 2.054 1.215.434-.781 1.228-1.215 2.24-1.215 1.766 0 2.618.983 2.618 2.994v4.324h-1.793v-4.02c0-1.17-.404-1.735-1.244-1.735s-1.287.622-1.287 1.793v3.962h-1.794v-4.02c0-1.186-.39-1.735-1.243-1.735-.854 0-1.288.636-1.288 1.793v3.962h-1.793V17.59ZM41.791 21.74c-.969-.288-1.91-.81-1.91-2.111 0-1.302 1.1-2.213 2.734-2.213 1.1 0 1.952.39 2.43 1.114l-1.027 1.026c-.362-.448-.853-.694-1.388-.694-.608 0-.983.276-.983.71 0 .578.608.679 1.49.954.968.29 1.909.81 1.909 2.112 0 1.301-1.157 2.27-2.863 2.27-1.114 0-2.01-.39-2.532-1.127l1.027-1.027c.39.464.911.71 1.49.71.693 0 1.113-.29 1.113-.767 0-.579-.608-.68-1.49-.955v-.001ZM46.94 22.175V19.08h-1.23v-1.49h.652c.592 0 .824-.232.824-.824v-1.114h1.533v1.938h1.736v1.49h-1.736v3.095c0 .693.361 1.085 1.027 1.085.202 0 .448-.03.592-.073v1.504a4.362 4.362 0 0 1-.94.101c-1.62 0-2.46-.897-2.46-2.617h.002ZM51.337 21.162c0-2.213 1.49-3.746 3.615-3.746 2.126 0 3.602 1.52 3.602 3.703 0 .174-.03.448-.058.636h-5.351c.13.969.955 1.62 2.01 1.62.781 0 1.46-.29 1.91-.81l1.084 1.056c-.651.838-1.779 1.287-3.08 1.287-2.2 0-3.731-1.547-3.731-3.746h-.002Zm1.808-.723h3.601c-.115-.94-.838-1.577-1.808-1.577-.97 0-1.692.637-1.793 1.577ZM60.042 17.59h1.692v1.186h.03c.346-.81.983-1.244 1.822-1.244.218 0 .521.03.636.072v1.706a3.906 3.906 0 0 0-.882-.1c-.91 0-1.504.693-1.504 1.764v3.76h-1.793V17.59ZM64.729 21.192c0-2.213 1.46-3.775 3.529-3.775.954 0 1.735.42 2.227 1.187h.029V14.25h1.793v10.486h-1.692v-1.114h-.03c-.462.81-1.33 1.288-2.327 1.288-2.069 0-3.529-1.548-3.529-3.717v-.002Zm5.785-.03c0-1.287-.796-2.14-1.967-2.14s-1.981.868-1.981 2.14c0 1.273.796 2.14 1.98 2.14 1.186 0 1.968-.853 1.968-2.14ZM73.68 22.695c0-1.374 1.143-2.198 3.052-2.212l1.388-.015v-.231c0-.838-.535-1.272-1.504-1.272-.636 0-1.2.245-1.59.693l-1.084-1.056c.622-.766 1.62-1.186 2.849-1.186 1.908 0 3.124 1.042 3.124 2.704v2.835c0 .26.115.377.404.377h.13v1.402h-.838c-.68 0-1.143-.318-1.287-.838h-.03c-.448.651-1.186 1.012-2.082 1.012-1.504 0-2.53-.897-2.53-2.213h-.002Zm4.44-.622v-.404l-1.185.014c-.94.014-1.446.347-1.446.969 0 .55.434.94 1.042.94.94 0 1.59-.621 1.59-1.518ZM81.851 17.59h1.678v.969h.03c.362-.737.998-1.143 1.822-1.143.925 0 1.62.405 2.054 1.215.434-.781 1.229-1.215 2.241-1.215 1.765 0 2.618.983 2.618 2.994v4.324H90.5v-4.02c0-1.17-.405-1.735-1.245-1.735-.84 0-1.287.622-1.287 1.793v3.962h-1.793v-4.02c0-1.186-.39-1.735-1.244-1.735s-1.288.636-1.288 1.793v3.962h-1.793V17.59ZM17.575 5.857c0-2.85 1.996-4.86 4.817-4.86 1.432 0 2.632.463 3.485 1.389l-1.244 1.186c-.535-.593-1.302-.94-2.213-.94-1.706 0-2.893 1.33-2.893 3.225 0 1.894 1.157 3.283 2.821 3.283 1.52 0 2.574-.868 2.574-2.126v-.246h-2.27V5.191h4.18v1.46c0 2.402-1.867 4.094-4.542 4.094s-4.715-2.025-4.715-4.888ZM28.047 7c0-2.213 1.49-3.747 3.616-3.747 2.126 0 3.601 1.52 3.601 3.703 0 .174-.03.448-.057.636h-5.351c.13.97.954 1.62 2.01 1.62.78 0 1.46-.289 1.91-.81l1.085 1.056c-.651.839-1.779 1.288-3.08 1.288-2.2 0-3.732-1.548-3.732-3.746h-.002Zm1.809-.724h3.601c-.115-.94-.838-1.576-1.808-1.576-.97 0-1.692.636-1.793 1.576ZM36.753 3.426h1.678v.97h.03c.361-.738.997-1.144 1.822-1.144.925 0 1.62.405 2.054 1.215.434-.78 1.23-1.215 2.24-1.215 1.766 0 2.618.983 2.618 2.994v4.324h-1.793V6.55c0-1.17-.404-1.735-1.244-1.735s-1.287.622-1.287 1.793v3.962h-1.794V6.55c0-1.186-.39-1.735-1.243-1.735-.854 0-1.288.636-1.288 1.793v3.962h-1.793V3.426ZM48.612 7c0-2.213 1.49-3.747 3.616-3.747 2.126 0 3.601 1.52 3.601 3.703 0 .174-.03.448-.057.636H50.42c.131.97.955 1.62 2.011 1.62.78 0 1.46-.289 1.91-.81l1.084 1.056c-.652.839-1.78 1.288-3.08 1.288-2.2 0-3.732-1.548-3.732-3.746Zm1.808-.724h3.602c-.115-.94-.838-1.576-1.807-1.576s-1.692.636-1.793 1.576h-.002ZM56.87 7c0-2.213 1.49-3.747 3.616-3.747 2.125 0 3.601 1.52 3.601 3.703 0 .174-.03.448-.058.636h-5.35c.13.97.954 1.62 2.01 1.62.78 0 1.46-.289 1.91-.81l1.084 1.056c-.652.839-1.78 1.288-3.081 1.288-2.199 0-3.731-1.548-3.731-3.746h-.001Zm1.808-.724h3.602c-.115-.94-.839-1.576-1.809-1.576s-1.692.636-1.793 1.576ZM65.577 3.426h1.692v.97h.03c.332-.71 1.055-1.144 1.893-1.144 1.794 0 2.719 1.027 2.719 2.994v4.324h-1.793V6.594c0-1.215-.434-1.78-1.345-1.78-.912 0-1.403.637-1.403 1.823v3.935h-1.793V3.426ZM74.21 8.012V4.917h-1.23v-1.49h.652c.593 0 .825-.231.825-.824V1.49h1.533v1.937h1.735v1.49H75.99v3.095c0 .694.36 1.085 1.026 1.085.203 0 .448-.03.593-.073v1.504a4.356 4.356 0 0 1-.94.101c-1.621 0-2.46-.897-2.46-2.617l.002.001ZM78.607 7c0-2.213 1.49-3.747 3.616-3.747 2.126 0 3.601 1.52 3.601 3.703 0 .174-.03.448-.057.636h-5.352c.131.97.955 1.62 2.011 1.62.78 0 1.46-.289 1.91-.81l1.084 1.056c-.652.839-1.78 1.288-3.08 1.288-2.2 0-3.732-1.548-3.732-3.746Zm1.808-.724h3.602c-.115-.94-.838-1.576-1.808-1.576-.97 0-1.692.636-1.794 1.576Z"
    />
    <path
      className="ams-logo__text-secondary"
      fill="#000"
      d="m17.335 37.353 1.302-1.084a2.07 2.07 0 0 0 1.779.983c.868 0 1.46-.463 1.46-1.143 0-.766-.636-1.042-1.866-1.49-1.143-.42-2.343-1.012-2.343-2.747 0-1.62 1.316-2.734 3.24-2.734 1.3 0 2.327.52 2.906 1.446L22.51 31.67c-.39-.578-.954-.897-1.62-.897-.78 0-1.302.42-1.302 1.042 0 .767.637 1.042 1.866 1.49 1.143.42 2.344 1.012 2.344 2.748 0 1.735-1.375 2.834-3.4 2.834-1.374 0-2.458-.549-3.066-1.533h.002ZM25.738 36.153v-3.095h-1.23v-1.49h.65c.593 0 .824-.231.824-.824v-1.113h1.534v1.937h1.735v1.49h-1.735v3.095c0 .693.362 1.085 1.026 1.085.202 0 .448-.03.593-.073v1.504a4.37 4.37 0 0 1-.941.101c-1.62 0-2.459-.897-2.459-2.617h.003ZM30.134 36.674c0-1.375 1.143-2.2 3.051-2.213l1.389-.014v-.232c0-.838-.535-1.272-1.504-1.272-.636 0-1.2.245-1.59.694l-1.085-1.056c.622-.767 1.62-1.187 2.85-1.187 1.909 0 3.123 1.042 3.123 2.705v2.835c0 .26.115.376.405.376h.13v1.402h-.838c-.68 0-1.143-.318-1.288-.838h-.029c-.448.651-1.186 1.012-2.082 1.012-1.504 0-2.53-.897-2.53-2.212h-.002Zm4.44-.622v-.405l-1.186.014c-.941.014-1.447.347-1.447.97 0 .548.434.94 1.042.94.94 0 1.591-.622 1.591-1.52ZM37.813 35.17c0-2.213 1.46-3.775 3.529-3.775.955 0 1.735.42 2.227 1.187h.03v-4.353h1.792v10.486H43.7V37.6h-.029c-.463.81-1.331 1.288-2.328 1.288-2.068 0-3.529-1.547-3.529-3.717v-.002Zm5.785-.03c0-1.287-.796-2.14-1.967-2.14-1.17 0-1.981.868-1.981 2.14 0 1.273.796 2.14 1.981 2.14s1.967-.853 1.967-2.14ZM48.763 35.719c-.97-.29-1.91-.81-1.91-2.112 0-1.301 1.1-2.213 2.734-2.213 1.1 0 1.952.39 2.429 1.114l-1.026 1.026c-.363-.448-.854-.694-1.39-.694-.607 0-.982.276-.982.71 0 .578.608.68 1.49.954.969.29 1.91.81 1.91 2.112s-1.158 2.27-2.864 2.27c-1.113 0-2.01-.39-2.532-1.127l1.027-1.027c.39.464.911.71 1.49.71.694 0 1.113-.29 1.113-.767 0-.579-.608-.68-1.49-.955v-.001ZM52.97 36.674c0-1.375 1.144-2.2 3.052-2.213l1.389-.014v-.232c0-.838-.535-1.272-1.504-1.272-.636 0-1.2.245-1.591.694l-1.084-1.056c.622-.767 1.62-1.187 2.849-1.187 1.91 0 3.124 1.042 3.124 2.705v2.835c0 .26.115.376.404.376h.13v1.402h-.837c-.68 0-1.143-.318-1.288-.838h-.03c-.447.651-1.186 1.012-2.082 1.012-1.504 0-2.53-.897-2.53-2.212h-.001Zm4.44-.622v-.405l-1.186.014c-.94.014-1.446.347-1.446.97 0 .548.434.94 1.042.94.94 0 1.59-.622 1.59-1.52ZM61.142 31.568h1.691v1.187h.03c.347-.81.983-1.244 1.822-1.244.218 0 .521.029.636.073v1.706a3.907 3.907 0 0 0-.881-.102c-.912 0-1.504.694-1.504 1.765v3.76h-1.793V31.57h-.002ZM65.827 35.14c0-2.227 1.49-3.746 3.689-3.746 1.085 0 2.038.405 2.646 1.128l-1.2 1.127c-.362-.404-.868-.622-1.446-.622-1.1 0-1.851.868-1.851 2.112 0 1.244.752 2.112 1.85 2.112.58 0 1.086-.218 1.476-.636l1.187 1.127c-.636.738-1.577 1.143-2.647 1.143-2.199 0-3.703-1.519-3.703-3.746v.001ZM73.492 28.228h1.793v4.15h.03c.42-.636 1.041-.983 1.793-.983 1.793 0 2.718 1.027 2.718 2.994v4.325h-1.793v-3.978c0-1.215-.434-1.78-1.345-1.78s-1.403.637-1.403 1.823v3.935h-1.793V28.228ZM82.56 30.657c-.622 0-1.07-.434-1.07-1.042 0-.608.448-1.042 1.07-1.042.622 0 1.07.434 1.07 1.042 0 .608-.448 1.042-1.07 1.042Zm-.897.911h1.793v7.144h-1.793v-7.144ZM84.947 35.14c0-2.212 1.49-3.746 3.616-3.746 2.126 0 3.601 1.52 3.601 3.703 0 .174-.03.448-.058.636h-5.35c.13.969.954 1.62 2.01 1.62.78 0 1.46-.289 1.91-.81L91.76 37.6c-.652.838-1.78 1.288-3.081 1.288-2.199 0-3.73-1.548-3.73-3.747h-.002Zm1.808-.723h3.602c-.115-.94-.838-1.577-1.808-1.577-.97 0-1.693.637-1.794 1.577ZM92.886 33.058v-1.49h1.215v-.925c0-1.634.969-2.59 2.632-2.59.203 0 .506.03.666.058v1.548a2.82 2.82 0 0 0-.622-.072c-.565 0-.882.376-.882 1.056v.925h1.736v1.49h-1.736v5.654h-1.793v-5.654h-1.216Z"
    />
  </svg>
))

LogoStadsarchief.displayName = 'LogoStadsarchief'

export default LogoStadsarchief

import { forwardRef } from 'react'
import type { ForwardedRef, SVGProps } from 'react'

const LogoMuseumWeesp = forwardRef((props: SVGProps<SVGSVGElement>, ref: ForwardedRef<SVGSVGElement>) => (
  <svg
    className="amsterdam-logo"
    aria-hidden="true"
    focusable="false"
    ref={ref}
    viewBox="0 0 121 42"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      className="amsterdam-logo__text-secondary"
      d="M18.085 30.527H20.669L23.051 35.26H23.08L25.46 30.527H28.045V39.964H26.187V32.69H26.157L23.82 37.336H22.31L19.973 32.69H19.943V39.964H18.085V30.527ZM29.976 37.133V32.792H31.776V36.799C31.776 38.004 32.197 38.57 33.068 38.57C33.954 38.57 34.448 37.917 34.448 36.755V32.792H36.248V39.964H34.55V38.991H34.521C34.173 39.688 33.418 40.138 32.605 40.138C30.848 40.138 29.976 39.137 29.976 37.133ZM39.63 36.959C38.658 36.669 37.714 36.146 37.714 34.839C37.714 33.518 38.818 32.618 40.458 32.618C41.562 32.618 42.418 33.009 42.898 33.735L41.867 34.766C41.504 34.316 41.01 34.069 40.473 34.069C39.863 34.069 39.486 34.345 39.486 34.781C39.486 35.361 40.096 35.463 40.981 35.739C41.954 36.029 42.898 36.552 42.898 37.859C42.898 39.209 41.736 40.139 40.023 40.139C38.905 40.139 38.005 39.746 37.482 39.006L38.512 37.975C38.6925 38.1976 38.9205 38.3771 39.1794 38.5001C39.4383 38.6231 39.7214 38.6866 40.008 38.686C40.705 38.686 41.126 38.396 41.126 37.917C41.126 37.337 40.515 37.235 39.63 36.959ZM45.7 35.652H49.315C49.199 34.708 48.473 34.069 47.5 34.069C46.527 34.069 45.801 34.709 45.7 35.652ZM43.885 36.378C43.885 34.157 45.38 32.618 47.515 32.618C49.649 32.618 51.13 34.142 51.13 36.334C51.13 36.509 51.1 36.784 51.072 36.974H45.699C45.83 37.946 46.658 38.599 47.718 38.599C48.502 38.599 49.184 38.309 49.634 37.786L50.724 38.846C50.07 39.688 48.937 40.138 47.631 40.138C45.424 40.138 43.885 38.585 43.885 36.378ZM52.523 37.133V32.792H54.323V36.799C54.323 38.004 54.745 38.57 55.616 38.57C56.502 38.57 56.996 37.917 56.996 36.755V32.792H58.796V39.964H57.096V38.991H57.068C56.72 39.688 55.964 40.138 55.151 40.138C53.395 40.138 52.523 39.137 52.523 37.133ZM60.741 32.792H62.425V33.765H62.455C62.817 33.024 63.456 32.618 64.284 32.618C65.213 32.618 65.91 33.024 66.345 33.838C66.781 33.053 67.58 32.618 68.595 32.618C70.367 32.618 71.224 33.605 71.224 35.623V39.964H69.424V35.928C69.424 34.752 69.017 34.186 68.174 34.186C67.333 34.186 66.883 34.81 66.883 35.986V39.964H65.083V35.928C65.083 34.738 64.69 34.186 63.833 34.186C63.006 34.186 62.541 34.824 62.541 35.986V39.964H60.741V32.792ZM84.683 39.964L82.853 32.908H82.824L80.994 39.964H78.774L76 30.527H78.033L79.891 37.67H79.921L81.793 30.527H83.884L85.757 37.67H85.787L87.645 30.527H89.677L86.904 39.964H84.683ZM91.71 35.652H95.325C95.209 34.708 94.483 34.069 93.51 34.069C92.537 34.069 91.812 34.709 91.71 35.652ZM89.895 36.378C89.895 34.157 91.39 32.618 93.525 32.618C95.659 32.618 97.14 34.142 97.14 36.334C97.14 36.509 97.11 36.784 97.082 36.974H91.71C91.84 37.946 92.668 38.599 93.728 38.599C94.512 38.599 95.194 38.309 95.645 37.786L96.733 38.846C96.08 39.688 94.948 40.138 93.641 40.138C91.434 40.138 89.895 38.585 89.895 36.378ZM100 35.652H103.616C103.499 34.708 102.773 34.069 101.801 34.069C100.828 34.069 100.1 34.709 100 35.652ZM98.185 36.378C98.185 34.157 99.681 32.618 101.815 32.618C103.949 32.618 105.43 34.142 105.43 36.334C105.43 36.509 105.401 36.784 105.372 36.974H100C100.13 37.946 100.958 38.599 102.018 38.599C102.802 38.599 103.485 38.309 103.935 37.786L105.024 38.846C104.37 39.688 103.238 40.138 101.931 40.138C99.724 40.138 98.185 38.585 98.185 36.378ZM108.363 36.959C107.39 36.669 106.446 36.146 106.446 34.839C106.446 33.518 107.55 32.618 109.191 32.618C110.294 32.618 111.151 33.009 111.63 33.735L110.599 34.766C110.236 34.316 109.742 34.069 109.205 34.069C108.595 34.069 108.218 34.345 108.218 34.781C108.218 35.361 108.828 35.463 109.713 35.739C110.686 36.029 111.63 36.552 111.63 37.859C111.63 39.209 110.468 40.139 108.755 40.139C107.637 40.139 106.737 39.746 106.215 39.006L107.245 37.975C107.426 38.1976 107.654 38.3771 107.912 38.5001C108.171 38.6231 108.454 38.6866 108.741 38.686C109.437 38.686 109.859 38.396 109.859 37.917C109.859 37.337 109.249 37.235 108.363 36.959ZM118.83 36.378C118.83 35.086 118.033 34.229 116.857 34.229C115.68 34.229 114.867 35.1 114.867 36.378C114.867 37.656 115.68 38.527 116.857 38.527C118.033 38.527 118.831 37.67 118.831 36.377L118.83 36.378ZM113.067 32.792H114.78V33.91H114.81C115.245 33.097 116.116 32.618 117.162 32.618C119.209 32.618 120.675 34.171 120.675 36.348C120.675 38.556 119.209 40.138 117.162 40.138C116.189 40.138 115.39 39.718 114.896 38.948H114.867V42.65H113.067V32.792Z"
      fill="#000"
    />
    <path
      className="amsterdam-logo__text-primary"
      d="M20.539 22.287H23.588L22.078 18.309H22.048L20.539 22.287ZM21.018 16.494H23.196L26.971 25.931H24.953L24.169 23.855H19.973L19.189 25.931H17.243L21.018 16.494ZM28.161 18.759H29.845V19.732H29.875C30.237 18.992 30.876 18.584 31.704 18.584C32.633 18.584 33.33 18.991 33.765 19.804C34.201 19.02 35 18.584 36.015 18.584C37.787 18.584 38.644 19.572 38.644 21.59V25.931H36.844V21.895C36.844 20.719 36.437 20.152 35.594 20.152C34.753 20.152 34.303 20.777 34.303 21.952V25.932H32.503V21.895C32.503 20.705 32.11 20.152 31.253 20.152C30.426 20.152 29.961 20.792 29.961 21.952V25.932H28.161V18.759ZM41.954 22.926C40.981 22.636 40.037 22.113 40.037 20.806C40.037 19.485 41.141 18.584 42.781 18.584C43.885 18.584 44.741 18.977 45.221 19.702L44.19 20.733C43.827 20.283 43.333 20.036 42.796 20.036C42.186 20.036 41.809 20.312 41.809 20.748C41.809 21.328 42.419 21.43 43.304 21.706C44.277 21.996 45.221 22.519 45.221 23.826C45.221 25.176 44.059 26.106 42.346 26.106C41.228 26.106 40.328 25.713 39.806 24.973L40.836 23.942C41.0164 24.1645 41.2443 24.3439 41.5029 24.4669C41.7616 24.5899 42.0446 24.6535 42.331 24.653C43.028 24.653 43.449 24.363 43.449 23.884C43.449 23.304 42.839 23.202 41.954 22.926ZM47.122 23.361V20.254H45.888V18.76H46.542C47.137 18.76 47.369 18.527 47.369 17.932V16.814H48.909V18.76H50.651V20.255H48.908V23.362C48.908 24.059 49.271 24.452 49.939 24.452C50.142 24.452 50.389 24.422 50.534 24.379V25.889C50.2243 25.9569 49.9081 25.9907 49.591 25.99C47.965 25.99 47.122 25.089 47.122 23.361ZM53.351 21.619H56.966C56.85 20.675 56.124 20.036 55.151 20.036C54.179 20.036 53.453 20.676 53.351 21.619ZM51.536 22.345C51.536 20.124 53.032 18.585 55.166 18.585C57.3 18.585 58.781 20.109 58.781 22.301C58.781 22.476 58.752 22.751 58.723 22.941H53.351C53.481 23.913 54.309 24.566 55.369 24.566C56.153 24.566 56.836 24.276 57.286 23.753L58.375 24.813C57.721 25.655 56.589 26.105 55.282 26.105C53.075 26.105 51.536 24.552 51.536 22.345ZM60.277 18.759H61.975V19.949H62.005C62.353 19.136 62.992 18.701 63.834 18.701C64.051 18.701 64.356 18.73 64.472 18.773V20.487C64.1819 20.4194 63.8849 20.3852 63.587 20.385C62.672 20.385 62.077 21.082 62.077 22.156V25.931H60.277V18.759ZM70.788 22.345C70.788 21.053 69.99 20.196 68.814 20.196C67.623 20.196 66.824 21.067 66.824 22.346C66.824 23.623 67.623 24.494 68.814 24.494C69.99 24.494 70.788 23.637 70.788 22.345ZM64.981 22.374C64.981 20.152 66.447 18.584 68.523 18.584C69.481 18.584 70.265 19.006 70.759 19.775H70.789V15.405H72.589V25.93H70.889V24.812H70.861C70.396 25.625 69.525 26.104 68.523 26.104C66.447 26.104 64.981 24.552 64.981 22.374ZM78.425 23.26V22.853L77.235 22.868C76.291 22.882 75.783 23.216 75.783 23.841C75.783 24.392 76.218 24.784 76.828 24.784C77.771 24.784 78.425 24.16 78.425 23.26ZM73.968 23.884C73.968 22.504 75.115 21.677 77.031 21.663L78.425 21.648V21.416C78.425 20.574 77.888 20.138 76.915 20.138C76.276 20.138 75.71 20.385 75.318 20.835L74.229 19.775C74.853 19.005 75.855 18.585 77.089 18.585C79.006 18.585 80.225 19.63 80.225 21.3V24.145C80.225 24.407 80.341 24.523 80.632 24.523H80.762V25.931H79.92C79.238 25.931 78.773 25.611 78.628 25.089H78.6C78.15 25.743 77.41 26.105 76.51 26.105C75 26.105 73.969 25.205 73.969 23.885L73.968 23.884ZM82.17 18.759H83.855V19.732H83.884C84.247 18.992 84.886 18.584 85.714 18.584C86.642 18.584 87.339 18.991 87.774 19.804C88.21 19.02 89.009 18.584 90.025 18.584C91.797 18.584 92.653 19.572 92.653 21.59V25.931H90.853V21.895C90.853 20.719 90.446 20.152 89.604 20.152C88.762 20.152 88.312 20.777 88.312 21.952V25.932H86.512V21.895C86.512 20.705 86.12 20.152 85.263 20.152C84.436 20.152 83.971 20.792 83.971 21.952V25.932H82.171L82.17 18.759ZM17.644 6.97998C17.644 4.11998 19.647 2.09998 22.479 2.09998C23.916 2.09998 25.121 2.56498 25.978 3.49398L24.729 4.68398C24.192 4.08898 23.422 3.74098 22.508 3.74098C20.795 3.74098 19.604 5.07698 19.604 6.97898C19.604 8.92398 20.765 10.274 22.435 10.274C23.96 10.274 25.02 9.40398 25.02 8.13998V7.89298H22.74V6.31198H26.936V7.77798C26.936 10.188 25.063 11.887 22.377 11.887C19.604 11.887 17.644 9.85398 17.644 6.97998ZM29.97 7.39998H33.586C33.469 6.45698 32.743 5.81798 31.771 5.81798C30.798 5.81798 30.072 6.45698 29.971 7.40098L29.97 7.39998ZM28.155 8.12698C28.155 5.90498 29.651 4.36698 31.785 4.36698C33.92 4.36698 35.4 5.89098 35.4 8.08298C35.4 8.25698 35.372 8.53298 35.342 8.72198H29.97C30.101 9.69498 30.929 10.348 31.988 10.348C32.773 10.348 33.455 10.058 33.905 9.53498L34.994 10.595C34.341 11.437 33.208 11.887 31.901 11.887C29.694 11.887 28.155 10.333 28.155 8.12698ZM36.896 4.53998H38.58V5.51298H38.609C38.972 4.77298 39.611 4.36598 40.439 4.36598C41.368 4.36598 42.065 4.77298 42.5 5.58598C42.936 4.80198 43.734 4.36598 44.75 4.36598C46.522 4.36598 47.379 5.35398 47.379 7.37198V11.712H45.579V7.67698C45.579 6.50198 45.172 5.93498 44.329 5.93498C43.488 5.93498 43.037 6.55998 43.037 7.73498V11.714H41.237V7.67598C41.237 6.48598 40.845 5.93398 39.988 5.93398C39.161 5.93398 38.696 6.57398 38.696 7.73398V11.713H36.896V4.53998ZM50.616 7.39998H54.231C54.115 6.45698 53.389 5.81798 52.417 5.81798C51.444 5.81798 50.717 6.45698 50.617 7.40098L50.616 7.39998ZM48.801 8.12698C48.801 5.90498 50.297 4.36698 52.431 4.36698C54.565 4.36698 56.046 5.89098 56.046 8.08298C56.046 8.25698 56.017 8.53298 55.988 8.72198H50.616C50.746 9.69498 51.574 10.348 52.634 10.348C53.418 10.348 54.101 10.058 54.551 9.53498L55.64 10.595C54.986 11.437 53.854 11.887 52.547 11.887C50.34 11.887 48.801 10.333 48.801 8.12698ZM58.906 7.39998H62.522C62.406 6.45698 61.68 5.81798 60.707 5.81798C59.734 5.81798 59.008 6.45698 58.907 7.40098L58.906 7.39998ZM57.092 8.12698C57.092 5.90498 58.587 4.36698 60.722 4.36698C62.856 4.36698 64.337 5.89098 64.337 8.08298C64.337 8.25698 64.307 8.53298 64.279 8.72198H58.906C59.037 9.69498 59.865 10.348 60.925 10.348C61.708 10.348 62.391 10.058 62.841 9.53498L63.93 10.595C63.277 11.437 62.144 11.887 60.837 11.887C58.631 11.887 57.092 10.333 57.092 8.12698ZM65.832 4.53998H67.531V5.51298H67.56C67.894 4.80198 68.62 4.36598 69.462 4.36598C71.262 4.36598 72.192 5.39698 72.192 7.37198V11.712H70.39V7.71998C70.39 6.49998 69.955 5.93398 69.04 5.93398C68.125 5.93398 67.631 6.57398 67.631 7.76398V11.713H65.831L65.832 4.53998ZM74.5 9.14298V6.03598H73.266V4.53998H73.919C74.514 4.53998 74.747 4.30798 74.747 3.71298V2.59498H76.286V4.53998H78.028V6.03598H76.286V9.14298C76.286 9.83998 76.648 10.232 77.316 10.232C77.52 10.232 77.766 10.202 77.912 10.159V11.669C77.602 11.7372 77.2855 11.7714 76.968 11.771C75.342 11.771 74.5 10.871 74.5 9.14298ZM80.728 7.39998H84.344C84.227 6.45698 83.501 5.81798 82.529 5.81798C81.556 5.81798 80.83 6.45698 80.729 7.40098L80.728 7.39998ZM78.913 8.12698C78.913 5.90498 80.409 4.36698 82.543 4.36698C84.678 4.36698 86.158 5.89098 86.158 8.08298C86.158 8.25698 86.129 8.53298 86.1 8.72198H80.728C80.859 9.69498 81.687 10.348 82.747 10.348C83.531 10.348 84.213 10.058 84.663 9.53498L85.752 10.595C85.099 11.437 83.966 11.887 82.659 11.887C80.452 11.887 78.913 10.333 78.913 8.12698Z"
      fill="#EC0000"
    />
    <path
      className="amsterdam-logo__emblem"
      d="M0 38.3642L3.6 34.9356L0 31.507L2.4 29.2213L6 32.6499L9.6 29.2213L12 31.507L8.4 34.9356L12 38.3642L9.6 40.6499L6 37.2213L2.4 40.6499L0 38.3642Z"
      fill="#EC0000"
    />
    <path
      className="amsterdam-logo__emblem"
      d="M0 9.79276L3.6 6.36419L0 2.93562L2.4 0.649902L6 4.07847L9.6 0.649902L12 2.93562L8.4 6.36419L12 9.79276L9.6 12.0785L6 8.6499L2.4 12.0785L0 9.79276Z"
      fill="#EC0000"
    />
    <path
      className="amsterdam-logo__emblem"
      d="M0 24.0785L3.6 20.6499L0 17.2213L2.4 14.9356L6 18.3642L9.6 14.9356L12 17.2213L8.4 20.6499L12 24.0785L9.6 26.3642L6 22.9356L2.4 26.3642L0 24.0785Z"
      fill="#EC0000"
    />
  </svg>
))

LogoMuseumWeesp.displayName = 'LogoMuseumWeesp'

export default LogoMuseumWeesp

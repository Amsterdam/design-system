import React, { FC, ReactNode } from 'react'

import clsx from 'clsx'

import './styles.css'

type StatusStepProps = {
  children: ReactNode
  status?: 'active' | 'todo' | 'done'
}

export const StatusStep: FC<StatusStepProps> = ({ children, status = 'todo' }) => {
  return <li className={clsx(`ams-status__step`, `ams-status__step--${status}`)}>{children}</li>
}

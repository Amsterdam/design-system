import React, { FC, ReactNode } from 'react'

import './styles.css'

type StatusDescriptionProps = {
  children: ReactNode
}

export const StatusDescription: FC<StatusDescriptionProps> = ({ children }) => {
  return <li className="ams-status__description">{children}</li>
}

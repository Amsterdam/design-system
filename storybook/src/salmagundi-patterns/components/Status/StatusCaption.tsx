import React, { FC, ReactNode } from 'react'

import './styles.css'

type StatusCaptionProps = {
  children: ReactNode
}

export const StatusCaption: FC<StatusCaptionProps> = ({ children }) => {
  return <li className="ams-status__caption">{children}</li>
}

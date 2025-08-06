import clsx from 'clsx'
import React, { FC, HTMLAttributes, ReactNode } from 'react'
import './styles.css'
import StatusContext from './StatusContext'

type StatusProps = {
  children: ReactNode | string
  collapsible?: boolean
} & HTMLAttributes<HTMLElement>

export const Status: FC<StatusProps> = ({ children, className, collapsible = false, ...restProps }) => {
  return (
    <StatusContext.Provider value={{ collapsible: collapsible }}>
      <ol {...restProps} className={clsx('ams-status', collapsible && 'ams-status--collapsible', className)}>
        {children}
      </ol>
    </StatusContext.Provider>
  )
}

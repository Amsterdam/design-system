import React, { FC, HTMLAttributes, ReactNode } from 'react'
import clsx from 'clsx'
import './styles.css'
import StatusContext from './StatusContext'

type StatusProps = {
  children: ReactNode | string
  collapsible?: boolean
} & HTMLAttributes<HTMLElement>

export const Status: FC<StatusProps> = ({ className, children, collapsible = false, ...restProps }) => {
  return (
    <StatusContext.Provider value={{ collapsible: collapsible }}>
      <ol {...restProps} className={clsx('ams-status', collapsible && 'ams-status--collapsible', className)}>
        {children}
      </ol>
    </StatusContext.Provider>
  )
}

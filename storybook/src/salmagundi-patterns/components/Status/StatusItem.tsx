import React, { FC, ReactNode, useContext, useState } from 'react'

import clsx from 'clsx'

import './styles.css'
import { Icon } from '@amsterdam/design-system-react'
import { ChevronDownIcon } from '@amsterdam/design-system-react-icons'

import StatusContext from './StatusContext'

type StatusItemProps = {
  title: string
  status?: 'active' | 'todo' | 'done'
  expanded?: boolean
  children?: ReactNode
}

export const StatusItem: FC<StatusItemProps> = ({ children, title, status = 'todo', expanded = false }) => {
  const { collapsible } = useContext(StatusContext)
  const [isExpanded, setIsExpanded] = useState(expanded)

  return (
    <li className={clsx(`ams-status__item`, `ams-status__item--${status}`, isExpanded && `ams-status__item--expanded`)}>
      {children && collapsible ? (
        <button className="ams-status__button" onClick={() => setIsExpanded(!isExpanded)}>
          {title}
          <Icon svg={ChevronDownIcon} className="ams-status__icon" size="large" />
        </button>
      ) : (
        <div className="ams-status__title">{title}</div>
      )}
      <ol className="ams-status__content">{children}</ol>
    </li>
  )
}

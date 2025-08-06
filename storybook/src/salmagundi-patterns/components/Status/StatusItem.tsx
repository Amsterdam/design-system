import './styles.css'
import { Icon } from '@amsterdam/design-system-react'
import { ChevronDownIcon } from '@amsterdam/design-system-react-icons'
import clsx from 'clsx'
import { FC, ReactNode, useContext, useState } from 'react'
import StatusContext from './StatusContext'

type StatusItemProps = {
  children?: ReactNode
  expanded?: boolean
  status?: 'active' | 'todo' | 'done'
  title: string
}

export const StatusItem: FC<StatusItemProps> = ({ title, children, expanded = false, status = 'todo' }) => {
  const { collapsible } = useContext(StatusContext)
  const [isExpanded, setIsExpanded] = useState(expanded)

  return (
    <li className={clsx(`ams-status__item`, `ams-status__item--${status}`, isExpanded && `ams-status__item--expanded`)}>
      {children && collapsible ? (
        <button className="ams-status__button" onClick={() => setIsExpanded(!isExpanded)}>
          {title}
          <Icon className="ams-status__icon" size="large" svg={ChevronDownIcon} />
        </button>
      ) : (
        <div className="ams-status__title">{title}</div>
      )}
      <ol className="ams-status__content">{children}</ol>
    </li>
  )
}

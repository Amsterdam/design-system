import { FC } from 'react'
import { Badge } from '@amsterdam/design-system-react'
import clsx from 'clsx'
import styles from './styles.module.css'

interface TrajectBadgeProps {
  label: string
  active?: boolean
}

export const TrajectBadge: FC<TrajectBadgeProps> = ({ label, active }) => {
  return <Badge className={clsx(styles.badge, { [styles.active]: active })} label={label} />
}

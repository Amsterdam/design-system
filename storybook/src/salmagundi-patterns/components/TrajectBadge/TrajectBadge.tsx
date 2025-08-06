import { Badge } from '@amsterdam/design-system-react'
import clsx from 'clsx'
import { FC } from 'react'
import styles from './styles.module.css'

type TrajectBadgeProps = {
  active?: boolean
  label: string
}

export const TrajectBadge: FC<TrajectBadgeProps> = ({ active, label }) => {
  return <Badge className={clsx(styles.badge, { [styles.active]: active })} label={label} />
}

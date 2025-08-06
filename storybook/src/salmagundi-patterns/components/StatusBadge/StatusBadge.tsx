import { Badge, BadgeProps } from '@amsterdam/design-system-react'
import { FC } from 'react'
import styles from './styles.module.css'

type Status = {
  color: BadgeProps['color']
  label: string
}

const Statuses: { [key: number]: Status } = {
  0: {
    color: 'yellow',
    label: 'Concept',
  },
  1: {
    color: 'orange',
    label: 'Aanmelding',
  },
  2: {
    color: 'azure',
    label: 'Afgerond',
  },
  3: {
    color: 'red',
    label: 'Verlopen',
  },
  4: {
    color: 'purple',
    label: 'Verslag verstuurd',
  },
  5: {
    color: 'orange',
    label: 'Geen notificatiebrief',
  },
}

type StatusBadgeProps = {
  status: number
}

export const StatusBadge: FC<StatusBadgeProps> = ({ status = 0 }) => {
  return <Badge className={styles.statusbadge} color={Statuses[status].color} label={Statuses[status].label} />
}

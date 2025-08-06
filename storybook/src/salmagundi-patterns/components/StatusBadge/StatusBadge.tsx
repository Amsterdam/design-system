import { FC } from 'react'

import { Badge, BadgeProps } from '@amsterdam/design-system-react'

import styles from './styles.module.css'

interface Status {
  label: string
  color: BadgeProps['color']
}

const Statuses: { [key: number]: Status } = {
  0: {
    label: 'Concept',
    color: 'yellow',
  },
  1: {
    label: 'Aanmelding',
    color: 'orange',
  },
  2: {
    label: 'Afgerond',
    color: 'azure',
  },
  3: {
    label: 'Verlopen',
    color: 'red',
  },
  4: {
    label: 'Verslag verstuurd',
    color: 'purple',
  },
  5: {
    label: 'Geen notificatiebrief',
    color: 'orange',
  },
}

interface StatusBadgeProps {
  status: number
}

export const StatusBadge: FC<StatusBadgeProps> = ({ status = 0 }) => {
  return <Badge color={Statuses[status].color} label={Statuses[status].label} className={styles.statusbadge} />
}

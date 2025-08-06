import { FC, HTMLAttributes } from 'react'
import { Column, Heading, Icon, IconButton, Row } from '@amsterdam/design-system-react'

import styles from './styles.module.css'
import { BuildingsIcon, ExternalLinkIcon } from '@amsterdam/design-system-react-icons'
import { StatusBadge } from '../StatusBadge/StatusBadge'
import { TrajectBadge } from '../TrajectBadge/TrajectBadge'

type PersonHeaderProps = {
  profileUrl?: string
  address?: string
  status?: 1 | 2 | 3 | 4 | 5
  trajectories?: { label: string; active: boolean }[]
} & HTMLAttributes<HTMLElement>

export const PersonHeader: FC<PersonHeaderProps> = ({ profileUrl, address, status, trajectories }) => {
  return (
    <Column gap="small">
      <Row wrap align="between" alignVertical="center">
        <div className={styles.person_name}>
          <Heading level={1}>Bart Bartsen</Heading>
          {profileUrl && <IconButton label="Ga naar profiel" svg={ExternalLinkIcon} onClick={() => window.open(profileUrl, '_top')} />}
        </div>
        {status && <StatusBadge status={status} />}
      </Row>
      {address && (
        <Row wrap>
          <div className={styles.meta}>
            <Icon svg={BuildingsIcon} />
            <span>{address}</span>
          </div>
        </Row>
      )}
      {trajectories && (
        <Row wrap>
          {trajectories.map((traject, index) => (
            <TrajectBadge key={index} label={traject.label} active={traject.active} />
          ))}
        </Row>
      )}
    </Column>
  )
}

import { Column, Heading, Icon, IconButton, Row } from '@amsterdam/design-system-react'
import { BuildingsIcon, LinkExternalIcon } from '@amsterdam/design-system-react-icons'
import { FC, HTMLAttributes } from 'react'
import styles from './styles.module.css'
import { StatusBadge } from '../StatusBadge/StatusBadge'
import { TrajectBadge } from '../TrajectBadge/TrajectBadge'

type PersonHeaderProps = {
  address?: string
  profileUrl?: string
  status?: 1 | 2 | 3 | 4 | 5
  trajectories?: { active: boolean; label: string }[]
} & HTMLAttributes<HTMLElement>

export const PersonHeader: FC<PersonHeaderProps> = ({ address, profileUrl, status, trajectories }) => {
  return (
    <Column gap="small">
      <Row align="between" alignVertical="center" wrap>
        <div className={styles.person_name}>
          <Heading level={1}>Bart Bartsen</Heading>
          {profileUrl && (
            <IconButton
              label="Ga naar profiel"
              onClick={() => window.open(profileUrl, '_top')}
              svg={LinkExternalIcon}
            />
          )}
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
            <TrajectBadge active={traject.active} key={index} label={traject.label} />
          ))}
        </Row>
      )}
    </Column>
  )
}

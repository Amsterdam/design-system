import { ActionGroup } from '@amsterdam/design-system-react'
import React, { FC, ReactNode } from 'react'
import styles from './styles.module.css'

type OverviewFilterProps = {
  actions?: ReactNode
  filters: ReactNode
}

export const OverviewFilter: FC<OverviewFilterProps> = ({ actions, filters }) => {
  return (
    <div className={styles.filter}>
      <div className={styles.filters}>{filters}</div>
      {actions && <ActionGroup>{actions}</ActionGroup>}
    </div>
  )
}

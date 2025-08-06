import React, { FC, ReactNode } from 'react'

import styles from './styles.module.css'
import { ActionGroup } from '@amsterdam/design-system-react'

type OverviewFilterProps = {
  filters: ReactNode
  actions?: ReactNode
}

export const OverviewFilter: FC<OverviewFilterProps> = ({ filters, actions }) => {
  return (
    <div className={styles.filter}>
      <div className={styles.filters}>{filters}</div>
      {actions && <ActionGroup>{actions}</ActionGroup>}
    </div>
  )
}

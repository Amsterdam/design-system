/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { useContext } from 'react'

import type { ProgressListStepProps } from './ProgressListStep'

import { ProgressListContext } from './ProgressListContext'

type AccessibleStatusTextProps = {
  status?: ProgressListStepProps['status']
}

export const AccessibleStatusText = ({ status }: AccessibleStatusTextProps) => {
  const { completedAccessibleText, currentAccessibleText } = useContext(ProgressListContext)

  if (!status) return null

  return (
    <span className="ams-visually-hidden">
      {status === 'completed' && completedAccessibleText && `${completedAccessibleText}: `}
      {status === 'current' && currentAccessibleText && `${currentAccessibleText}: `}
    </span>
  )
}

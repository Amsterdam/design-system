import './status-badge.css'
import { Badge } from '@amsterdam/design-system-react/src'

export const StatusBadge = ({ status = 'beta', statusReason = '' }: { status: 'beta'; statusReason: string }) => {
  return (
    <span className="ams-storybook-status-badge">
      <Badge label={status} color="orange" />
      {statusReason && <span>{statusReason}</span>}
    </span>
  )
}

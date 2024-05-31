import './status-badge.css'
import { Badge } from '@amsterdam/design-system-react/src'

export const StatusBadge = ({
  status = 'beta',
  statusReason = '',
  documentTop = true,
}: {
  status: 'beta'
  statusReason: string
  documentTop: boolean
}) => {
  return (
    <span className={`ams-storybook-status-badge${documentTop ? ` ams-storybook-status-badge--top` : ''}`}>
      <Badge label={status} color="orange" />
      {statusReason && <span>{statusReason}</span>}
    </span>
  )
}

import './status-badge.css'
import { Badge } from '@amsterdam/design-system-react/src'

type StatusBadgeProps = {
  /* Describes the reason for the status or suggests an alternative for a deprecated component. */
  description: string
  /* The status of the component. */
  status: 'beta' | 'deprecated' | string
}

/** Indicates the status of a component. Use this to prepare implementers for API changes. */
export const StatusBadge = ({ description, status = 'beta' }: StatusBadgeProps) => (
  <span className="ams-storybook-status-badge">
    <Badge color={status === 'deprecated' ? 'red' : 'orange'} label={status} />
    <span>{description}</span>
  </span>
)

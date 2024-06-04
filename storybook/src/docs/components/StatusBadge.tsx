import './status-badge.css'
import { Badge } from '@amsterdam/design-system-react/src'

type StatusBadgeProps = {
  /** The status of this component. */
  label?: string
  /* The explanation of what needs to change before transitioning into another status. */
  reason: string
}

/** Indicates the status of a component. Use this to prepare implementers for API changes. */
export const StatusBadge = ({ label = 'beta', reason }: StatusBadgeProps) => (
  <span className="ams-storybook-status-badge">
    <Badge label={label} color="orange" />
    <span>{reason}</span>
  </span>
)

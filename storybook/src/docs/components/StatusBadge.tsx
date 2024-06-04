import './status-badge.css'
import { Badge } from '@amsterdam/design-system-react/src'

type StatusBadgeProps = {
  /* Explains how the component must change to transition into another status. */
  reason: string
}

/** Indicates the status of a component. Use this to prepare implementers for API changes. */
export const StatusBadge = ({ reason }: StatusBadgeProps) => (
  <span className="ams-storybook-status-badge">
    <Badge color="orange" label="beta" />
    <span>{reason}</span>
  </span>
)

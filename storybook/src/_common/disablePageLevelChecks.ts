/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

/**
 * The axe rules that describe the page a story pretends to be, not the component
 * itself. The closed list is the point: a component-level check, such as colour
 * contrast, cannot be disabled through this helper.
 */
type PageLevelRuleId = 'heading-order' | 'label' | 'landmark-unique' | 'select-name'

/**
 * Story parameters that turn off the named page-level axe checks, and only those.
 * For test stories whose matrix of bare component instances breaks a rule that
 * documented usage satisfies — see the Test stories section of the Storybook
 * documentation for which rule fails where, and why.
 */
export const disablePageLevelChecks = (...ids: [PageLevelRuleId, ...PageLevelRuleId[]]) => ({
  a11y: { config: { rules: ids.map((id) => ({ enabled: false, id })) } },
})

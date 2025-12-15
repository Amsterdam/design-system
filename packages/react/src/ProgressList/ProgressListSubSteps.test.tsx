/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { render } from '@testing-library/react'
import { createRef } from 'react'

import { ProgressListSubSteps } from './ProgressListSubSteps'
import '@testing-library/jest-dom'

describe('Progress List Sub Steps', () => {
  it('renders', () => {
    const { container } = render(<ProgressListSubSteps>Content</ProgressListSubSteps>)

    const subSteps = container.querySelector('.ams-progress-list__sub-steps')

    expect(subSteps).toBeInTheDocument()
    expect(subSteps).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    const { container } = render(<ProgressListSubSteps>Content</ProgressListSubSteps>)

    const subSteps = container.querySelector('.ams-progress-list__sub-steps')

    expect(subSteps).toHaveClass('ams-progress-list__sub-steps')
  })

  it('renders an extra class name', () => {
    const { container } = render(<ProgressListSubSteps className="extra">Content</ProgressListSubSteps>)

    const subSteps = container.querySelector('.ams-progress-list__sub-steps')

    expect(subSteps).toHaveClass('ams-progress-list__sub-steps extra')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLOListElement>()

    const { container } = render(<ProgressListSubSteps ref={ref}>Content</ProgressListSubSteps>)

    const subSteps = container.querySelector('.ams-progress-list__sub-steps')

    expect(ref.current).toBe(subSteps)
  })
})

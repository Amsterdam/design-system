/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { render } from '@testing-library/react'
import { createRef } from 'react'

import { ProgressListSubStep } from './ProgressListSubStep'
import '@testing-library/jest-dom'

describe('Progress List Sub Step', () => {
  it('renders', () => {
    const { container } = render(<ProgressListSubStep>Content</ProgressListSubStep>)

    const subStep = container.querySelector('.ams-progress-list__sub-step')

    expect(subStep).toBeInTheDocument()
    expect(subStep).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    const { container } = render(<ProgressListSubStep>Content</ProgressListSubStep>)

    const subStep = container.querySelector('.ams-progress-list__sub-step')

    expect(subStep).toHaveClass('ams-progress-list__sub-step')
  })

  it('renders the marker', () => {
    const { container } = render(<ProgressListSubStep>Content</ProgressListSubStep>)

    const marker = container.querySelector('.ams-progress-list-sub-step__marker')

    expect(marker).toBeInTheDocument()
  })

  it('renders the connector', () => {
    const { container } = render(<ProgressListSubStep>Content</ProgressListSubStep>)

    const connector = container.querySelector('.ams-progress-list-sub-step__connector')

    expect(connector).toBeInTheDocument()
  })

  it('renders an extra class name', () => {
    const { container } = render(<ProgressListSubStep className="extra">Content</ProgressListSubStep>)

    const subStep = container.querySelector('.ams-progress-list__sub-step')

    expect(subStep).toHaveClass('ams-progress-list__sub-step extra')
  })

  it('renders the current status class name', () => {
    const { container } = render(<ProgressListSubStep status="current">Content</ProgressListSubStep>)

    const subStep = container.querySelector('.ams-progress-list__sub-step')

    expect(subStep).toHaveClass('ams-progress-list__sub-step--current')
  })

  it('renders the completed status class name', () => {
    const { container } = render(<ProgressListSubStep status="completed">Content</ProgressListSubStep>)

    const subStep = container.querySelector('.ams-progress-list__sub-step')

    expect(subStep).toHaveClass('ams-progress-list__sub-step--completed')
  })

  it('renders aria-current attribute when status is current', () => {
    const { container } = render(<ProgressListSubStep status="current">Content</ProgressListSubStep>)

    const subStep = container.querySelector('.ams-progress-list__sub-step')

    expect(subStep).toHaveAttribute('aria-current', 'step')
  })

  it('does not render aria-current attribute when status is completed', () => {
    const { container } = render(<ProgressListSubStep status="completed">Content</ProgressListSubStep>)

    const subStep = container.querySelector('.ams-progress-list__sub-step')

    expect(subStep).not.toHaveAttribute('aria-current')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLLIElement>()

    const { container } = render(<ProgressListSubStep ref={ref}>Content</ProgressListSubStep>)

    const subStep = container.querySelector('.ams-progress-list__sub-step')

    expect(ref.current).toBe(subStep)
  })
})

/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */
import { render, screen } from '@testing-library/react'
import { createRef } from 'react'

import { ProgressList } from './ProgressList'
import { ProgressListStep } from './ProgressListStep'
import '@testing-library/jest-dom'

describe('Progress List Step', () => {
  it('renders', () => {
    const { container } = render(
      <ProgressList headingLevel={3}>
        <ProgressListStep heading="Test Step">Content</ProgressListStep>
      </ProgressList>,
    )
    const step = container.querySelector('.ams-progress-list__step')

    expect(step).toBeInTheDocument()
    expect(step).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    const { container } = render(
      <ProgressList headingLevel={3}>
        <ProgressListStep heading="Test Step">Content</ProgressListStep>
      </ProgressList>,
    )
    const step = container.querySelector('.ams-progress-list__step')

    expect(step).toHaveClass('ams-progress-list__step')
  })

  it('renders the marker', () => {
    const { container } = render(
      <ProgressList headingLevel={3}>
        <ProgressListStep heading="Test Step">Content</ProgressListStep>
      </ProgressList>,
    )
    const marker = container.querySelector('.ams-progress-list__marker')

    expect(marker).toBeInTheDocument()
  })

  it('renders the connector', () => {
    const { container } = render(
      <ProgressList headingLevel={3}>
        <ProgressListStep heading="Test Step">Content</ProgressListStep>
      </ProgressList>,
    )
    const connector = container.querySelector('.ams-progress-list__connector')

    expect(connector).toBeInTheDocument()
  })

  it('renders the heading', () => {
    render(
      <ProgressList headingLevel={3}>
        <ProgressListStep heading="My Step Heading">Content</ProgressListStep>
      </ProgressList>,
    )

    const heading = screen.getByRole('heading', { level: 3, name: 'My Step Heading' })
    expect(heading).toBeInTheDocument()
  })

  it('renders an extra class name', () => {
    const { container } = render(
      <ProgressList headingLevel={3}>
        <ProgressListStep className="extra" heading="Test Step">
          Content
        </ProgressListStep>
      </ProgressList>,
    )
    const step = container.querySelector('.ams-progress-list__step')

    expect(step).toHaveClass('ams-progress-list__step extra')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLLIElement>()
    const { container } = render(
      <ProgressList headingLevel={3}>
        <ProgressListStep heading="Test Step" ref={ref}>
          Content
        </ProgressListStep>
      </ProgressList>,
    )
    const step = container.querySelector('.ams-progress-list__step')

    expect(ref.current).toBe(step)
  })
})

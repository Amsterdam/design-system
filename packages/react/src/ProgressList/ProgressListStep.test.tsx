/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */
import { render, screen } from '@testing-library/react'
import { createRef } from 'react'

import { ProgressList } from './ProgressList'
import '@testing-library/jest-dom'

describe('Progress List Step', () => {
  it('renders', () => {
    const { container } = render(
      <ProgressList headingLevel={3}>
        <ProgressList.Step heading="Test Step">Content</ProgressList.Step>
      </ProgressList>,
    )

    const step = container.querySelector('.ams-progress-list__step')

    expect(step).toBeInTheDocument()
    expect(step).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    const { container } = render(
      <ProgressList headingLevel={3}>
        <ProgressList.Step heading="Test Step">Content</ProgressList.Step>
      </ProgressList>,
    )

    const step = container.querySelector('.ams-progress-list__step')

    expect(step).toHaveClass('ams-progress-list__step')
  })

  it('renders the marker', () => {
    const { container } = render(
      <ProgressList headingLevel={3}>
        <ProgressList.Step heading="Test Step">Content</ProgressList.Step>
      </ProgressList>,
    )

    const marker = container.querySelector('.ams-progress-list__marker')

    expect(marker).toBeInTheDocument()
  })

  it('renders the connector', () => {
    const { container } = render(
      <ProgressList headingLevel={3}>
        <ProgressList.Step heading="Test Step">Content</ProgressList.Step>
      </ProgressList>,
    )

    const connector = container.querySelector('.ams-progress-list__connector')

    expect(connector).toBeInTheDocument()
  })

  it('renders the heading', () => {
    render(
      <ProgressList headingLevel={3}>
        <ProgressList.Step heading="My Step Heading">Content</ProgressList.Step>
      </ProgressList>,
    )

    const heading = screen.getByRole('heading', { level: 3, name: 'My Step Heading' })

    expect(heading).toBeInTheDocument()
  })

  it('renders an extra class name', () => {
    const { container } = render(
      <ProgressList headingLevel={3}>
        <ProgressList.Step className="extra" heading="Test Step">
          Content
        </ProgressList.Step>
      </ProgressList>,
    )

    const step = container.querySelector('.ams-progress-list__step')

    expect(step).toHaveClass('ams-progress-list__step extra')
  })

  it('sets aria-current and current modifier when status is current', () => {
    const { container } = render(
      <ProgressList headingLevel={3}>
        <ProgressList.Step heading="Test Step" status="current">
          Content
        </ProgressList.Step>
      </ProgressList>,
    )

    const step = container.querySelector('.ams-progress-list__step')

    expect(step).toHaveAttribute('aria-current', 'step')
    expect(step).toHaveClass('ams-progress-list__step--current')
  })

  it('adds completed modifier and does not set aria-current when status is completed', () => {
    const { container } = render(
      <ProgressList headingLevel={3}>
        <ProgressList.Step heading="Test Step" status="completed">
          Content
        </ProgressList.Step>
      </ProgressList>,
    )

    const step = container.querySelector('.ams-progress-list__step')

    expect(step).toHaveClass('ams-progress-list__step--completed')
    expect(step).not.toHaveAttribute('aria-current')
  })

  it('adds has-substeps modifier when hasSubSteps is true', () => {
    const { container } = render(
      <ProgressList headingLevel={3}>
        <ProgressList.Step hasSubSteps heading="Test Step">
          Content
        </ProgressList.Step>
      </ProgressList>,
    )

    const step = container.querySelector('.ams-progress-list__step')

    expect(step).toHaveClass('ams-progress-list__step--has-substeps')
  })

  it('does not add has-substeps modifier when hasSubSteps is not set', () => {
    const { container } = render(
      <ProgressList headingLevel={3}>
        <ProgressList.Step heading="Test Step">Content</ProgressList.Step>
      </ProgressList>,
    )

    const step = container.querySelector('.ams-progress-list__step')

    expect(step).not.toHaveClass('ams-progress-list__step--has-substeps')
  })

  it('renders children inside the content container', () => {
    const { container, getByText } = render(
      <ProgressList headingLevel={3}>
        <ProgressList.Step heading="Test Step">
          <span>Inner child</span>
        </ProgressList.Step>
      </ProgressList>,
    )

    const content = container.querySelector('.ams-progress-list__content')

    expect(content).toBeInTheDocument()
    expect(content).toContainElement(getByText('Inner child'))
  })

  it('renders the arrow icon only when status is current', () => {
    const { container: currentContainer } = render(
      <ProgressList headingLevel={3}>
        <ProgressList.Step heading="Current" status="current">
          Content
        </ProgressList.Step>
      </ProgressList>,
    )

    const currentMarkerShape = currentContainer.querySelector('.ams-progress-list__marker-shape')

    expect(currentMarkerShape?.querySelector('svg')).toBeInTheDocument()

    const { container: nonCurrentContainer } = render(
      <ProgressList headingLevel={3}>
        <ProgressList.Step heading="Not current">Content</ProgressList.Step>
      </ProgressList>,
    )

    const nonCurrentMarkerShape = nonCurrentContainer.querySelector('.ams-progress-list__marker-shape')

    expect(nonCurrentMarkerShape?.querySelector('svg')).not.toBeInTheDocument()
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLLIElement>()

    const { container } = render(
      <ProgressList headingLevel={3}>
        <ProgressList.Step heading="Test Step" ref={ref}>
          Content
        </ProgressList.Step>
      </ProgressList>,
    )

    const step = container.querySelector('.ams-progress-list__step')

    expect(ref.current).toBe(step)
  })
})

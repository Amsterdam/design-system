/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { render } from '@testing-library/react'
import { createRef } from 'react'

import { ProgressList } from './ProgressList'
import '@testing-library/jest-dom'

describe('Progress List Substep', () => {
  it('renders', () => {
    const { container } = render(<ProgressList.Substep>Content</ProgressList.Substep>)

    const subStep = container.querySelector('.ams-progress-list-substeps__step')

    expect(subStep).toBeInTheDocument()
    expect(subStep).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    const { container } = render(<ProgressList.Substep>Content</ProgressList.Substep>)

    const subStep = container.querySelector('.ams-progress-list-substeps__step')

    expect(subStep).toHaveClass('ams-progress-list-substeps__step')
  })

  it('renders the marker', () => {
    const { container } = render(<ProgressList.Substep>Content</ProgressList.Substep>)

    const marker = container.querySelector('.ams-progress-list-substeps__marker')

    expect(marker).toBeInTheDocument()
  })

  it('renders the connector', () => {
    const { container } = render(<ProgressList.Substep>Content</ProgressList.Substep>)

    const connector = container.querySelector('.ams-progress-list-substeps__connector')

    expect(connector).toBeInTheDocument()
  })

  it('renders an extra class name', () => {
    const { container } = render(<ProgressList.Substep className="extra">Content</ProgressList.Substep>)

    const subStep = container.querySelector('.ams-progress-list-substeps__step')

    expect(subStep).toHaveClass('ams-progress-list-substeps__step extra')
  })

  it('renders the current status class name', () => {
    const { container } = render(<ProgressList.Substep status="current">Content</ProgressList.Substep>)

    const subStep = container.querySelector('.ams-progress-list-substeps__step')

    expect(subStep).toHaveClass('ams-progress-list-substeps__step--current')
  })

  it('renders the completed status class name', () => {
    const { container } = render(<ProgressList.Substep status="completed">Content</ProgressList.Substep>)

    const subStep = container.querySelector('.ams-progress-list-substeps__step')

    expect(subStep).toHaveClass('ams-progress-list-substeps__step--completed')
  })

  it('renders aria-current attribute when status is current', () => {
    const { container } = render(<ProgressList.Substep status="current">Content</ProgressList.Substep>)

    const subStep = container.querySelector('.ams-progress-list-substeps__step')

    expect(subStep).toHaveAttribute('aria-current', 'step')
  })

  it('does not render aria-current attribute when status is completed', () => {
    const { container } = render(<ProgressList.Substep status="completed">Content</ProgressList.Substep>)

    const subStep = container.querySelector('.ams-progress-list-substeps__step')

    expect(subStep).not.toHaveAttribute('aria-current')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLLIElement>()

    const { container } = render(<ProgressList.Substep ref={ref}>Content</ProgressList.Substep>)

    const subStep = container.querySelector('.ams-progress-list-substeps__step')

    expect(ref.current).toBe(subStep)
  })
})

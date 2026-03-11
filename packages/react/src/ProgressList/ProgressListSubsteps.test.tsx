/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { describe, expect, it } from 'vitest'

import { ProgressList } from './ProgressList'

describe('ProgressListSubsteps', () => {
  it('renders', () => {
    render(<ProgressList.Substeps>Content</ProgressList.Substeps>)

    const substeps = screen.getByRole('list')

    expect(substeps).toBeInTheDocument()
    expect(substeps).toBeVisible()
    expect(substeps.tagName).toBe('OL')
  })

  it('renders a design system BEM class name', () => {
    render(<ProgressList.Substeps>Content</ProgressList.Substeps>)

    const substeps = screen.getByRole('list')

    expect(substeps).toHaveClass('ams-progress-list-substeps')
  })

  it('renders an extra class name', () => {
    render(<ProgressList.Substeps className="extra">Content</ProgressList.Substeps>)

    const substeps = screen.getByRole('list')

    expect(substeps).toHaveClass('ams-progress-list-substeps extra')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLOListElement>()

    render(<ProgressList.Substeps ref={ref}>Content</ProgressList.Substeps>)

    const substeps = screen.getByRole('list')

    expect(ref.current).toBe(substeps)
  })

  it('passes additional props', () => {
    const { container } = render(<ProgressList.Substeps aria-hidden="false" data-test="data-test" id="id" />)
    const component = container.querySelector(':only-child')

    expect(component).toHaveAttribute('aria-hidden', 'false')
    expect(component).toHaveAttribute('id', 'id')
    expect(component).toHaveAttribute('data-test', 'data-test')
  })
})

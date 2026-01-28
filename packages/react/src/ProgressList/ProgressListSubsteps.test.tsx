/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { render, screen } from '@testing-library/react'
import { createRef } from 'react'

import { ProgressList } from './ProgressList'
import '@testing-library/jest-dom'

describe('Progress List Substeps', () => {
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
})

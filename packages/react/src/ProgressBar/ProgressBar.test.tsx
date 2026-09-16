/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { render } from '@testing-library/react'
import { createRef } from 'react'
import { describe, expect, it } from 'vitest'

import { ProgressBar } from './ProgressBar'

describe('ProgressBar', () => {
  it('renders', () => {
    const { container } = render(<ProgressBar />)

    const component = container.querySelector(':only-child')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    const { container } = render(<ProgressBar />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-progress-bar')
  })

  it('renders an extra class name', () => {
    const { container } = render(<ProgressBar className="extra" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-progress-bar extra')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLElement>()

    const { container } = render(<ProgressBar ref={ref} />)

    const component = container.querySelector(':only-child')

    expect(ref.current).toBe(component)
  })
})

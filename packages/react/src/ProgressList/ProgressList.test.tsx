/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { render } from '@testing-library/react'
import { createRef } from 'react'

import { ProgressList } from './ProgressList'
import '@testing-library/jest-dom'

describe('ProgressList', () => {
  it('renders', () => {
    const { container } = render(<ProgressList headingLevel={3} />)

    const component = container.querySelector(':only-child')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    const { container } = render(<ProgressList headingLevel={3} />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-progress-list')
  })

  it('renders an extra class name', () => {
    const { container } = render(<ProgressList className="extra" headingLevel={3} />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-progress-list extra')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLOListElement>()

    const { container } = render(<ProgressList headingLevel={3} ref={ref} />)

    const component = container.querySelector(':only-child')

    expect(ref.current).toBe(component)
  })
})

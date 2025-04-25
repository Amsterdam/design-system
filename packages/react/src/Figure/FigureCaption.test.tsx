/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { render } from '@testing-library/react'
import { createRef } from 'react'
import { FigureCaption } from './FigureCaption'
import '@testing-library/jest-dom'

describe('Figure Caption', () => {
  it('renders', () => {
    const { container } = render(<FigureCaption />)

    const component = container.querySelector(':only-child')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    const { container } = render(<FigureCaption />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-figure__caption')
  })

  it('renders the class name for inverse color', () => {
    const { container } = render(<FigureCaption color="inverse">Caption</FigureCaption>)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-figure__caption--inverse')
  })

  it('renders an extra class name', () => {
    const { container } = render(<FigureCaption className="extra" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-figure__caption extra')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLElement>()

    const { container } = render(<FigureCaption ref={ref} />)

    const component = container.querySelector(':only-child')

    expect(ref.current).toBe(component)
  })
})

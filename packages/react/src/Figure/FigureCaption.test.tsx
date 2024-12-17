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

  it('renders the right inverse color class', () => {
    const { container } = render(<FigureCaption inverseColor>Caption</FigureCaption>)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-figure__caption--inverse-color')
  })

  it('renders an additional class name', () => {
    const { container } = render(<FigureCaption className="extra" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-figure__caption extra')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLAnchorElement>()

    const { container } = render(<FigureCaption ref={ref} />)

    const component = container.querySelector(':only-child')

    expect(ref.current).toBe(component)
  })
})

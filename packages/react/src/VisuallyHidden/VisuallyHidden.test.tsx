import { render } from '@testing-library/react'
import { createRef } from 'react'
import { VisuallyHidden } from './VisuallyHidden'
import '@testing-library/jest-dom'

describe('Visually hidden', () => {
  it('renders', () => {
    const { container } = render(<VisuallyHidden />)

    const component = container.querySelector(':only-child')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    const { container } = render(<VisuallyHidden />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-visually-hidden')
  })

  it('renders an additional class name', () => {
    const { container } = render(<VisuallyHidden className="extra" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('extra')

    expect(component).toHaveClass('ams-visually-hidden')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLElement>()

    const { container } = render(<VisuallyHidden ref={ref} />)

    const component = container.querySelector(':only-child')

    expect(ref.current).toBe(component)
  })
})

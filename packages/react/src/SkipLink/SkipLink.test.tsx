import { render } from '@testing-library/react'
import { createRef } from 'react'
import { SkipLink } from './SkipLink'
import '@testing-library/jest-dom'

describe('Skip link', () => {
  it('renders', () => {
    const { container } = render(<SkipLink />)

    const component = container.querySelector(':only-child')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    const { container } = render(<SkipLink />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('amsterdam-skip-link')
  })

  it('renders an additional class name', () => {
    const { container } = render(<SkipLink className="extra" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('extra')

    expect(component).toHaveClass('amsterdam-skip-link')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLElement>()

    const { container } = render(<SkipLink ref={ref} />)

    const component = container.querySelector(':only-child')

    expect(ref.current).toBe(component)
  })
})

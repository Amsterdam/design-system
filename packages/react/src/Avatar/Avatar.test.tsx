import { render } from '@testing-library/react'
import { createRef } from 'react'
import { Avatar } from './Avatar'
import '@testing-library/jest-dom'

describe('Avatar', () => {
  it('renders', () => {
    const { container } = render(<Avatar />)

    const component = container.querySelector(':only-child')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    const { container } = render(<Avatar />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-avatar')
  })

  it('renders an additional class name', () => {
    const { container } = render(<Avatar className="extra" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-avatar extra')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLElement>()

    const { container } = render(<Avatar ref={ref} />)

    const component = container.querySelector(':only-child')

    expect(ref.current).toBe(component)
  })
})

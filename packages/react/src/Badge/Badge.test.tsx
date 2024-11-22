import { render } from '@testing-library/react'
import { createRef } from 'react'
import { Badge, badgeColors } from './Badge'
import '@testing-library/jest-dom'

describe('Badge', () => {
  it('renders', () => {
    const { container } = render(<Badge label="test" />)

    const component = container.querySelector(':only-child')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    const { container } = render(<Badge label="test" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-badge')
  })

  it('renders an additional class name', () => {
    const { container } = render(<Badge label="test" className="extra" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-badge extra')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLElement>()

    const { container } = render(<Badge label="test" ref={ref} />)

    const component = container.querySelector(':only-child')

    expect(ref.current).toBe(component)
  })

  it('renders with a number label', () => {
    const { container } = render(<Badge label={1} />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveTextContent('1')
  })

  it('renders with default color', () => {
    const { container } = render(<Badge label="test" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-badge--green')
  })

  badgeColors.map((color) =>
    it(`renders with ${color} color`, () => {
      const { container } = render(<Badge label="test" color={color} />)

      const component = container.querySelector(':only-child')

      expect(component).toHaveClass(`ams-badge--${color}`)
    }),
  )
})

import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { Spotlight, spotlightColors } from './Spotlight'
import '@testing-library/jest-dom'

describe('Spotlight', () => {
  it('renders', () => {
    const { container } = render(<Spotlight />)

    const component = container.querySelector(':only-child')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    const { container } = render(<Spotlight />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-spotlight')
  })

  it('renders an additional class name', () => {
    const { container } = render(<Spotlight className="extra" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('extra')

    expect(component).toHaveClass('ams-spotlight')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLElement>()

    const { container } = render(<Spotlight ref={ref} />)

    const component = container.querySelector(':only-child')

    expect(ref.current).toBe(component)
  })

  spotlightColors.map((color) =>
    it(`renders with ${color} color`, () => {
      const { container } = render(<Spotlight color={color} />)

      const component = container.querySelector(':only-child')

      expect(component).toHaveClass(`ams-spotlight--${color}`)
    }),
  )

  it('renders a custom tag', () => {
    render(<Spotlight as="article" />)

    const cell = screen.getByRole('article')

    expect(cell).toBeInTheDocument()
  })
})

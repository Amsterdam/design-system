import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { Avatar, avatarColors } from './Avatar'
import '@testing-library/jest-dom'

describe('Avatar', () => {
  it('renders', () => {
    render(<Avatar label="NR" />)

    const component = screen.getByText('Initialen gebruiker: NR')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    const { container } = render(<Avatar label="RS" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-avatar')
  })

  it('renders an additional class name', () => {
    const { container } = render(<Avatar label="VS" className="extra" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-avatar extra')
  })

  it('renders with a label consisting of no more than two, uppercase letters', () => {
    const { container } = render(<Avatar label="Design System" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveTextContent('DE')
  })

  it('renders with default content and title', () => {
    const { container } = render(<Avatar label="" />)

    const component = screen.getByText('Gebruiker')
    const svg = container.querySelector('svg')

    expect(component).toBeVisible()
    expect(svg).toBeVisible()
  })

  it('renders with a profile picture', () => {
    const { container } = render(<Avatar label="RS" imageSrc="image-source" />)

    const component = screen.getByText('Initialen gebruiker: RS')
    const image = container.querySelector('[src="image-source"]')

    expect(component).toBeVisible()
    expect(image).toBeVisible()
  })

  it('shortens a label that is too long', () => {
    const { container } = render(<Avatar label="ABC" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveTextContent('AB')
  })

  it('renders with default color', () => {
    const { container } = render(<Avatar label="VS" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-avatar--blue')
  })

  avatarColors.map((color) =>
    it(`renders with ${color} color`, () => {
      const { container } = render(<Avatar label="AL" color={color} />)

      const component = container.querySelector(':only-child')

      expect(component).toHaveClass(`ams-avatar--${color}`)
    }),
  )

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLSpanElement>()

    const { container } = render(<Avatar label="AL" ref={ref} />)

    const component = container.querySelector(':only-child')

    expect(ref.current).toBe(component)
  })
})

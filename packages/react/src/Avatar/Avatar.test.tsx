import { render } from '@testing-library/react'
import { createRef } from 'react'
import { Avatar, avatarColors } from './Avatar'
import '@testing-library/jest-dom'

describe('Avatar', () => {
  it('renders', () => {
    const { container } = render(<Avatar label="NR" />)

    const component = container.querySelector(':only-child')

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

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLElement>()

    const { container } = render(<Avatar label="AL" ref={ref} />)

    const component = container.querySelector(':only-child')

    expect(ref.current).toBe(component)
  })

  it('renders with a label consisting of no more than two, uppercase letters', () => {
    const { container } = render(<Avatar label="Design System" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveTextContent('DE')
    expect(component).toHaveAttribute('style', 'background-image: none;')
  })

  it('renders with default content and title', () => {
    const { container } = render(<Avatar label="" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveTextContent('‏‏‎ ‎')
    expect(component).toHaveAttribute('title', 'Niet-ingelogde gebruiker')
  })

  it('renders with default color', () => {
    const { container } = render(<Avatar label="VS" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-avatar--dark-blue')
  })

  avatarColors.map((color) =>
    it(`renders with ${color} color`, () => {
      const { container } = render(<Avatar label="AL" color={color} />)

      const component = container.querySelector(':only-child')

      expect(component).toHaveClass(`ams-avatar--${color}`)
    }),
  )

  it('renders with a profile picture', () => {
    const { container } = render(
      <Avatar
        label=""
        imageUrl="https://web.archive.org/web/20230610011324im_/https://avatars.githubusercontent.com/u/7290629?v=4"
      />,
    )

    const component = container.querySelector(':only-child')

    expect(component).toHaveTextContent('‏‏‎ ‎')
    expect(component).toHaveAttribute(
      'style',
      'background-image: url(https://web.archive.org/web/20230610011324im_/https://avatars.githubusercontent.com/u/7290629?v=4);',
    )
  })
})

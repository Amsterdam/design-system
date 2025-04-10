import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { Spotlight, spotlightColors, spotlightTags } from './Spotlight'
import { ariaRoleForTag } from '../common/accessibility'
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

  it('renders an extra class through the className prop', () => {
    const { container } = render(<Spotlight className="extra" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-spotlight extra')
  })

  spotlightTags.forEach((tag) => {
    it(`renders with a custom ${tag} tag`, () => {
      const { container } = render(
        <Spotlight aria-label={tag === 'section' ? 'Accessible name' : undefined} as={tag} />,
      )

      const component = tag === 'div' ? container.querySelector(tag) : screen.getByRole(ariaRoleForTag[tag])

      expect(component).toBeInTheDocument()
    })
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLDivElement>()

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
})

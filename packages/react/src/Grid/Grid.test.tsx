import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { Grid, gridGapSizes, gridPaddingSizes, gridTags } from './Grid'
import { ariaRoleForTag } from '../common/accessibility'
import '@testing-library/jest-dom'

describe('Grid', () => {
  it('renders', () => {
    const { container } = render(<Grid />)

    const component = container.querySelector(':only-child')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    const { container } = render(<Grid />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-grid')
  })

  it('renders an extra class name', () => {
    const { container } = render(<Grid className="extra" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-grid extra')
  })

  gridGapSizes.forEach((size) => {
    it(`renders the correct class name for a ${size} vertical gap`, () => {
      const { container } = render(<Grid gapVertical={size} />)

      const component = container.querySelector(':only-child')

      expect(component).toHaveClass(`ams-grid--gap-vertical--${size}`)
    })
  })

  gridPaddingSizes.forEach((size) => {
    it(`renders the correct class name for a ${size} bottom padding`, () => {
      const { container } = render(<Grid paddingBottom={size} />)

      const component = container.querySelector(':only-child')

      expect(component).toHaveClass(`ams-grid--padding-bottom--${size}`)
    })
  })

  gridPaddingSizes.forEach((size) => {
    it(`renders the correct class name for a ${size} top padding`, () => {
      const { container } = render(<Grid paddingTop={size} />)

      const component = container.querySelector(':only-child')

      expect(component).toHaveClass(`ams-grid--padding-top--${size}`)
    })
  })

  gridPaddingSizes.forEach((size) => {
    it(`renders the correct class name for a ${size} vertical padding`, () => {
      const { container } = render(<Grid paddingVertical={size} />)

      const component = container.querySelector(':only-child')

      expect(component).toHaveClass(`ams-grid--padding-vertical--${size}`)
    })
  })

  gridTags.forEach((tag) => {
    it(`renders with a custom ${tag} tag`, () => {
      const { container } = render(<Grid aria-label={tag === 'section' ? 'Accessible name' : undefined} as={tag} />)

      const component = tag === 'div' ? container.querySelector(tag) : screen.getByRole(ariaRoleForTag[tag])

      expect(component).toBeInTheDocument()
    })
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLElement>()

    const { container } = render(<Grid ref={ref} />)

    const component = container.querySelector(':only-child')

    expect(ref.current).toBe(component)
  })
})

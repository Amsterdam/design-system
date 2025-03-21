import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { Grid } from './Grid'
import type { GridPaddingSize } from './Grid'
import { AriaRoleForTag } from '../common/accessibility'
import '@testing-library/jest-dom'
import { layoutSectionTags } from '../common/types'

const paddingSizes = ['small', 'medium', 'large']

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

  it('renders an additional class name', () => {
    const { container } = render(<Grid className="extra" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('extra')
    expect(component).toHaveClass('ams-grid')
  })

  it('renders the correct class name for a zero gap', () => {
    const { container } = render(<Grid gapVertical="none" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-grid--gap-vertical--none')
  })

  it(`renders the correct class name for a small gap`, () => {
    const { container } = render(<Grid gapVertical="small" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-grid--gap-vertical--small')
  })

  it(`renders the correct class name for a large gap`, () => {
    const { container } = render(<Grid gapVertical="large" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-grid--gap-vertical--large')
  })

  paddingSizes.forEach((size) => {
    it(`renders the correct class name for a ${size} bottom padding`, () => {
      const { container } = render(<Grid paddingBottom={size as GridPaddingSize} />)

      const component = container.querySelector(':only-child')

      expect(component).toHaveClass(`ams-grid--padding-bottom--${size}`)
    })
  })

  paddingSizes.forEach((size) => {
    it(`renders the correct class name for a ${size} top padding`, () => {
      const { container } = render(<Grid paddingTop={size as GridPaddingSize} />)

      const component = container.querySelector(':only-child')

      expect(component).toHaveClass(`ams-grid--padding-top--${size}`)
    })
  })

  paddingSizes.forEach((size) => {
    it(`renders the correct class name for a ${size} vertical padding`, () => {
      const { container } = render(<Grid paddingVertical={size as GridPaddingSize} />)

      const component = container.querySelector(':only-child')

      expect(component).toHaveClass(`ams-grid--padding-vertical--${size}`)
    })
  })

  layoutSectionTags.forEach((tag) => {
    it(`renders with a custom ${tag} tag`, () => {
      const { container } = render(<Grid aria-label={tag === 'section' ? 'Accessible name' : undefined} as={tag} />)

      const component = tag === 'div' ? container.querySelector(tag) : screen.getByRole(AriaRoleForTag[tag])

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

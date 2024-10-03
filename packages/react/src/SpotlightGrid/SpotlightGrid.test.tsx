import { render } from '@testing-library/react'
import { createRef } from 'react'
import { SpotlightGrid } from './SpotlightGrid'
import type { GridPaddingSize } from '../Grid/Grid'
import '@testing-library/jest-dom'

const paddingSizes = ['small', 'medium', 'large']

describe('SpotlightGrid', () => {
  it('renders', () => {
    const { container } = render(<SpotlightGrid />)

    const component = container.querySelector(':only-child')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    const { container } = render(<SpotlightGrid />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-spotlight-grid')
  })

  it('renders an additional class name', () => {
    const { container } = render(<SpotlightGrid className="extra" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-spotlight-grid extra')
  })

  it('renders the correct class name for a zero gap', () => {
    const { container } = render(<SpotlightGrid gapVertical="none" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-spotlight-grid--gap-vertical--none')
  })

  it(`renders the correct class name for a small gap`, () => {
    const { container } = render(<SpotlightGrid gapVertical="small" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-spotlight-grid--gap-vertical--small')
  })

  it(`renders the correct class name for a large gap`, () => {
    const { container } = render(<SpotlightGrid gapVertical="large" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-spotlight-grid--gap-vertical--large')
  })

  paddingSizes.forEach((size) => {
    it(`renders the correct class name for a ${size} bottom padding`, () => {
      const { container } = render(<SpotlightGrid paddingBottom={size as GridPaddingSize} />)

      const component = container.querySelector(':only-child')

      expect(component).toHaveClass(`ams-spotlight-grid--padding-bottom--${size}`)
    })
  })

  paddingSizes.forEach((size) => {
    it(`renders the correct class name for a ${size} top padding`, () => {
      const { container } = render(<SpotlightGrid paddingTop={size as GridPaddingSize} />)

      const component = container.querySelector(':only-child')

      expect(component).toHaveClass(`ams-spotlight-grid--padding-top--${size}`)
    })
  })

  paddingSizes.forEach((size) => {
    it(`renders the correct class name for a ${size} vertical padding`, () => {
      const { container } = render(<SpotlightGrid paddingVertical={size as GridPaddingSize} />)

      const component = container.querySelector(':only-child')

      expect(component).toHaveClass(`ams-spotlight-grid--padding-vertical--${size}`)
    })
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLDivElement>()

    const { container } = render(<SpotlightGrid ref={ref} />)

    const component = container.querySelector(':only-child')

    expect(ref.current).toBe(component)
  })
})

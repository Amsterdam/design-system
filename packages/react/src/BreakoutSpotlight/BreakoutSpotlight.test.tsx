import { render } from '@testing-library/react'
import { createRef } from 'react'
import { BreakoutSpotlight } from './BreakoutSpotlight'
import type { GridPaddingSize } from '../Grid/Grid'
import '@testing-library/jest-dom'

const paddingSizes = ['small', 'medium', 'large']

describe('BreakoutSpotlight', () => {
  it('renders', () => {
    const { container } = render(<BreakoutSpotlight />)

    const component = container.querySelector(':only-child')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    const { container } = render(<BreakoutSpotlight />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-breakout-spotlight')
  })

  it('renders an additional class name', () => {
    const { container } = render(<BreakoutSpotlight className="extra" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-breakout-spotlight extra')
  })

  it('renders the correct class name for a zero gap', () => {
    const { container } = render(<BreakoutSpotlight gapVertical="none" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-breakout-spotlight--gap-vertical--none')
  })

  it(`renders the correct class name for a small gap`, () => {
    const { container } = render(<BreakoutSpotlight gapVertical="small" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-breakout-spotlight--gap-vertical--small')
  })

  it(`renders the correct class name for a large gap`, () => {
    const { container } = render(<BreakoutSpotlight gapVertical="large" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-breakout-spotlight--gap-vertical--large')
  })

  paddingSizes.forEach((size) => {
    it(`renders the correct class name for a ${size} bottom padding`, () => {
      const { container } = render(<BreakoutSpotlight paddingBottom={size as GridPaddingSize} />)

      const component = container.querySelector(':only-child')

      expect(component).toHaveClass(`ams-breakout-spotlight--padding-bottom--${size}`)
    })
  })

  paddingSizes.forEach((size) => {
    it(`renders the correct class name for a ${size} top padding`, () => {
      const { container } = render(<BreakoutSpotlight paddingTop={size as GridPaddingSize} />)

      const component = container.querySelector(':only-child')

      expect(component).toHaveClass(`ams-breakout-spotlight--padding-top--${size}`)
    })
  })

  paddingSizes.forEach((size) => {
    it(`renders the correct class name for a ${size} vertical padding`, () => {
      const { container } = render(<BreakoutSpotlight paddingVertical={size as GridPaddingSize} />)

      const component = container.querySelector(':only-child')

      expect(component).toHaveClass(`ams-breakout-spotlight--padding-vertical--${size}`)
    })
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLDivElement>()

    const { container } = render(<BreakoutSpotlight ref={ref} />)

    const component = container.querySelector(':only-child')

    expect(ref.current).toBe(component)
  })
})

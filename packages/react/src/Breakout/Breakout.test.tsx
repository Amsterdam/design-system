import { render } from '@testing-library/react'
import { createRef } from 'react'
import { Breakout } from './Breakout'
import type { BreakoutPaddingSize } from './Breakout'
import '@testing-library/jest-dom'

const paddingSizes = ['small', 'medium', 'large']

describe('Breakout', () => {
  it('renders', () => {
    const { container } = render(<Breakout />)

    const component = container.querySelector(':only-child')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    const { container } = render(<Breakout />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-breakout')
  })

  it('renders an additional class name', () => {
    const { container } = render(<Breakout className="extra" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-breakout extra')
  })

  it('renders the correct class name for a zero gap', () => {
    const { container } = render(<Breakout gapVertical="none" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-breakout--gap-vertical--none')
  })

  it(`renders the correct class name for a small gap`, () => {
    const { container } = render(<Breakout gapVertical="small" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-breakout--gap-vertical--small')
  })

  it(`renders the correct class name for a large gap`, () => {
    const { container } = render(<Breakout gapVertical="large" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-breakout--gap-vertical--large')
  })

  paddingSizes.forEach((size) => {
    it(`renders the correct class name for a ${size} bottom padding`, () => {
      const { container } = render(<Breakout paddingBottom={size as BreakoutPaddingSize} />)

      const component = container.querySelector(':only-child')

      expect(component).toHaveClass(`ams-breakout--padding-bottom--${size}`)
    })
  })

  paddingSizes.forEach((size) => {
    it(`renders the correct class name for a ${size} top padding`, () => {
      const { container } = render(<Breakout paddingTop={size as BreakoutPaddingSize} />)

      const component = container.querySelector(':only-child')

      expect(component).toHaveClass(`ams-breakout--padding-top--${size}`)
    })
  })

  paddingSizes.forEach((size) => {
    it(`renders the correct class name for a ${size} vertical padding`, () => {
      const { container } = render(<Breakout paddingVertical={size as BreakoutPaddingSize} />)

      const component = container.querySelector(':only-child')

      expect(component).toHaveClass(`ams-breakout--padding-vertical--${size}`)
    })
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLDivElement>()

    const { container } = render(<Breakout ref={ref} />)

    const component = container.querySelector(':only-child')

    expect(ref.current).toBe(component)
  })
})

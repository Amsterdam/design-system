/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { render } from '@testing-library/react'
import { createRef } from 'react'
import { Breakout } from './Breakout'
import { gridGaps, gridPaddings } from '../Grid/Grid'
import '@testing-library/jest-dom'

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

  it('renders an extra class name', () => {
    const { container } = render(<Breakout className="extra" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-breakout extra')
  })

  gridGaps.forEach((size) => {
    it(`renders the correct class name for a ${size} vertical gap`, () => {
      const { container } = render(<Breakout gapVertical={size} />)

      const component = container.querySelector(':only-child')

      expect(component).toHaveClass(`ams-breakout--gap-vertical--${size}`)
    })
  })

  gridPaddings.forEach((size) => {
    it(`renders the correct class name for a ${size} bottom padding`, () => {
      const { container } = render(<Breakout paddingBottom={size} />)

      const component = container.querySelector(':only-child')

      expect(component).toHaveClass(`ams-breakout--padding-bottom--${size}`)
    })
  })

  gridPaddings.forEach((size) => {
    it(`renders the correct class name for a ${size} top padding`, () => {
      const { container } = render(<Breakout paddingTop={size} />)

      const component = container.querySelector(':only-child')

      expect(component).toHaveClass(`ams-breakout--padding-top--${size}`)
    })
  })

  gridPaddings.forEach((size) => {
    it(`renders the correct class name for a ${size} vertical padding`, () => {
      const { container } = render(<Breakout paddingVertical={size} />)

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

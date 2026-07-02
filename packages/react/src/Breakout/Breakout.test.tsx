/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { describe, expect, it } from 'vitest'

import { ariaRoleForTag } from '../common/accessibility'
import { gridGaps, gridPaddings, gridTags } from '../Grid/Grid'
import { Breakout } from './Breakout'

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

  gridTags.forEach((tag) => {
    it(`renders with a custom ${tag} tag`, () => {
      const { container } = render(<Breakout aria-label={tag === 'section' ? 'Accessible name' : undefined} as={tag} />)

      const component = tag === 'div' ? container.querySelector(tag) : screen.getByRole(ariaRoleForTag[tag])

      expect(component).toBeInTheDocument()
    })
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLElement>()

    const { container } = render(<Breakout ref={ref} />)

    const component = container.querySelector(':only-child')

    expect(ref.current).toBe(component)
  })

  it('passes additional props', () => {
    const { container } = render(<Breakout aria-hidden={false} data-test="data-test" id="id" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveAttribute('aria-hidden', 'false')
    expect(component).toHaveAttribute('id', 'id')
    expect(component).toHaveAttribute('data-test', 'data-test')
  })
})

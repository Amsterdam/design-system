/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { render } from '@testing-library/react'
import { createRef } from 'react'

import type { LogoConfig } from './Logo'

import LogoCustom from './brand/LogoCustom'
import { Logo } from './Logo'
import '@testing-library/jest-dom'

describe('Logo', () => {
  it('renders', () => {
    const { container } = render(<Logo />)

    const component = container.querySelector(':only-child')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    const { container } = render(<Logo />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-logo')
  })

  it('renders an extra class name', () => {
    const { container } = render(<Logo className="extra" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-logo extra')
  })

  it('renders a custom logo through the brand prop', () => {
    const customLogo: LogoConfig = {
      label: 'Custom logo',
      svg: LogoCustom,
    }

    const { container } = render(<Logo brand={customLogo} />)

    const component = container.querySelector(':only-child')

    // The custom SVG is rendered
    expect(component).toBeInTheDocument()

    // The BEM class is still applied via Logo component
    expect(component).toHaveClass('ams-logo')

    // The aria-label comes from the custom config
    expect(component).toHaveAttribute('aria-label', 'Custom logo')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<SVGSVGElement>()

    const { container } = render(<Logo ref={ref} />)

    const component = container.querySelector(':only-child')

    expect(ref.current).toBe(component)
  })
})

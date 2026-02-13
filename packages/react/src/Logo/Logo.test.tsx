/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { SVGProps } from 'react'

import { render } from '@testing-library/react'
import { createRef } from 'react'

import type { LogoBrandConfig } from './Logo'

const TestLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 128 32" xmlns="http://www.w3.org/2000/svg" {...props} />
)

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
    const testLogo: LogoBrandConfig = {
      label: 'Test logo',
      svg: TestLogo,
    }

    const { container } = render(<Logo brand={testLogo} />)

    const component = container.querySelector(':only-child')

    expect(component).toBeInTheDocument()
    expect(component).toHaveClass('ams-logo')
    expect(component).toHaveAttribute('aria-label', 'Test logo')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<SVGSVGElement>()

    const { container } = render(<Logo ref={ref} />)

    const component = container.querySelector(':only-child')

    expect(ref.current).toBe(component)
  })
})

/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { ArrowBackwardIcon, WarningIcon } from '@amsterdam/design-system-react-icons'
import { render } from '@testing-library/react'
import { createRef } from 'react'
import { describe, expect, it } from 'vitest'

import { Icon, iconSizes } from './Icon'

describe('Icon', () => {
  it('renders a span element', () => {
    const { container } = render(<Icon svg={WarningIcon} />)

    const icon = container.querySelector('span:only-child')

    expect(icon).toBeInTheDocument()
  })

  it('renders with a React node for the svg prop', () => {
    const { container } = render(<Icon svg={<WarningIcon />} />)

    const icon = container.querySelector('span:only-child')

    expect(icon).toBeInTheDocument()
  })

  it('renders with a zero-argument function for the svg prop', () => {
    const { container } = render(<Icon svg={() => <WarningIcon />} />)

    const icon = container.querySelector(':only-child svg')

    expect(icon).toBeInTheDocument()
  })

  it('renders with a props-accepting function for the svg prop', () => {
    const { container } = render(<Icon svg={(props) => <WarningIcon {...props} />} />)

    const icon = container.querySelector(':only-child svg')

    expect(icon).toBeInTheDocument()
  })

  it('renders a design system BEM class name', () => {
    const { container } = render(<Icon svg={WarningIcon} />)

    const icon = container.querySelector(':only-child')

    expect(icon).toHaveClass('ams-icon')
  })

  it('renders an svg child', () => {
    const { container } = render(<Icon svg={WarningIcon} />)

    const svg = container.querySelector(':only-child svg')

    expect(svg).toBeInTheDocument()
  })

  iconSizes.forEach((size) => {
    it(`renders the correct class name for a ‘${size}’ icon`, () => {
      const { container } = render(<Icon size={size} svg={WarningIcon} />)

      const icon = container.querySelector(':only-child')

      expect(icon).toHaveClass(`ams-icon--${size}`)
    })
  })

  it('renders the right square class', () => {
    const { container } = render(<Icon square svg={WarningIcon} />)

    const icon = container.querySelector('span:only-child')

    expect(icon).toHaveClass('ams-icon--square')
  })

  it('renders the class name for inverse color', () => {
    const { container } = render(<Icon color="inverse" svg={WarningIcon} />)

    const icon = container.querySelector('span:only-child')

    expect(icon).toHaveClass('ams-icon--inverse')
  })

  it('renders an extra class name', () => {
    const { container } = render(<Icon className="extra" svg={WarningIcon} />)

    const icon = container.querySelector(':only-child')

    expect(icon).toHaveClass('ams-icon extra')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLSpanElement>()

    const { container } = render(<Icon ref={ref} svg={WarningIcon} />)

    const icon = container.querySelector(':only-child')

    expect(ref.current).toBe(icon)
  })

  it('renders the data-directional attribute for a directional icon', () => {
    const { container } = render(<Icon svg={ArrowBackwardIcon} />)

    const svg = container.querySelector(':only-child svg')

    expect(svg).toHaveAttribute('data-directional', 'true')
  })

  it('does not render the data-directional attribute for a non-directional icon', () => {
    const { container } = render(<Icon svg={WarningIcon} />)

    const svg = container.querySelector(':only-child svg')

    expect(svg).not.toHaveAttribute('data-directional')
  })

  it('passes additional props', () => {
    const { container } = render(<Icon aria-hidden="false" data-test="data-test" id="id" svg={WarningIcon} />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveAttribute('aria-hidden', 'false')
    expect(component).toHaveAttribute('id', 'id')
    expect(component).toHaveAttribute('data-test', 'data-test')
  })
})

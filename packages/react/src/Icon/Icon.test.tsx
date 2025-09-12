/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { WarningIcon } from '@amsterdam/design-system-react-icons'
import { render } from '@testing-library/react'
import { createRef } from 'react'

import { Icon, iconSizes } from './Icon'
import '@testing-library/jest-dom'

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
})

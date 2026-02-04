/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { CalendarFillIcon } from '@amsterdam/design-system-react-icons'
import { render } from '@testing-library/react'
import { createRef } from 'react'

import { Badge, badgeColors } from './Badge'
import '@testing-library/jest-dom'

describe('Badge', () => {
  it('renders', () => {
    const { container } = render(<Badge label="test" />)

    const component = container.querySelector(':only-child')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
    expect(component?.tagName).toBe('SPAN')
  })

  it('renders a design system BEM class name', () => {
    const { container } = render(<Badge label="test" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-badge')
  })

  it('renders an extra class name', () => {
    const { container } = render(<Badge className="extra" label="test" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-badge extra')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLElement>()

    const { container } = render(<Badge label="test" ref={ref} />)

    const component = container.querySelector(':only-child')

    expect(ref.current).toBe(component)
  })

  it('renders with a number label', () => {
    const { container } = render(<Badge label={1} />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveTextContent('1')
  })

  badgeColors.map((color) =>
    it(`renders with ${color} color`, () => {
      const { container } = render(<Badge color={color} label="test" />)

      const component = container.querySelector(':only-child')

      expect(component).toHaveClass(`ams-badge--${color}`)
    }),
  )

  it('shows an icon', () => {
    const { container } = render(<Badge icon={CalendarFillIcon} label="test" />)

    const iconWrapper = container.querySelector('.ams-icon')
    const icon = container.querySelector('svg')

    expect(iconWrapper).toBeInTheDocument()
    expect(icon).toBeInTheDocument()
  })

  it('passes additional props', () => {
    const { container } = render(<Badge aria-hidden={false} data-test="data-test" id="id" label="test" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveAttribute('aria-hidden', 'false')
    expect(component).toHaveAttribute('id', 'id')
    expect(component).toHaveAttribute('data-test', 'data-test')
  })
})

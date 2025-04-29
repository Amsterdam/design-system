/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { CardHeading } from './CardHeading'
import '@testing-library/jest-dom'

describe('Card Heading', () => {
  it('renders', () => {
    render(<CardHeading level={1} />)

    const component = screen.getByRole('heading')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    render(<CardHeading level={2} />)

    const component = screen.getByRole('heading')

    expect(component).toHaveClass('ams-card__heading')
  })

  it('renders an extra class name', () => {
    render(<CardHeading className="extra" level={3} />)

    const component = screen.getByRole('heading')

    expect(component).toHaveClass('ams-card__heading extra')
  })

  it('renders the correct size level class', () => {
    render(
      <CardHeading level={4} size="level-1">
        Size level 1
      </CardHeading>,
    )

    const component = screen.getByRole('heading')

    expect(component).toHaveClass('ams-heading--1')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLHeadingElement>()

    render(<CardHeading level={4} ref={ref} />)

    const component = screen.getByRole('heading')

    expect(ref.current).toBe(component)
  })
})

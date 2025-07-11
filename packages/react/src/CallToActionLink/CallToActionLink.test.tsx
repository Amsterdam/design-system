/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { render } from '@testing-library/react'
import { createRef } from 'react'
import { CallToActionLink } from './CallToActionLink'
import '@testing-library/jest-dom'

describe('CallToActionLink', () => {
  it('renders', () => {
    const { container } = render(<CallToActionLink />)

    const component = container.querySelector(':only-child')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    const { container } = render(<CallToActionLink />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-call-to-action-link')
  })

  it('renders an extra class name', () => {
    const { container } = render(<CallToActionLink className="extra" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-call-to-action-link extra')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLAnchorElement>()

    const { container } = render(<CallToActionLink ref={ref} />)

    const component = container.querySelector(':only-child')

    expect(ref.current).toBe(component)
  })
})

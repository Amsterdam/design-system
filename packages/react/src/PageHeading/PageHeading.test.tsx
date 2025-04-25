/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { PageHeading } from './PageHeading'
import '@testing-library/jest-dom'

describe('Page heading', () => {
  it('renders a heading role element', () => {
    render(<PageHeading>Breaking news</PageHeading>)

    const pageHeading = screen.getByRole('heading', {
      name: 'Breaking news',
    })

    expect(pageHeading).toBeInTheDocument()
    expect(pageHeading).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    const { container } = render(<PageHeading />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-page-heading')
  })

  it('renders an extra class name', () => {
    const { container } = render(<PageHeading className="extra" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-page-heading extra')
  })

  it('renders the class name for inverse color', () => {
    render(<PageHeading color="inverse">Titel</PageHeading>)

    const pageHeading = screen.getByRole('heading', { name: 'Titel' })

    expect(pageHeading).toHaveClass('ams-page-heading--inverse')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLHeadingElement>()

    const { container } = render(<PageHeading ref={ref} />)

    const component = container.querySelector(':only-child')

    expect(ref.current).toBe(component)
  })
})

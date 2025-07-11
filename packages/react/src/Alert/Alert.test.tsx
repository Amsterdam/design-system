/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { fireEvent, render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { Alert } from './Alert'
import '@testing-library/jest-dom'

describe('Alert', () => {
  it('renders', () => {
    render(<Alert heading="Let op!" headingLevel={2} />)

    const component = screen.getByRole('region', { name: 'Let op!' })

    const icon = component?.querySelector('.ams-alert__severity-indicator > .ams-icon')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
    expect(icon).toBeInTheDocument()
    expect(icon).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    render(<Alert heading="Let op!" headingLevel={2} />)

    const component = screen.getByRole('region', { name: 'Let op!' })

    expect(component).toHaveClass('ams-alert')
  })

  it('renders an extra class name', () => {
    render(<Alert className="extra" heading="Let op!" headingLevel={2} />)

    const component = screen.getByRole('region', { name: 'Let op!' })

    expect(component).toHaveClass('ams-alert extra')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLDivElement>()

    render(<Alert heading="Let op!" headingLevel={2} ref={ref} />)

    const component = screen.getByRole('region', { name: 'Let op!' })

    expect(ref.current).toBe(component)
  })

  it('renders a heading', () => {
    render(<Alert heading="Test heading" headingLevel={2} />)

    const heading = screen.getByRole('heading', {
      name: 'Test heading',
    })

    expect(heading).toBeInTheDocument()
  })

  it('renders the close button', () => {
    render(<Alert closeable heading="Let op!" headingLevel={2} />)

    const component = screen.getByRole('region', { name: 'Let op!' })
    const closeButton = component?.querySelector('.ams-icon-button')

    expect(closeButton).toBeInTheDocument()
    expect(closeButton).toBeVisible()
  })

  it('renders the close button with a label', () => {
    render(<Alert closeable closeButtonLabel="Close" heading="Let op!" headingLevel={2} />)

    const closeButton = screen.getByRole('button', { name: 'Close' })

    expect(closeButton).toBeInTheDocument()
  })

  it('fires the onClose event when the close button is clicked', () => {
    const onClose = jest.fn()
    render(<Alert closeable heading="Let op!" headingLevel={2} onClose={onClose} />)

    const component = screen.getByRole('region', { name: 'Let op!' })
    const closeButton = component?.querySelector('.ams-icon-button')

    fireEvent.click(closeButton!)

    expect(onClose).toHaveBeenCalled()
  })

  it('uses a custom headingId to label the Alert', () => {
    render(<Alert heading="Let op!" headingId="custom-heading-id" headingLevel={2} />)

    const component = screen.getByRole('region', { name: 'Let op!' })

    expect(component).toBeInTheDocument()
    expect(component).toHaveAttribute('aria-labelledby', 'custom-heading-id')
  })

  it('does not label the Alert when headingId is set to null', () => {
    const { container } = render(<Alert heading="Let op!" headingId={null} headingLevel={2} />)

    const component = container.querySelector(':only-child')

    expect(component).not.toHaveAttribute('aria-labelledby')
  })
})

import { fireEvent, render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { Alert } from './Alert'
import '@testing-library/jest-dom'

describe('Alert', () => {
  it('renders', () => {
    const { container } = render(<Alert heading="Let op!" headingLevel={2} />)

    const component = container.querySelector(':only-child')
    const icon = component?.querySelector('.ams-alert__severity-indicator > .ams-icon')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
    expect(icon).toBeInTheDocument()
    expect(icon).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    const { container } = render(<Alert heading="Let op!" headingLevel={2} />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-alert')
  })

  it('renders an extra class name', () => {
    const { container } = render(<Alert className="extra" heading="Let op!" headingLevel={2} />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-alert extra')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLDivElement>()

    const { container } = render(<Alert heading="Let op!" headingLevel={2} ref={ref} />)

    const component = container.querySelector(':only-child')

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
    const { container } = render(<Alert closeable heading="Let op!" headingLevel={2} />)

    const component = container.querySelector(':only-child')
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
    const { container } = render(<Alert closeable heading="Let op!" headingLevel={2} onClose={onClose} />)

    const component = container.querySelector(':only-child')
    const closeButton = component?.querySelector('.ams-icon-button')

    fireEvent.click(closeButton!)

    expect(onClose).toHaveBeenCalled()
  })
})

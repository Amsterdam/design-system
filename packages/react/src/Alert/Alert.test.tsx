import { fireEvent, render } from '@testing-library/react'
import { createRef } from 'react'
import { Alert } from './Alert'
import '@testing-library/jest-dom'

describe('Alert', () => {
  it('renders', () => {
    const { container } = render(<Alert />)

    const component = container.querySelector(':only-child')
    const icon = component?.querySelector('.ams-alert__icon')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
    expect(icon).toBeInTheDocument()
    expect(icon).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    const { container } = render(<Alert />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-alert')
  })

  it('renders an additional class name', () => {
    const { container } = render(<Alert className="extra" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-alert extra')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLDivElement>()

    const { container } = render(<Alert ref={ref} />)

    const component = container.querySelector(':only-child')

    expect(ref.current).toBe(component)
  })

  it('renders the close button', () => {
    const { container } = render(<Alert closeable={true} />)

    const component = container.querySelector(':only-child')
    const closeButton = component?.querySelector('.ams-icon-button')

    expect(closeButton).toBeInTheDocument()
    expect(closeButton).toBeVisible()
  })

  it('fires the onClose event when the close button is clicked', () => {
    const onClose = jest.fn()
    const { container } = render(<Alert closeable={true} onClose={onClose} />)

    const component = container.querySelector(':only-child')
    const closeButton = component?.querySelector('.ams-icon-button')

    fireEvent.click(closeButton!)

    expect(onClose).toHaveBeenCalled()
  })
})

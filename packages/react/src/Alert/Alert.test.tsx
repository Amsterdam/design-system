import { render } from '@testing-library/react'
import { createRef } from 'react'
import { Alert } from './Alert'
import '@testing-library/jest-dom'

describe('Alert', () => {
  it('renders', () => {
    const { container } = render(<Alert />)

    const component = container.querySelector(':only-child')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    const { container } = render(<Alert />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('amsterdam-alert')
  })

  it('can have a additional class name', () => {
    const { container } = render(<Alert className="extra" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('extra')

    expect(component).toHaveClass('amsterdam-alert')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLDivElement>()

    const { container } = render(<Alert ref={ref} />)

    const component = container.querySelector(':only-child')

    expect(ref.current).toBe(component)
  })

  it('renders a design system BEM class name', () => {
    const { container } = render(<Alert />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('amsterdam-alert')
  })

  it('can have a additional class name', () => {
    const { container } = render(<Alert className="extra" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('extra')

    expect(component).toHaveClass('amsterdam-alert')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLDivElement>()

    const { container } = render(<Alert ref={ref} />)

    const component = container.querySelector(':only-child')

    expect(ref.current).toBe(component)
  })

  it('renders the icon if the type is success', () => {
    const { container } = render(<Alert icon={true} type="success" />)

    const component = container.querySelector(':only-child')

    const icon = component?.querySelector('.amsterdam-alert__icon')

    expect(icon).toBeInTheDocument()
    expect(icon).toBeVisible()
  })

  it('does not render the icon if the type is default', () => {
    const { container } = render(<Alert icon={true} />)

    const component = container.querySelector(':only-child')

    const icon = component?.querySelector('.amsterdam-alert__icon')

    expect(icon).not.toBeInTheDocument()
  })

  it('renders the close button', () => {
    const { container } = render(<Alert closeable={true} />)

    const component = container.querySelector(':only-child')
    const closeButton = component?.querySelector('.amsterdam-alert__close')

    expect(closeButton).toBeInTheDocument()
    expect(closeButton).toBeVisible()
  })
})

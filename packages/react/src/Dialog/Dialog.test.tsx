import { render } from '@testing-library/react'
import { createRef } from 'react'
import { Dialog } from './Dialog'
import '@testing-library/jest-dom'

describe('Dialog', () => {
  it('renders', () => {
    const { container } = render(<Dialog open />)

    const component = container.querySelector(':only-child')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    const { container } = render(<Dialog />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('amsterdam-dialog')
  })

  it('renders an additional class name', () => {
    const { container } = render(<Dialog className="extra" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('extra')

    expect(component).toHaveClass('amsterdam-dialog')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLDialogElement>()

    const { container } = render(<Dialog ref={ref} />)

    const component = container.querySelector(':only-child')

    expect(ref.current).toBe(component)
  })

  it('is not visible when open attribute is not used', () => {
    const { container } = render(<Dialog />)

    const component = container.querySelector(':only-child')

    expect(component).toBeInTheDocument()
    expect(component).not.toBeVisible()
  })

  it('renders a title', () => {
    const { getByText } = render(<Dialog title="Dialog Title" />)

    expect(getByText('Dialog Title')).toBeInTheDocument()
  })

  it('renders children', () => {
    const { getByText } = render(<Dialog>Dialog Content</Dialog>)

    expect(getByText('Dialog Content')).toBeInTheDocument()
  })

  it('renders actions when provided', () => {
    const { getByText } = render(<Dialog actions={<button>Click Me</button>} />)

    expect(getByText('Click Me')).toBeInTheDocument()
  })

  it('does not render actions when not provided', () => {
    const { queryByText } = render(<Dialog />)

    expect(queryByText('Click Me')).not.toBeInTheDocument()
  })

  it('renders DialogClose button', () => {
    const { container } = render(<Dialog />)

    const closeButton = container.querySelector('.amsterdam-dialog__close')

    expect(closeButton).toBeInTheDocument()
  })
})

import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { Dialog } from './Dialog'
import '@testing-library/jest-dom'

describe('Dialog', () => {
  it('renders', () => {
    render(<Dialog open />)

    const component = screen.getByRole('dialog')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    render(<Dialog />)

    const component = screen.getByRole('dialog', { hidden: true })

    expect(component).toHaveClass('ams-dialog')
  })

  it('renders an additional class name', () => {
    render(<Dialog className="extra" />)

    const component = screen.getByRole('dialog', { hidden: true })

    expect(component).toHaveClass('extra')

    expect(component).toHaveClass('ams-dialog')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLDialogElement>()

    render(<Dialog ref={ref} />)

    const component = screen.getByRole('dialog', { hidden: true })

    expect(ref.current).toBe(component)
  })

  it('is not visible when open attribute is not used', () => {
    render(<Dialog />)

    const component = screen.getByRole('dialog', { hidden: true })

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
    render(<Dialog open />)

    const closeButton = screen.getByText('Sluiten')

    expect(closeButton).toBeInTheDocument()
  })

  it.skip('can be closed with the Close button', () => {
    // We currently can't test this because dialog isn't properly supported in jsdom
    // https://github.com/jsdom/jsdom/issues/3294
  })

  it.skip('has no accessible content when it is closed', () => {
    // We currently can't test this because dialog isn't properly supported in jsdom
    // https://github.com/jsdom/jsdom/issues/3294
  })
})

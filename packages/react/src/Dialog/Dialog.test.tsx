import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { Dialog } from './Dialog'
import '@testing-library/jest-dom'

describe('Dialog', () => {
  it('renders', () => {
    render(<Dialog heading="Test heading" open />)

    const component = screen.getByRole('dialog')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    render(<Dialog heading="Test heading" />)

    const component = screen.getByRole('dialog', { hidden: true })

    expect(component).toHaveClass('ams-dialog')
  })

  it('renders an additional class name', () => {
    render(<Dialog heading="Test heading" className="extra" />)

    const component = screen.getByRole('dialog', { hidden: true })

    expect(component).toHaveClass('extra')

    expect(component).toHaveClass('ams-dialog')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLDialogElement>()

    render(<Dialog heading="Test heading" ref={ref} />)

    const component = screen.getByRole('dialog', { hidden: true })

    expect(ref.current).toBe(component)
  })

  it('is not visible when open attribute is not used', () => {
    render(<Dialog heading="Test heading" />)

    const component = screen.getByRole('dialog', { hidden: true })

    expect(component).toBeInTheDocument()
    expect(component).not.toBeVisible()
  })

  it('renders a heading', () => {
    render(<Dialog heading="Test heading" open />)

    const heading = screen.getByRole('heading', {
      name: 'Test heading',
    })

    expect(heading).toBeInTheDocument()
  })

  it('renders children', () => {
    const { getByText } = render(<Dialog heading="Test heading">Test content</Dialog>)

    expect(getByText('Test content')).toBeInTheDocument()
  })

  it('renders actions when provided', () => {
    const { getByText } = render(<Dialog heading="Test heading" actions={<button>Click Me</button>} />)

    expect(getByText('Click Me')).toBeInTheDocument()
  })

  it('does not render actions when not provided', () => {
    const { queryByText } = render(<Dialog heading="Test heading" />)

    expect(queryByText('Click Me')).not.toBeInTheDocument()
  })

  it('renders DialogClose button', () => {
    render(<Dialog heading="Test heading" open />)

    const closeButton = screen.getByRole('button', { name: 'Sluiten' })

    expect(closeButton).toBeInTheDocument()
  })

  it('renders a custom close label', () => {
    render(<Dialog heading="Test heading" open closeButtonLabel="Close" />)

    const closeButton = screen.getByRole('button', { name: 'Close' })

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

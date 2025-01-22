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
    render(<Dialog className="extra" heading="Test heading" />)

    const component = screen.getByRole('dialog', { hidden: true })

    expect(component).toHaveClass('ams-dialog extra')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLDialogElement>()

    render(<Dialog ref={ref} heading="Test heading" />)

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

  it('renders footer when provided', () => {
    render(<Dialog footer={<button>Click Me</button>} heading="Test heading" open />)

    const footer = screen.getByRole('contentinfo')
    const button = screen.getByRole('button', {
      name: 'Click Me',
    })

    expect(footer).toBeInTheDocument()
    expect(button).toBeInTheDocument()
  })

  it('does not render footer when not provided', () => {
    const { container } = render(<Dialog heading="Test heading" />)

    const component = container.querySelector('footer')

    expect(component).not.toBeInTheDocument()
  })

  it('renders DialogClose button', () => {
    render(<Dialog heading="Test heading" open />)

    const closeButton = screen.getByRole('button', { name: 'Sluiten' })

    expect(closeButton).toBeInTheDocument()
  })

  it('renders a custom close label', () => {
    render(<Dialog closeButtonLabel="Close" heading="Test heading" open />)

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

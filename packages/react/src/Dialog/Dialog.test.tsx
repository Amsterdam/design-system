/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { describe, expect, it, vi } from 'vitest'

import { Dialog } from './Dialog'

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

  it('renders an extra class name', () => {
    render(<Dialog className="extra" heading="Test heading" />)

    const component = screen.getByRole('dialog', { hidden: true })

    expect(component).toHaveClass('ams-dialog extra')
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

  it('Dialog.close calls close on the closest dialog element', () => {
    const mockClose = vi.fn()
    const event = {
      currentTarget: {
        closest: vi.fn().mockReturnValue({ close: mockClose }),
      },
    } as unknown as MouseEvent<HTMLButtonElement>

    Dialog.close(event)

    expect(event.currentTarget.closest).toHaveBeenCalledWith('dialog')
    expect(mockClose).toHaveBeenCalled()
  })

  it('Dialog.close does nothing when there is no ancestor dialog element', () => {
    const event = {
      currentTarget: {
        closest: vi.fn().mockReturnValue(null),
      },
    } as unknown as MouseEvent<HTMLButtonElement>

    expect(() => Dialog.close(event)).not.toThrow()
  })

  it('Dialog.open calls showModal on the selected dialog element', () => {
    const mockShowModal = vi.fn()
    const dialog = document.createElement('dialog')
    dialog.id = 'test-dialog'
    dialog.showModal = mockShowModal
    document.body.appendChild(dialog)

    Dialog.open('#test-dialog')

    expect(mockShowModal).toHaveBeenCalled()
    dialog.remove()
  })

  it('Dialog.open does nothing when the selector does not match any element', () => {
    expect(() => Dialog.open('#nonexistent-dialog')).not.toThrow()
  })

  it('passes additional props', () => {
    render(<Dialog aria-hidden="false" data-test="data-test" heading="Test heading" id="id" open />)

    const component = screen.getByRole('dialog')

    expect(component).toHaveAttribute('aria-hidden', 'false')
    expect(component).toHaveAttribute('id', 'id')
    expect(component).toHaveAttribute('data-test', 'data-test')
  })
})

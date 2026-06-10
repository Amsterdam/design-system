/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { MouseEvent } from 'react'

import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

import { Dialog } from './Dialog'

describe('Dialog', () => {
  beforeEach(() => {
    vi.spyOn(console, 'warn').mockImplementation(() => {})
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

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

  describe('composable API', () => {
    it('renders children directly without a built-in header or body wrapper', () => {
      const { container } = render(
        <Dialog aria-labelledby="label" open>
          <Dialog.Header>
            <h1 id="label">Composable</h1>
          </Dialog.Header>
          <Dialog.Body>Body content</Dialog.Body>
        </Dialog>,
      )

      const dialog = screen.getByRole('dialog')
      const headers = container.querySelectorAll('header.ams-dialog__header')
      const bodies = container.querySelectorAll('div.ams-dialog__body')

      expect(dialog).toHaveAttribute('aria-labelledby', 'label')
      expect(headers).toHaveLength(1)
      expect(bodies).toHaveLength(1)
    })

    it('renders Dialog.Header, Dialog.Body, and Dialog.Footer with the right BEM classes', () => {
      render(
        <Dialog aria-labelledby="label" open>
          <Dialog.Header>
            <h1 id="label">Heading</h1>
          </Dialog.Header>
          <Dialog.Body>Body</Dialog.Body>
          <Dialog.Footer>
            <button>OK</button>
          </Dialog.Footer>
        </Dialog>,
      )

      expect(screen.getByRole('banner')).toHaveClass('ams-dialog__header')
      expect(screen.getByRole('contentinfo')).toHaveClass('ams-dialog__footer')
      expect(screen.getByText('Body').closest('div')).toHaveClass('ams-dialog__body')
    })

    it('renders Dialog.CloseButton with a default Sluiten label', () => {
      render(
        <Dialog aria-labelledby="label" open>
          <Dialog.Header>
            <h1 id="label">Heading</h1>
            <Dialog.CloseButton />
          </Dialog.Header>
        </Dialog>,
      )

      expect(screen.getByRole('button', { name: 'Sluiten' })).toBeInTheDocument()
    })

    it('does not warn when only the composable API is used', () => {
      const warnSpy = vi.spyOn(console, 'warn')

      render(
        <Dialog aria-labelledby="label" open>
          <Dialog.Header>
            <h1 id="label">Heading</h1>
          </Dialog.Header>
        </Dialog>,
      )

      expect(warnSpy).not.toHaveBeenCalled()
    })
  })

  describe('deprecation warnings', () => {
    it('warns when the heading prop is used', () => {
      const warnSpy = vi.spyOn(console, 'warn')

      render(<Dialog heading="Test heading" open />)

      expect(warnSpy).toHaveBeenCalledWith(expect.stringContaining('`heading` prop is deprecated'))
    })

    it('warns when the footer prop is used', () => {
      const warnSpy = vi.spyOn(console, 'warn')

      render(<Dialog footer={<button>OK</button>} heading="Test heading" open />)

      expect(warnSpy).toHaveBeenCalledWith(expect.stringContaining('`footer` prop is deprecated'))
    })

    it('warns when the closeButtonLabel prop is used', () => {
      const warnSpy = vi.spyOn(console, 'warn')

      render(<Dialog closeButtonLabel="Close" heading="Test heading" open />)

      expect(warnSpy).toHaveBeenCalledWith(expect.stringContaining('`closeButtonLabel` prop is deprecated'))
    })

    it('warns when the composable API is used without an accessible name', () => {
      const warnSpy = vi.spyOn(console, 'warn')

      render(
        <Dialog open>
          <Dialog.Header>
            <h1>Heading</h1>
          </Dialog.Header>
        </Dialog>,
      )

      expect(warnSpy).toHaveBeenCalledWith(expect.stringContaining('provide an accessible name'))
    })

    it('does not warn about the accessible name when aria-label is provided', () => {
      const warnSpy = vi.spyOn(console, 'warn')

      render(
        <Dialog aria-label="Heading" open>
          <Dialog.Header>
            <h1>Heading</h1>
          </Dialog.Header>
        </Dialog>,
      )

      expect(warnSpy).not.toHaveBeenCalledWith(expect.stringContaining('provide an accessible name'))
    })
  })

  describe('mixed legacy and composable usage', () => {
    it('renders only the body wrapper from heading; footer prop still works alongside', () => {
      const { container } = render(
        <Dialog footer={<button>Legacy footer</button>} heading="Legacy heading" open>
          <p>Content</p>
        </Dialog>,
      )

      // Legacy heading triggers built-in header AND body wrapper
      expect(container.querySelectorAll('div.ams-dialog__body')).toHaveLength(1)
      // Legacy footer prop renders its own footer
      expect(screen.getByRole('contentinfo')).toHaveTextContent('Legacy footer')
    })
  })
})

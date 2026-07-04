/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { renderToString } from 'react-dom/server'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

import { ModalDialog } from './ModalDialog'

/* jsdom does not implement `showModal` and `close` – https://github.com/jsdom/jsdom/issues/3294.
These mocks reflect their effect on the `open` attribute so the component logic can be tested. */
const showModalMock = vi.fn(function showModal(this: HTMLDialogElement) {
  this.setAttribute('open', '')
})

const closeMock = vi.fn(function close(this: HTMLDialogElement) {
  this.removeAttribute('open')
})

describe('ModalDialog', () => {
  beforeEach(() => {
    HTMLDialogElement.prototype.close = closeMock
    HTMLDialogElement.prototype.showModal = showModalMock
    vi.spyOn(console, 'warn').mockImplementation(() => {})
  })

  afterEach(() => {
    closeMock.mockClear()
    showModalMock.mockClear()
    vi.restoreAllMocks()
  })

  it('renders', () => {
    render(<ModalDialog open />)

    const component = screen.getByRole('dialog')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('is not visible without open', () => {
    render(<ModalDialog />)

    const component = screen.getByRole('dialog', { hidden: true })

    expect(component).not.toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    render(<ModalDialog open />)

    const component = screen.getByRole('dialog')

    expect(component).toHaveClass('ams-modal-dialog')
  })

  it('renders an extra class name', () => {
    render(<ModalDialog className="extra" open />)

    const component = screen.getByRole('dialog')

    expect(component).toHaveClass('ams-modal-dialog extra')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLDialogElement>()

    render(<ModalDialog open ref={ref} />)

    const component = screen.getByRole('dialog')

    expect(ref.current).toBe(component)
  })

  it('passes additional props', () => {
    render(<ModalDialog data-test="data-test" id="id" open />)

    const component = screen.getByRole('dialog')

    expect(component).toHaveAttribute('id', 'id')
    expect(component).toHaveAttribute('data-test', 'data-test')
  })

  it('renders children directly, without a wrapper', () => {
    const { container } = render(
      <ModalDialog open>
        <p>Content</p>
      </ModalDialog>,
    )

    expect(screen.getByText('Content')).toBeInTheDocument()
    expect(container.querySelector('.ams-modal-dialog__body')).not.toBeInTheDocument()
  })

  describe('controlled open state', () => {
    it('opens as a modal on mount when `open` is true', () => {
      render(<ModalDialog open />)

      expect(showModalMock).toHaveBeenCalledOnce()
    })

    it('opens as a modal when `open` becomes true', () => {
      const { rerender } = render(<ModalDialog open={false} />)

      expect(showModalMock).not.toHaveBeenCalled()

      rerender(<ModalDialog open />)

      expect(showModalMock).toHaveBeenCalledOnce()
    })

    it('closes when `open` becomes false', () => {
      const { rerender } = render(<ModalDialog open />)

      rerender(<ModalDialog open={false} />)

      expect(closeMock).toHaveBeenCalledOnce()
    })

    it('does not open or close the dialog when `open` is undefined', () => {
      render(<ModalDialog />)

      expect(showModalMock).not.toHaveBeenCalled()
      expect(closeMock).not.toHaveBeenCalled()
    })

    it('does not render the `open` attribute on the server', () => {
      const html = renderToString(<ModalDialog open />)

      expect(html).toContain('<dialog')
      expect(html).not.toContain('open=""')
    })
  })

  describe('accessible name', () => {
    it('warns when no accessible name is provided', () => {
      const warnSpy = vi.spyOn(console, 'warn')

      render(<ModalDialog />)

      expect(warnSpy).toHaveBeenCalledWith(expect.stringContaining('provide an accessible name'))
    })

    it('does not warn when `aria-label` is provided', () => {
      const warnSpy = vi.spyOn(console, 'warn')

      render(<ModalDialog aria-label="Titel" />)

      expect(warnSpy).not.toHaveBeenCalled()
    })

    it('does not warn when `aria-labelledby` is provided', () => {
      const warnSpy = vi.spyOn(console, 'warn')

      render(<ModalDialog aria-labelledby="heading-id" />)

      expect(warnSpy).not.toHaveBeenCalled()
    })
  })

  describe('static methods', () => {
    it('opens the dialog matching the selector with ModalDialog.open', () => {
      render(<ModalDialog id="modal-dialog-id" />)

      ModalDialog.open('#modal-dialog-id')

      expect(showModalMock).toHaveBeenCalledOnce()
    })

    it('does not throw when the selector matches nothing', () => {
      expect(() => ModalDialog.open('#does-not-exist')).not.toThrow()
    })

    it('closes the dialog containing the button with ModalDialog.close', async () => {
      render(
        <ModalDialog open>
          <button onClick={ModalDialog.close}>Stoppen</button>
        </ModalDialog>,
      )

      screen.getByRole('button', { name: 'Stoppen' }).click()

      expect(closeMock).toHaveBeenCalledOnce()
    })

    it('does not throw when the button is not inside a dialog', () => {
      render(<button onClick={ModalDialog.close}>Stoppen</button>)

      expect(() => screen.getByRole('button', { name: 'Stoppen' }).click()).not.toThrow()
      expect(closeMock).not.toHaveBeenCalled()
    })
  })
})

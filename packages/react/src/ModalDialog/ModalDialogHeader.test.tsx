/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { fireEvent, render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { describe, expect, it, vi } from 'vitest'

import { ModalDialogHeader } from './ModalDialogHeader'

describe('ModalDialogHeader', () => {
  it('renders', () => {
    const { container } = render(<ModalDialogHeader>Header content</ModalDialogHeader>)

    const component = container.querySelector('header')

    expect(component).toBeInTheDocument()
    expect(component).toHaveTextContent('Header content')
  })

  it('renders a design system BEM class name', () => {
    const { container } = render(<ModalDialogHeader />)

    const component = container.querySelector('header')

    expect(component).toHaveClass('ams-modal-dialog__header')
  })

  it('renders an extra class name', () => {
    const { container } = render(<ModalDialogHeader className="extra" />)

    const component = container.querySelector('header')

    expect(component).toHaveClass('ams-modal-dialog__header extra')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLElement>()

    const { container } = render(<ModalDialogHeader ref={ref} />)

    expect(ref.current).toBe(container.querySelector('header'))
  })

  it('passes additional props', () => {
    const { container } = render(<ModalDialogHeader data-test="data-test" id="id" />)

    const component = container.querySelector('header')

    expect(component).toHaveAttribute('id', 'id')
    expect(component).toHaveAttribute('data-test', 'data-test')
  })

  describe('close button', () => {
    it('renders a close button with the default accessible name', () => {
      render(<ModalDialogHeader />)

      expect(screen.getByRole('button', { name: 'Sluiten' })).toBeInTheDocument()
    })

    it('renders a custom accessible name', () => {
      render(<ModalDialogHeader closeButtonAccessibleName="Close" />)

      expect(screen.getByRole('button', { name: 'Close' })).toBeInTheDocument()
    })

    it('renders design system BEM class names', () => {
      render(<ModalDialogHeader />)

      expect(screen.getByRole('button')).toHaveClass('ams-icon-button ams-modal-dialog__close-button')
    })

    it('uses type button', () => {
      render(<ModalDialogHeader />)

      expect(screen.getByRole('button')).toHaveAttribute('type', 'button')
    })

    it('renders a custom icon', () => {
      const { container } = render(<ModalDialogHeader closeButtonIcon={<svg className="custom-icon" />} />)

      expect(container.querySelector('.custom-icon')).toBeInTheDocument()
    })

    it('renders after the content', () => {
      const { container } = render(
        <ModalDialogHeader>
          <h1>Titel</h1>
        </ModalDialogHeader>,
      )

      const header = container.querySelector('header')

      expect(header?.lastElementChild).toBe(screen.getByRole('button', { name: 'Sluiten' }))
    })

    it('closes the dialog containing the header on click', () => {
      const closeMock = vi.fn()
      HTMLDialogElement.prototype.close = closeMock

      render(
        <dialog open>
          <ModalDialogHeader />
        </dialog>,
      )

      fireEvent.click(screen.getByRole('button', { name: 'Sluiten' }))

      expect(closeMock).toHaveBeenCalledOnce()
    })
  })
})

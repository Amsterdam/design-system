/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { fireEvent, render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { describe, expect, it, vi } from 'vitest'

import { DialogCloseButton } from './DialogCloseButton'

describe('DialogCloseButton', () => {
  it('renders a button with the default Sluiten label', () => {
    render(<DialogCloseButton />)

    const component = screen.getByRole('button', { name: 'Sluiten' })

    expect(component).toBeInTheDocument()
  })

  it('renders a custom label', () => {
    render(<DialogCloseButton label="Close" />)

    expect(screen.getByRole('button', { name: 'Close' })).toBeInTheDocument()
  })

  it('renders the icon-button BEM class name', () => {
    render(<DialogCloseButton />)

    expect(screen.getByRole('button')).toHaveClass('ams-icon-button')
  })

  it('uses type="button" by default', () => {
    render(<DialogCloseButton />)

    expect(screen.getByRole('button')).toHaveAttribute('type', 'button')
  })

  it('closes the closest dialog ancestor on click', () => {
    const mockClose = vi.fn()
    render(
      <dialog data-testid="dialog" open>
        <DialogCloseButton />
      </dialog>,
    )

    const dialog = screen.getByTestId('dialog') as HTMLDialogElement
    dialog.close = mockClose

    fireEvent.click(screen.getByRole('button'))

    expect(mockClose).toHaveBeenCalled()
  })

  it('supports a custom onClick handler', () => {
    const onClick = vi.fn()
    render(<DialogCloseButton onClick={onClick} />)

    fireEvent.click(screen.getByRole('button'))

    expect(onClick).toHaveBeenCalled()
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLButtonElement>()

    render(<DialogCloseButton ref={ref} />)

    expect(ref.current).toBe(screen.getByRole('button'))
  })
})

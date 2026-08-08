/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { describe, expect, it } from 'vitest'

import { AlertDialogHeader } from './AlertDialogHeader'

describe('AlertDialogHeader', () => {
  it('renders', () => {
    render(<AlertDialogHeader>Header content</AlertDialogHeader>)

    const component = screen.getByRole('banner')

    expect(component).toBeInTheDocument()
    expect(component).toHaveTextContent('Header content')
  })

  it('renders a design system BEM class name', () => {
    render(<AlertDialogHeader />)

    const component = screen.getByRole('banner')

    expect(component).toHaveClass('ams-alert-dialog__header')
  })

  it('renders an extra class name', () => {
    render(<AlertDialogHeader className="extra" />)

    const component = screen.getByRole('banner')

    expect(component).toHaveClass('ams-alert-dialog__header extra')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLElement>()

    render(<AlertDialogHeader ref={ref} />)

    expect(ref.current).toBe(screen.getByRole('banner'))
  })

  it('passes additional props', () => {
    render(<AlertDialogHeader data-test="data-test" id="id" />)

    const component = screen.getByRole('banner')

    expect(component).toHaveAttribute('id', 'id')
    expect(component).toHaveAttribute('data-test', 'data-test')
  })

  it('does not render a close button', () => {
    render(<AlertDialogHeader />)

    expect(screen.queryByRole('button')).not.toBeInTheDocument()
  })

  describe('severity', () => {
    it('renders no icon or severity class by default', () => {
      render(<AlertDialogHeader />)

      const component = screen.getByRole('banner')

      expect(component).not.toHaveClass('ams-alert-dialog__header--with-icon')
      expect(component.querySelector('.ams-alert-dialog__icon')).not.toBeInTheDocument()
    })

    it('renders the severity icon before the content', () => {
      render(
        <AlertDialogHeader severity="warning">
          <h1>Titel</h1>
        </AlertDialogHeader>,
      )

      const component = screen.getByRole('banner')
      const icon = component.querySelector('.ams-alert-dialog__icon')

      expect(icon).toBeInTheDocument()
      expect(component.firstElementChild).toBe(icon)
    })

    it('adds the layout and severity modifier classes', () => {
      render(<AlertDialogHeader severity="error" />)

      const component = screen.getByRole('banner')

      expect(component).toHaveClass('ams-alert-dialog__header--with-icon')
      expect(component).toHaveClass('ams-alert-dialog__header--error')
    })

    it('applies the requested severity', () => {
      render(<AlertDialogHeader severity="success" />)

      expect(screen.getByRole('banner')).toHaveClass('ams-alert-dialog__header--success')
    })
  })
})

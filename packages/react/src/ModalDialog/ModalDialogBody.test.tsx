/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { describe, expect, it } from 'vitest'

import { ModalDialogBody } from './ModalDialogBody'

describe('ModalDialogBody', () => {
  it('renders', () => {
    const { container } = render(<ModalDialogBody>Body content</ModalDialogBody>)

    const component = container.querySelector(':only-child')

    expect(component).toBeInTheDocument()
    expect(component).toHaveTextContent('Body content')
  })

  it('renders a design system BEM class name', () => {
    const { container } = render(<ModalDialogBody />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-modal-dialog__body')
  })

  it('renders an extra class name', () => {
    const { container } = render(<ModalDialogBody className="extra" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-modal-dialog__body extra')
  })

  it('renders children', () => {
    render(
      <ModalDialogBody>
        <p>Inside body</p>
      </ModalDialogBody>,
    )

    expect(screen.getByText('Inside body')).toBeInTheDocument()
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLDivElement>()

    const { container } = render(<ModalDialogBody ref={ref} />)

    expect(ref.current).toBe(container.querySelector(':only-child'))
  })

  it('passes additional props', () => {
    const { container } = render(<ModalDialogBody data-test="data-test" id="id" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveAttribute('id', 'id')
    expect(component).toHaveAttribute('data-test', 'data-test')
  })
})

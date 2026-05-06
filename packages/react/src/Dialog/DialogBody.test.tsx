/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { describe, expect, it } from 'vitest'

import { DialogBody } from './DialogBody'

describe('DialogBody', () => {
  it('renders', () => {
    const { container } = render(<DialogBody>Body content</DialogBody>)

    const component = container.querySelector('div.ams-dialog__body')

    expect(component).toBeInTheDocument()
    expect(component).toHaveTextContent('Body content')
  })

  it('renders an extra class name', () => {
    const { container } = render(<DialogBody className="extra" />)

    const component = container.querySelector('div')

    expect(component).toHaveClass('ams-dialog__body extra')
  })

  it('renders children', () => {
    render(
      <DialogBody>
        <p>Inside body</p>
      </DialogBody>,
    )

    expect(screen.getByText('Inside body')).toBeInTheDocument()
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLDivElement>()

    const { container } = render(<DialogBody ref={ref} />)

    expect(ref.current).toBe(container.querySelector('div'))
  })

  it('passes additional props', () => {
    const { container } = render(<DialogBody data-test="data-test" id="id" />)

    const component = container.querySelector('div')

    expect(component).toHaveAttribute('id', 'id')
    expect(component).toHaveAttribute('data-test', 'data-test')
  })
})

import { render } from '@testing-library/react'
import { createRef } from 'react'
import { Dialog } from './Dialog'
import '@testing-library/jest-dom'

describe('Dialog', () => {
  it('renders', () => {
    const { container } = render(<Dialog />)

    const component = container.querySelector(':only-child')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    const { container } = render(<Dialog />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('amsterdam-modal')
  })

  it('can have a additional class name', () => {
    const { container } = render(<Dialog className="extra" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('extra')

    expect(component).toHaveClass('amsterdam-modal')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLDialogElement>()

    const { container } = render(<Dialog ref={ref} />)

    const component = container.querySelector(':only-child')

    expect(ref.current).toBe(component)
  })
})

import { render } from '@testing-library/react'
import { createRef } from 'react'
import '@testing-library/jest-dom'
import { Dialog } from './Dialog'

describe('Dialog Action Group', () => {
  it('renders', () => {
    const { container } = render(<Dialog.ActionGroup />)

    const component = container.querySelector(':only-child')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    const { container } = render(<Dialog.ActionGroup />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-dialog__action-group')
  })

  it('renders an additional class name', () => {
    const { container } = render(<Dialog.ActionGroup className="extra" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-dialog__action-group extra')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLElement>()

    const { container } = render(<Dialog.ActionGroup ref={ref} />)

    const component = container.querySelector(':only-child')

    expect(ref.current).toBe(component)
  })
})

import { render } from '@testing-library/react'
import { createRef } from 'react'
import { ActionGroup } from './ActionGroup'
import '@testing-library/jest-dom'

describe('Action group', () => {
  it('renders', () => {
    const { container } = render(<ActionGroup />)

    const component = container.querySelector(':only-child')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    const { container } = render(<ActionGroup />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-action-group')
  })

  it('renders an additional class name', () => {
    const { container } = render(<ActionGroup className="extra" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-action-group extra')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLDivElement>()

    const { container } = render(<ActionGroup ref={ref} />)

    const component = container.querySelector(':only-child')

    expect(ref.current).toBe(component)
  })
})

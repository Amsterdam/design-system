import { render } from '@testing-library/react'
import { createRef } from 'react'
import { Tabs } from './Tabs'
import '@testing-library/jest-dom'

describe('Tabs', () => {
  it('renders', () => {
    const { container } = render(<Tabs />)

    const component = container.querySelector(':only-child')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    const { container } = render(<Tabs />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('amsterdam-tabs')
  })

  it('renders an additional class name', () => {
    const { container } = render(<Tabs className="extra" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('amsterdam-tabs extra')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLElement>()

    const { container } = render(<Tabs ref={ref} />)

    const component = container.querySelector(':only-child')

    expect(ref.current).toBe(component)
  })
})

import { render } from '@testing-library/react'
import { createRef } from 'react'
import { Hint } from '.'
import '@testing-library/jest-dom'

describe('Hint', () => {
  it('renders', () => {
    const { container } = render(<Hint hint="hint" />)

    const component = container.querySelector(':only-child')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    const { container } = render(<Hint optional />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-hint')
  })

  it('renders an additional class name', () => {
    const { container } = render(<Hint optional className="extra" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-hint extra')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLElement>()

    const { container } = render(<Hint ref={ref} />)

    const component = container.querySelector(':only-child')

    expect(ref.current).toBe(component)
  })

  it('renders the provided hint text', () => {
    const { container } = render(<Hint hint="hint text" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveTextContent('(hint text)')
  })

  it('renders the default hint text', () => {
    const { container } = render(<Hint optional={true} />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveTextContent('(niet verplicht)')
  })

  it('renders the provided hint text when `optional` is set to `false`', () => {
    const { container } = render(<Hint optional={true} hint="not required" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveTextContent('(not required)')
  })

  it('renders the provided hint text "required" while also being marked as not optional', () => {
    const { container } = render(<Hint optional={false} hint="required" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveTextContent('(required)')
  })
})

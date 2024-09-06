import { render } from '@testing-library/react'
import { createRef } from 'react'
import { Hint } from '.'
import '@testing-library/jest-dom'

describe('Hint', () => {
  it('renders', () => {
    const { container } = render(<Hint />)

    const component = container.querySelector(':only-child')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    const { container } = render(<Hint />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-hint')
  })

  it('renders an additional class name', () => {
    const { container } = render(<Hint className="extra" />)

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

    const hint = container.querySelector('span.ams-hint')

    expect(hint).toHaveTextContent('(hint text)')
  })

  it('renders the default hint text', () => {
    const { container } = render(<Hint optional={true} />)

    const label = container.querySelector('label:only-child')

    expect(label).toHaveTextContent('Label (niet verplicht)')
  })

  it('renders the provided hint text when `optional` is set to `false`', () => {
    const { container } = render(<Hint optional={true} hint="not required" />)

    const label = container.querySelector('label:only-child')

    expect(label).toHaveTextContent('Label (not required)')
  })

  it('renders the provided hint text "required" marked as not optional', () => {
    const { container } = render(<Hint optional={false} hint="required" />)

    const label = container.querySelector('label:only-child')

    expect(label).toHaveTextContent('Label (required)')
  })
})

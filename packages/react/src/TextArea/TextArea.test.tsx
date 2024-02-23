import { render } from '@testing-library/react'
import { createRef } from 'react'
import { TextArea } from './TextArea'
import '@testing-library/jest-dom'

describe('Text area', () => {
  it('renders', () => {
    const { container } = render(<TextArea />)

    const component = container.querySelector(':only-child')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    const { container } = render(<TextArea />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('amsterdam-text-area')
  })

  it('renders an additional class name', () => {
    const { container } = render(<TextArea className="extra" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('amsterdam-text-area extra')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLTextAreaElement>()

    const { container } = render(<TextArea ref={ref} />)

    const component = container.querySelector(':only-child')

    expect(ref.current).toBe(component)
  })
})

import { render } from '@testing-library/react'
import { createRef } from 'react'
import { FileInput } from './FileInput'
import '@testing-library/jest-dom'

describe('File input', () => {
  it('renders', () => {
    const { container } = render(<FileInput />)

    const component = container.querySelector('input[type="file"]')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    const { container } = render(<FileInput />)

    const component = container.querySelector('input[type="file"]')

    expect(component).toHaveClass('ams-file-input')
  })

  it('renders an extra class name', () => {
    const { container } = render(<FileInput className="extra" />)

    const component = container.querySelector('input[type="file"]')

    expect(component).toHaveClass('ams-file-input extra')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLInputElement>()

    const { container } = render(<FileInput ref={ref} />)

    const component = container.querySelector('input[type="file"]')

    expect(ref.current).toBe(component)
  })
})

import { render } from '@testing-library/react'
import { createRef } from 'react'
import { FileList } from './FileList'
import '@testing-library/jest-dom'

describe('FileList', () => {
  it('renders', () => {
    const { container } = render(<FileList />)

    const component = container.querySelector(':only-child')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    const { container } = render(<FileList />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-file-list')
  })

  it('renders an additional class name', () => {
    const { container } = render(<FileList className="extra" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-file-list extra')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLDivElement>()

    const { container } = render(<FileList ref={ref} />)

    const component = container.querySelector(':only-child')

    expect(ref.current).toBe(component)
  })
})

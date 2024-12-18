import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { FileList } from './FileList'
import '@testing-library/jest-dom'

describe('FileList', () => {
  it('renders', () => {
    render(<FileList />)

    const component = screen.getByRole('list')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    render(<FileList />)

    const component = screen.getByRole('list')

    expect(component).toHaveClass('ams-file-list')
  })

  it('renders an additional class name', () => {
    render(<FileList className="extra" />)

    const component = screen.getByRole('list')

    expect(component).toHaveClass('ams-file-list extra')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLOListElement>()

    render(<FileList ref={ref} />)

    const component = screen.getByRole('list')

    expect(ref.current).toBe(component)
  })
})

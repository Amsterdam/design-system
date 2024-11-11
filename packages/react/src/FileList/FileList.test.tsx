import { fireEvent, render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { FileList } from './FileList'
import '@testing-library/jest-dom'

const files = [
  new File(['sample1'], 'sample1.txt', { type: 'text/plain', lastModified: Date.now() }),
] as unknown as FileList // This is a workaround because jest-dom does not support DataTransfer

describe('FileList', () => {
  it('renders', () => {
    const { container } = render(<FileList files={files} />)

    const component = container.querySelector(':only-child')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    const { container } = render(<FileList files={files} />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-file-list')
  })

  it('renders an additional class name', () => {
    const { container } = render(<FileList files={files} className="extra" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-file-list extra')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLDivElement>()

    const { container } = render(<FileList files={files} ref={ref} />)

    const component = container.querySelector(':only-child')

    expect(ref.current).toBe(component)
  })

  it('removes a file from the list', () => {
    const { container } = render(<FileList files={files} />)

    const button = screen.getByRole('button', {
      name: 'Verwijder',
    })

    fireEvent.click(button)

    const component = container.querySelector('.ams-file-list__file')

    expect(component).not.toBeInTheDocument()
  })
})

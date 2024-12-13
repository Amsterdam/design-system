import { fireEvent, render, screen } from '@testing-library/react'
import React, { createRef } from 'react'
import '@testing-library/jest-dom'
import { FileListItem } from './FileListItem'

describe('FileListItem', () => {
  const file = new File(['sample content'], 'sample.txt', { type: 'text/plain' })
  it('renders', () => {
    render(<FileListItem file={file} />)

    const component = screen.getByRole('listitem')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    render(<FileListItem file={file} />)

    const component = screen.getByRole('listitem')

    expect(component).toHaveClass('ams-file-list__item')
  })

  it('renders an additional class name', () => {
    render(<FileListItem file={file} className="extra" />)

    const component = screen.getByRole('listitem')

    expect(component).toHaveClass('ams-file-list__item extra')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLLIElement>()

    render(<FileListItem file={file} ref={ref} />)

    const component = screen.getByRole('listitem')

    expect(ref.current).toBe(component)
  })

  it('renders the file name', () => {
    render(<FileListItem file={file} />)

    expect(screen.getByText('sample.txt')).toBeInTheDocument()
  })

  it('calls onDelete when the remove button is clicked', () => {
    const onDelete = jest.fn()
    render(<FileListItem file={file} onDelete={onDelete} />)

    fireEvent.click(screen.getByRole('button'))

    expect(onDelete).toHaveBeenCalledTimes(1)
  })
})

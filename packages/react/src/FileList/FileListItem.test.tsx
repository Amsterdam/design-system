/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { fireEvent, render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { afterEach, describe, expect, it, vi } from 'vitest'

import { FileListItem } from './FileListItem'

describe('FileListItem', () => {
  const file = new File(['sample content'], 'sample.txt', { type: 'text/plain' })

  afterEach(() => {
    vi.restoreAllMocks()
  })

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

  it('renders an extra class name', () => {
    render(<FileListItem className="extra" file={file} />)

    const component = screen.getByRole('listitem')

    expect(component).toHaveClass('ams-file-list__item extra')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLLIElement>()

    render(<FileListItem file={file} ref={ref} />)

    const component = screen.getByRole('listitem')

    expect(ref.current).toBe(component)
  })

  it('renders the file name and details', () => {
    render(<FileListItem file={file} />)

    expect(screen.getByText('sample.txt')).toBeInTheDocument()
    expect(screen.getByText('(txt, 14 bytes)')).toBeInTheDocument()
  })

  it('calls onDelete when the remove button is clicked', () => {
    const onDelete = vi.fn()

    render(<FileListItem file={file} onDelete={onDelete} />)

    fireEvent.click(screen.getByRole('button'))

    expect(onDelete).toHaveBeenCalledTimes(1)
  })

  it('renders an image preview for image files', () => {
    vi.spyOn(URL, 'createObjectURL').mockReturnValue('blob:test')

    const imageFile = new File(['image content'], 'photo.png', { type: 'image/png' })

    render(<FileListItem file={imageFile} />)

    expect(screen.getByAltText('')).toHaveAttribute('src', 'blob:test')
  })

  it('releases the preview URL when the item unmounts', () => {
    vi.spyOn(URL, 'createObjectURL').mockReturnValue('blob:test')

    const revokeObjectURL = vi.spyOn(URL, 'revokeObjectURL').mockImplementation(() => {})
    const imageFile = new File(['image content'], 'photo.png', { type: 'image/png' })
    const { unmount } = render(<FileListItem file={imageFile} />)

    unmount()

    expect(revokeObjectURL).toHaveBeenCalledWith('blob:test')
  })

  it('releases the old preview URL and creates a new one when the file changes', () => {
    const createObjectURL = vi
      .spyOn(URL, 'createObjectURL')
      .mockReturnValueOnce('blob:first')
      .mockReturnValueOnce('blob:second')

    const revokeObjectURL = vi.spyOn(URL, 'revokeObjectURL').mockImplementation(() => {})
    const firstImageFile = new File(['first image'], 'first.png', { type: 'image/png' })
    const secondImageFile = new File(['second image'], 'second.png', { type: 'image/png' })
    const { rerender } = render(<FileListItem file={firstImageFile} />)

    rerender(<FileListItem file={secondImageFile} />)

    expect(createObjectURL).toHaveBeenCalledTimes(2)
    expect(revokeObjectURL).toHaveBeenCalledWith('blob:first')
    expect(screen.getByAltText('')).toHaveAttribute('src', 'blob:second')
  })

  it('creates no preview URL for a non-image file and shows the document icon', () => {
    const createObjectURL = vi.spyOn(URL, 'createObjectURL').mockReturnValue('blob:test')
    const revokeObjectURL = vi.spyOn(URL, 'revokeObjectURL').mockImplementation(() => {})
    const { container } = render(<FileListItem file={file} />)

    expect(createObjectURL).not.toHaveBeenCalled()
    expect(revokeObjectURL).not.toHaveBeenCalled()
    expect(screen.queryByAltText('')).not.toBeInTheDocument()
    expect(container.querySelector('.ams-file-card__preview svg')).toBeInTheDocument()
  })

  it('passes additional props', () => {
    render(<FileListItem aria-hidden="false" data-test="data-test" file={file} id="id" />)

    const component = screen.getByRole('listitem')

    expect(component).toHaveAttribute('aria-hidden', 'false')
    expect(component).toHaveAttribute('id', 'id')
    expect(component).toHaveAttribute('data-test', 'data-test')
  })
})

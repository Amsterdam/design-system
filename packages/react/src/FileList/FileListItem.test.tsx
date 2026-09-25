/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { fireEvent, render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

import { FileCard } from '../FileCard/FileCard'
import { FileListItem } from './FileListItem'

describe('FileListItem', () => {
  it('renders', () => {
    render(<FileListItem />)

    const component = screen.getByRole('listitem')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    render(<FileListItem />)

    const component = screen.getByRole('listitem')

    expect(component).toHaveClass('ams-file-list__item')
  })

  it('renders an extra class name', () => {
    render(<FileListItem className="extra" />)

    const component = screen.getByRole('listitem')

    expect(component).toHaveClass('ams-file-list__item extra')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLLIElement>()

    render(<FileListItem ref={ref} />)

    const component = screen.getByRole('listitem')

    expect(ref.current).toBe(component)
  })

  it('passes additional props', () => {
    render(<FileListItem aria-hidden="false" data-test="data-test" id="id" />)

    const component = screen.getByRole('listitem')

    expect(component).toHaveAttribute('aria-hidden', 'false')
    expect(component).toHaveAttribute('id', 'id')
    expect(component).toHaveAttribute('data-test', 'data-test')
  })

  it('renders its children', () => {
    render(
      <FileListItem>
        <FileCard name="besluit.pdf" />
      </FileListItem>,
    )

    expect(screen.getByText('besluit.pdf')).toBeInTheDocument()
  })

  describe('deprecated props', () => {
    const file = new File(['sample content'], 'sample.txt', { type: 'text/plain' })

    let warn: ReturnType<typeof vi.spyOn>

    beforeEach(() => {
      warn = vi.spyOn(console, 'warn').mockImplementation(() => {})
    })

    afterEach(() => {
      warn.mockRestore()
    })

    it('renders a File Card for the file', () => {
      render(<FileListItem file={file} />)

      expect(screen.getByText('sample.txt')).toBeInTheDocument()
      expect(screen.getByText('(txt, 14 bytes)')).toBeInTheDocument()
    })

    it('calls onDelete when the delete button is activated', () => {
      const onDelete = vi.fn()

      render(<FileListItem file={file} onDelete={onDelete} />)

      fireEvent.click(screen.getByRole('button'))

      expect(onDelete).toHaveBeenCalledTimes(1)
    })

    it('warns that the props have been replaced', () => {
      render(<FileListItem file={file} />)

      expect(warn).toHaveBeenCalledWith(expect.stringContaining('@deprecated'))
      expect(warn).toHaveBeenCalledWith(expect.stringContaining('Render a File Card as a child instead.'))
    })

    it('does not warn without them', () => {
      render(
        <FileListItem>
          <FileCard name="besluit.pdf" />
        </FileListItem>,
      )

      expect(warn).not.toHaveBeenCalled()
    })

    it('lets the children win, and says so', () => {
      render(
        <FileListItem file={file}>
          <FileCard name="besluit.pdf" />
        </FileListItem>,
      )

      expect(screen.getByText('besluit.pdf')).toBeInTheDocument()
      expect(screen.queryByText('sample.txt')).not.toBeInTheDocument()
      expect(warn).toHaveBeenCalledWith(expect.stringContaining('take precedence'))
    })
  })
})

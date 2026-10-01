/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { fireEvent, render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { describe, expect, it, vi } from 'vitest'

import { FileCard } from './FileCard'

describe('FileCard', () => {
  it('renders', () => {
    const { container } = render(<FileCard name="besluit.pdf" />)

    const component = container.querySelector(':only-child')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    const { container } = render(<FileCard name="besluit.pdf" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-file-card')
  })

  it('renders an extra class name', () => {
    const { container } = render(<FileCard className="extra" name="besluit.pdf" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-file-card extra')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLDivElement>()

    const { container } = render(<FileCard name="besluit.pdf" ref={ref} />)

    const component = container.querySelector(':only-child')

    expect(ref.current).toBe(component)
  })

  it('passes additional props', () => {
    const { container } = render(<FileCard data-test="data-test" id="id" name="besluit.pdf" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveAttribute('id', 'id')
    expect(component).toHaveAttribute('data-test', 'data-test')
  })

  it('renders the name of the file', () => {
    render(<FileCard name="besluit.pdf" />)

    expect(screen.getByText('besluit.pdf')).toBeInTheDocument()
  })

  it('renders the type and size metadata in Dutch by default', () => {
    render(<FileCard name="besluit.pdf" size={1536000} type="application/pdf" />)

    expect(screen.getByText('(pdf, 1,5 MB)')).toBeInTheDocument()
  })

  it('renders the name and metadata as separate blocks, so they stay apart without CSS', () => {
    render(<FileCard name="besluit.pdf" size={1536000} type="application/pdf" />)

    expect(screen.getByText('besluit.pdf').tagName).toBe('DIV')
    expect(screen.getByText('(pdf, 1,5 MB)').tagName).toBe('DIV')
  })

  it('renders the metadata returned by a formatter of the consumer', () => {
    render(
      <FileCard
        formatMetadataText={({ size, type }) => `${type} – ${size} bytes`}
        name="besluit.pdf"
        size={1536000}
        type="application/pdf"
      />,
    )

    expect(screen.getByText('application/pdf – 1536000 bytes')).toBeInTheDocument()
  })

  it('renders no metadata element when neither the type nor the size is known', () => {
    const { container } = render(<FileCard name="besluit.pdf" />)

    expect(container.querySelector('.ams-file-card__metadata')).not.toBeInTheDocument()
  })

  it('renders the preview as a decorative image', () => {
    const { container } = render(<FileCard name="pasfoto.png" previewUrl="blob:preview" type="image/png" />)

    const image = container.querySelector('img')

    expect(image).toHaveAttribute('alt', '')
    expect(image).toHaveAttribute('src', 'blob:preview')
    expect(image).toHaveClass('ams-file-card__image')
    expect(screen.queryByRole('img')).not.toBeInTheDocument()
  })

  it('falls back to the generic document icon without a preview', () => {
    const { container } = render(<FileCard name="besluit.pdf" type="application/pdf" />)

    expect(container.querySelector('img')).not.toBeInTheDocument()
    expect(container.querySelector('.ams-file-card__preview svg')).toBeInTheDocument()
  })

  it('renders no actions without an action prop or an onDelete callback', () => {
    render(<FileCard name="besluit.pdf" />)

    expect(screen.queryByRole('button')).not.toBeInTheDocument()
    expect(document.querySelector('.ams-file-card__actions')).not.toBeInTheDocument()
  })

  it('renders custom actions', () => {
    render(<FileCard actions={<button type="button">Download</button>} name="besluit.pdf" />)

    expect(screen.getByRole('button', { name: 'Download' })).toBeInTheDocument()
  })

  it('renders custom actions beside the built-in delete button', () => {
    render(<FileCard actions={<button type="button">Download</button>} name="besluit.pdf" onDelete={() => {}} />)

    expect(screen.getByRole('button', { name: 'Download' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Verwijder besluit.pdf' })).toBeInTheDocument()
  })

  it('calls onDelete when the delete button is activated', () => {
    const onDelete = vi.fn()

    render(<FileCard name="besluit.pdf" onDelete={onDelete} />)

    fireEvent.click(screen.getByRole('button'))

    expect(onDelete).toHaveBeenCalledTimes(1)
  })

  it('names the delete button after the file it removes, without displaying that name twice', () => {
    render(<FileCard name="besluit.pdf" onDelete={() => {}} />)

    const button = screen.getByRole('button', { name: 'Verwijder besluit.pdf' })

    expect(button).toHaveTextContent('Verwijder besluit.pdf')
    expect(button.querySelector('.ams-visually-hidden')).toHaveTextContent('besluit.pdf')
  })

  it('renders the delete button label of the consumer', () => {
    render(<FileCard deleteButtonLabel="Verwijderen" name="besluit.pdf" onDelete={() => {}} />)

    expect(screen.getByRole('button', { name: 'Verwijderen besluit.pdf' })).toBeInTheDocument()
  })

  describe('moving focus after a delete', () => {
    const getList = (
      names: string[],
      {
        keyByIndex = false,
        onDelete = () => {},
        withActions = false,
      }: {
        keyByIndex?: boolean
        onDelete?: (name: string) => void
        withActions?: boolean
      } = {},
    ) => (
      <ul>
        {names.map((name, index) => (
          <li key={keyByIndex ? index : name}>
            <FileCard
              actions={withActions ? <button type="button">Download</button> : undefined}
              name={name}
              onDelete={() => onDelete(name)}
            />
          </li>
        ))}
      </ul>
    )

    it('moves focus to the delete button of the next file', () => {
      const onDelete = vi.fn()
      const { rerender } = render(getList(['eerste.pdf', 'tweede.pdf', 'derde.pdf'], { onDelete }))

      const button = screen.getByRole('button', { name: 'Verwijder tweede.pdf' })

      button.focus()
      fireEvent.click(button)
      rerender(getList(['eerste.pdf', 'derde.pdf'], { onDelete }))

      expect(onDelete).toHaveBeenCalledWith('tweede.pdf')
      expect(screen.getByRole('button', { name: 'Verwijder derde.pdf' })).toHaveFocus()
    })

    it('moves focus to the delete button of the previous file when the last one is removed', () => {
      const onDelete = vi.fn()
      const { rerender } = render(getList(['eerste.pdf', 'tweede.pdf', 'derde.pdf'], { onDelete }))

      const button = screen.getByRole('button', { name: 'Verwijder derde.pdf' })

      button.focus()
      fireEvent.click(button)
      rerender(getList(['eerste.pdf', 'tweede.pdf'], { onDelete }))

      expect(onDelete).toHaveBeenCalledWith('derde.pdf')
      expect(screen.getByRole('button', { name: 'Verwijder tweede.pdf' })).toHaveFocus()
    })

    it('keeps focus on the delete button when onDelete leaves the file in place', () => {
      const onDelete = vi.fn()

      render(getList(['eerste.pdf'], { onDelete }))

      const button = screen.getByRole('button', { name: 'Verwijder eerste.pdf' })

      button.focus()
      fireEvent.click(button)

      expect(onDelete).toHaveBeenCalledWith('eerste.pdf')
      expect(button).toHaveFocus()
    })

    it('keeps focus where it is when the removed file was not focused', () => {
      const onDelete = vi.fn()
      const getView = (names: string[]) => (
        <>
          <button type="button">Ergens anders</button>
          {getList(names, { onDelete })}
        </>
      )

      const { rerender } = render(getView(['eerste.pdf', 'tweede.pdf', 'derde.pdf']))

      const otherButton = screen.getByRole('button', { name: 'Ergens anders' })

      otherButton.focus()
      fireEvent.click(screen.getByRole('button', { name: 'Verwijder tweede.pdf' }))
      rerender(getView(['eerste.pdf', 'derde.pdf']))

      expect(onDelete).toHaveBeenCalledWith('tweede.pdf')
      expect(screen.getByRole('button', { name: 'Ergens anders' })).toHaveFocus()
    })

    it('moves focus to the next file when the list is keyed by index', () => {
      const onDelete = vi.fn()
      const { rerender } = render(getList(['eerste.pdf', 'tweede.pdf', 'derde.pdf'], { keyByIndex: true, onDelete }))

      const button = screen.getByRole('button', { name: 'Verwijder tweede.pdf' })

      button.focus()
      fireEvent.click(button)
      rerender(getList(['eerste.pdf', 'derde.pdf'], { keyByIndex: true, onDelete }))

      expect(screen.getByRole('button', { name: 'Verwijder derde.pdf' })).toHaveFocus()
    })

    it('does not move focus when a File Card re-renders with a new onDelete', () => {
      const { rerender } = render(getList(['eerste.pdf', 'tweede.pdf', 'derde.pdf'], { onDelete: vi.fn() }))

      const button = screen.getByRole('button', { name: 'Verwijder tweede.pdf' })

      button.focus()
      rerender(getList(['eerste.pdf', 'tweede.pdf', 'derde.pdf'], { onDelete: vi.fn() }))

      expect(screen.getByRole('button', { name: 'Verwijder tweede.pdf' })).toHaveFocus()
    })

    it('still finds the next delete button when other action buttons are present', () => {
      const onDelete = vi.fn()
      const { rerender } = render(getList(['eerste.pdf', 'tweede.pdf', 'derde.pdf'], { onDelete, withActions: true }))

      const button = screen.getByRole('button', { name: 'Verwijder tweede.pdf' })

      button.focus()
      fireEvent.click(button)
      rerender(getList(['eerste.pdf', 'derde.pdf'], { onDelete, withActions: true }))

      expect(screen.getByRole('button', { name: 'Verwijder derde.pdf' })).toHaveFocus()
    })

    it('leaves focus alone for a File Card outside a list', () => {
      const { rerender } = render(<FileCard name="besluit.pdf" onDelete={() => {}} />)

      const button = screen.getByRole('button', { name: 'Verwijder besluit.pdf' })

      button.focus()
      fireEvent.click(button)
      rerender(<></>)

      expect(document.body).toHaveFocus()
    })
  })
})

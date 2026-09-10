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

  it('renders the type and size in Dutch by default', () => {
    render(<FileCard name="besluit.pdf" size={1536000} type="application/pdf" />)

    expect(screen.getByText('(pdf, 1,5 MB)')).toBeInTheDocument()
  })

  it('renders the details returned by a formatter of the consumer', () => {
    render(
      <FileCard
        formatDetailsText={({ size, type }) => `${type} – ${size} bytes`}
        name="besluit.pdf"
        size={1536000}
        type="application/pdf"
      />,
    )

    expect(screen.getByText('application/pdf – 1536000 bytes')).toBeInTheDocument()
  })

  it('renders no details element when neither the type nor the size is known', () => {
    const { container } = render(<FileCard name="besluit.pdf" />)

    expect(container.querySelector('.ams-file-card__details')).not.toBeInTheDocument()
  })

  it('renders the preview as a decorative image', () => {
    const { container } = render(<FileCard name="pasfoto.png" previewUrl="blob:preview" type="image/png" />)

    const image = container.querySelector('img')

    expect(image).toHaveAttribute('alt', '')
    expect(image).toHaveAttribute('src', 'blob:preview')
    expect(screen.queryByRole('img')).not.toBeInTheDocument()
  })

  it('falls back to the generic document icon without a preview', () => {
    const { container } = render(<FileCard name="besluit.pdf" type="application/pdf" />)

    expect(container.querySelector('img')).not.toBeInTheDocument()
    expect(container.querySelector('.ams-file-card__preview svg')).toBeInTheDocument()
  })

  it('renders no delete button without an onDelete callback', () => {
    render(<FileCard name="besluit.pdf" />)

    expect(screen.queryByRole('button')).not.toBeInTheDocument()
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
    const renderList = (names: string[]) =>
      render(
        <ul>
          {names.map((name) => (
            <li key={name}>
              <FileCard name={name} onDelete={() => {}} />
            </li>
          ))}
        </ul>,
      )

    it('moves focus to the delete button of the next file', () => {
      renderList(['eerste.pdf', 'tweede.pdf', 'derde.pdf'])

      fireEvent.click(screen.getByRole('button', { name: 'Verwijder tweede.pdf' }))

      expect(screen.getByRole('button', { name: 'Verwijder derde.pdf' })).toHaveFocus()
    })

    it('moves focus to the delete button of the previous file when the last one is removed', () => {
      renderList(['eerste.pdf', 'tweede.pdf', 'derde.pdf'])

      fireEvent.click(screen.getByRole('button', { name: 'Verwijder derde.pdf' }))

      expect(screen.getByRole('button', { name: 'Verwijder tweede.pdf' })).toHaveFocus()
    })

    it('leaves focus alone when the File Card is not part of a list', () => {
      render(<FileCard name="besluit.pdf" onDelete={() => {}} />)

      const button = screen.getByRole('button')

      fireEvent.click(button)

      expect(button).not.toHaveFocus()
    })
  })
})

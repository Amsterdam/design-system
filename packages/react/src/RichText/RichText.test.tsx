/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { fireEvent, render, screen } from '@testing-library/react'

import type { richTextAllowedElements } from './RichText'

import { RichText } from './RichText'

describe('RichText', () => {
  it('renders an editable textbox', () => {
    render(<RichText aria-label="Rijke tekst" />)

    const textbox = screen.getByRole('textbox')

    expect(textbox).toBeInTheDocument()
    expect(textbox).toHaveAttribute('contenteditable', 'true')
  })

  it('renders with a design system BEM class name', () => {
    render(<RichText aria-label="Rijke tekst" />)

    const textbox = screen.getByRole('textbox')

    expect(textbox.parentElement).toHaveClass('ams-rich-text')
  })

  it('sanitizes initial HTML value to allowed elements', () => {
    render(
      <RichText
        aria-label="Rijke tekst"
        defaultValue={'<p>Hallo <strong>wereld</strong><script>alert(1)</script></p>'}
      />,
    )

    const textbox = screen.getByRole('textbox') as HTMLDivElement

    expect(textbox.innerHTML).toContain('<p>Hallo <strong>wereld</strong></p>')
    expect(textbox.innerHTML).not.toContain('<script>')
  })

  it('calls onChange with sanitized HTML when the user types', () => {
    const handleChange = jest.fn()

    render(<RichText aria-label="Rijke tekst" onChange={handleChange} />)

    const textbox = screen.getByRole('textbox') as HTMLDivElement

    fireEvent.input(textbox, { target: { innerHTML: '<p>Hallo <em>wereld</em></p>' } })

    expect(handleChange).toHaveBeenCalledWith('<p>Hallo <em>wereld</em></p>')
  })

  it('honours the allowedElements prop', () => {
    const allowed: typeof richTextAllowedElements = [
      'p',
      'strong',
      'em',
      'a',
      'ul',
      'ol',
      'li',
      'h2',
      'h3',
      'h4',
      'blockquote',
      'small',
      'mark',
      'br',
    ]

    render(
      <RichText
        allowedElements={allowed}
        aria-label="Rijke tekst"
        defaultValue={'<p>Hallo <strong>wereld</strong></p>'}
      />,
    )

    const textbox = screen.getByRole('textbox') as HTMLDivElement

    expect(textbox.innerHTML).toBe('<p>Hallo <strong>wereld</strong></p>')
  })

  it('can be disabled', () => {
    render(<RichText aria-label="Rijke tekst" disabled />)

    const textbox = screen.getByRole('textbox')

    expect(textbox).toHaveAttribute('contenteditable', 'false')
  })
})

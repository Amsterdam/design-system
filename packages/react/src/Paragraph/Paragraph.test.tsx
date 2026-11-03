/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { describe, expect, it } from 'vitest'

import { Paragraph } from './Paragraph'

describe('Paragraph', () => {
  it('renders an HTML p element', () => {
    render(<Paragraph />)

    const paragraph = screen.getByRole('paragraph')

    expect(paragraph).toBeInTheDocument()
  })

  it('renders a block element', () => {
    render(<Paragraph />)

    const paragraph = screen.getByRole('paragraph')

    expect(paragraph).toHaveStyle({ display: 'block' })
  })

  it('renders a design system BEM class name', () => {
    render(<Paragraph />)

    const paragraph = screen.getByRole('paragraph')

    expect(paragraph).toHaveClass('ams-paragraph')
  })

  it('renders rich text content', () => {
    render(
      <Paragraph>
        Hello, <strong>world</strong>
      </Paragraph>,
    )

    const paragraph = screen.getByRole('paragraph')
    const strong = paragraph?.querySelector('strong')

    expect(strong).toBeInTheDocument()
  })

  it('is a default paragraph without specifying props', () => {
    render(<Paragraph />)

    const paragraph = screen.getByRole('paragraph')

    expect(paragraph).not.toHaveClass('ams-paragraph--large')
    expect(paragraph).not.toHaveClass('ams-paragraph--small')
  })

  it('renders the large size class', () => {
    render(<Paragraph size="large">Large paragraph</Paragraph>)

    const paragraph = screen.getByRole('paragraph')

    expect(paragraph).toHaveClass('ams-paragraph--large')
  })

  it('renders a <b> element for a large paragraph', () => {
    render(<Paragraph size="large">Large text</Paragraph>)

    const paragraph = screen.getByRole('paragraph')
    const bold = paragraph?.querySelector('b')

    expect(bold).toBeInTheDocument()
    expect(bold).toHaveClass('ams-paragraph__b')
  })

  it('renders the small size class', () => {
    render(<Paragraph size="small">Small paragraph</Paragraph>)

    const paragraph = screen.getByRole('paragraph')

    expect(paragraph).toHaveClass('ams-paragraph--small')
  })

  it('renders a <small> element for a small paragraph', () => {
    render(<Paragraph size="small">Small text</Paragraph>)

    const paragraph = screen.getByRole('paragraph')
    const small = paragraph?.querySelector('small')

    expect(small).toBeInTheDocument()
    expect(small).toHaveClass('ams-paragraph__small')
  })

  it('renders the class name for inverse color', () => {
    render(<Paragraph color="inverse">Paragraph</Paragraph>)

    const paragraph = screen.getByRole('paragraph')

    expect(paragraph).toHaveClass('ams-paragraph--inverse')
  })

  it('renders an extra class name', () => {
    render(<Paragraph className="intro" />)

    const paragraph = screen.getByRole('paragraph')

    expect(paragraph).toHaveClass('intro')
    expect(paragraph).toHaveClass('ams-paragraph')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLParagraphElement>()

    render(<Paragraph ref={ref} />)
    const paragraph = screen.getByRole('paragraph')

    expect(ref.current).toBe(paragraph)
  })

  it('passes additional props', () => {
    render(<Paragraph aria-hidden={false} data-test="data-test" id="id" />)

    const paragraph = screen.getByRole('paragraph')

    expect(paragraph).toHaveAttribute('aria-hidden', 'false')
    expect(paragraph).toHaveAttribute('id', 'id')
    expect(paragraph).toHaveAttribute('data-test', 'data-test')
  })
})

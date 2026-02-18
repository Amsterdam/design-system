/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { render, screen } from '@testing-library/react'
import { createRef } from 'react'

import { Blockquote } from './Blockquote'

describe('Blockquote', () => {
  it('renders a blockquote HTML element', () => {
    render(<Blockquote />)

    const quote = screen.getByRole('blockquote')

    expect(quote).toBeInTheDocument()
    expect(quote).toBeVisible()
  })

  it('renders its content', () => {
    render(<Blockquote>Quote</Blockquote>)

    const quote = screen.getByText('Quote')

    expect(quote).toBeInTheDocument()
    expect(quote).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    render(<Blockquote />)

    const quote = screen.getByRole('blockquote')

    expect(quote).toHaveClass('ams-blockquote')
  })

  it('renders an extra class name', () => {
    render(<Blockquote className="extra" />)

    const quote = screen.getByRole('blockquote')

    expect(quote).toHaveClass('ams-blockquote extra')
  })

  it('renders the class name for inverse color', () => {
    render(<Blockquote color="inverse" />)

    const quote = screen.getByRole('blockquote')

    expect(quote).toHaveClass('ams-blockquote--inverse')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLQuoteElement>()

    render(<Blockquote ref={ref} />)

    const quote = screen.getByRole('blockquote')

    expect(ref.current).toBe(quote)
  })

  it('passes additional props', () => {
    render(<Blockquote aria-hidden={false} data-test="data-test" id="id" />)

    const quote = screen.getByRole('blockquote')

    expect(quote).toHaveAttribute('aria-hidden', 'false')
    expect(quote).toHaveAttribute('id', 'id')
    expect(quote).toHaveAttribute('data-test', 'data-test')
  })
})

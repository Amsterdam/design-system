import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { Blockquote } from './Blockquote'
import '@testing-library/jest-dom'

describe('Blockquote', () => {
  it('renders a blockquote HTML element', () => {
    const { container } = render(<Blockquote />)

    // TODO: Testing library doesn't seem to recognize the 'blockquote' ARIA role?
    // const quote = screen.getByRole('blockquote')

    const quote = container.querySelector('blockquote:only-child')

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
    const { container } = render(<Blockquote />)

    const quote = container.querySelector(':only-child')

    expect(quote).toHaveClass('ams-blockquote')
  })

  it('renders an extra class name', () => {
    const { container } = render(<Blockquote className="extra" />)

    const quote = container.querySelector(':only-child')

    expect(quote).toHaveClass('ams-blockquote extra')
  })

  it('renders the class name for inverse color', () => {
    const { container } = render(<Blockquote color="inverse" />)

    const quote = container.querySelector(':only-child')

    expect(quote).toHaveClass('ams-blockquote--inverse')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLQuoteElement>()

    const { container } = render(<Blockquote ref={ref} />)

    const quote = container.querySelector(':only-child')

    expect(ref.current).toBe(quote)
  })
})

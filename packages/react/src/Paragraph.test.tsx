import { render } from '@testing-library/react'
import { createRef } from 'react'
import { Paragraph } from './Paragraph'
import '@testing-library/jest-dom'

describe('Paragraph', () => {
  it('renders an HTML p element', () => {
    const { container } = render(<Paragraph />)

    const paragraph = container.querySelector('p:only-child')

    expect(paragraph).toBeInTheDocument()
  })

  it('renders a block element', () => {
    const { container } = render(<Paragraph />)

    const paragraph = container.querySelector(':only-child')

    expect(paragraph).toHaveStyle({ display: 'block' })
  })

  it('renders a design system BEM class name', () => {
    const { container } = render(<Paragraph />)

    const paragraph = container.querySelector(':only-child')

    expect(paragraph).toHaveClass('amsterdam-paragraph')
  })

  it('renders rich text content', () => {
    const { container } = render(
      <Paragraph>
        Hello, <strong>world</strong>
      </Paragraph>,
    )

    const paragraph = container.querySelector(':only-child')

    const richText = paragraph?.querySelector('strong')

    expect(richText).toBeInTheDocument()
  })

  it('is not an intro paragraph variant by default', () => {
    const { container } = render(<Paragraph />)

    const paragraph = container.querySelector(':only-child')

    expect(paragraph).not.toHaveClass('amsterdam-paragraph-intro')
  })

  it('has an intro paragraph variant', () => {
    const { container } = render(<Paragraph variant="intro" />)

    const leadParagraph = container.querySelector(':only-child')

    expect(leadParagraph).toHaveClass('amsterdam-paragraph-intro')
  })

  it('can have a custom class name', () => {
    const { container } = render(<Paragraph className="intro" />)

    const paragraph = container.querySelector(':only-child')

    expect(paragraph).toHaveClass('intro')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLParagraphElement>()

    const { container } = render(<Paragraph ref={ref} />)

    const paragraph = container.querySelector(':only-child')

    expect(ref.current).toBe(paragraph)
  })
})

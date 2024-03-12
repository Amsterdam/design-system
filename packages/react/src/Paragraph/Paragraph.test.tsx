import { render, screen } from '@testing-library/react'
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

    expect(paragraph).toHaveClass('ams-paragraph')
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

  it('is a default paragraph without specifying props', () => {
    const { container } = render(<Paragraph />)

    const paragraph = container.querySelector(':only-child')

    expect(paragraph).not.toHaveClass('ams-paragraph--large')
    expect(paragraph).not.toHaveClass('ams-paragraph--small')
  })

  it('renders the right size classes', () => {
    render(
      <>
        <Paragraph size="small">Small paragraph</Paragraph>
        <Paragraph size="large">Large paragraph</Paragraph>
      </>,
    )

    const smallParagraph = screen.getByText('Small paragraph')
    const largeParagraph = screen.getByText('Large paragraph')

    expect(smallParagraph).toHaveClass('ams-paragraph--small')
    expect(largeParagraph).toHaveClass('ams-paragraph--large')
  })

  it('renders the right inverse color class', () => {
    render(<Paragraph inverseColor>Paragraph</Paragraph>)

    const paragraph = screen.getByText('Paragraph')

    expect(paragraph).toHaveClass('ams-paragraph--inverse-color')
  })

  it('renders an additional class name', () => {
    const { container } = render(<Paragraph className="intro" />)

    const paragraph = container.querySelector(':only-child')

    expect(paragraph).toHaveClass('intro')

    expect(paragraph).toHaveClass('ams-paragraph')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLParagraphElement>()

    const { container } = render(<Paragraph ref={ref} />)

    const paragraph = container.querySelector(':only-child')

    expect(ref.current).toBe(paragraph)
  })
})

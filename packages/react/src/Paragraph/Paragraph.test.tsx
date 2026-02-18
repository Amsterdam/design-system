/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { render } from '@testing-library/react'
import { createRef } from 'react'

import { Paragraph } from './Paragraph'

describe('Paragraph', () => {
  it('renders an HTML p element', () => {
    const { container } = render(<Paragraph />)

    const paragraph = container.querySelector(':only-child')

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
    const strong = paragraph?.querySelector('strong')

    expect(strong).toBeInTheDocument()
  })

  it('is a default paragraph without specifying props', () => {
    const { container } = render(<Paragraph />)

    const paragraph = container.querySelector(':only-child')

    expect(paragraph).not.toHaveClass('ams-paragraph--large')
    expect(paragraph).not.toHaveClass('ams-paragraph--small')
  })

  it('renders the large size class', () => {
    const { container } = render(<Paragraph size="large">Large paragraph</Paragraph>)

    const paragraph = container.querySelector(':only-child')

    expect(paragraph).toHaveClass('ams-paragraph--large')
  })

  it('renders a <b> element for a large paragraph', () => {
    const { container } = render(<Paragraph size="large">Large text</Paragraph>)

    const paragraph = container.querySelector(':only-child')
    const bold = paragraph?.querySelector('b')

    expect(bold).toBeInTheDocument()
    expect(bold).toHaveClass('ams-paragraph__b')
  })

  it('renders the small size class', () => {
    const { container } = render(<Paragraph size="small">Small paragraph</Paragraph>)

    const paragraph = container.querySelector(':only-child')

    expect(paragraph).toHaveClass('ams-paragraph--small')
  })

  it('renders a <small> element for a small paragraph', () => {
    const { container } = render(<Paragraph size="small">Small text</Paragraph>)

    const paragraph = container.querySelector(':only-child')
    const small = paragraph?.querySelector('small')

    expect(small).toBeInTheDocument()
    expect(small).toHaveClass('ams-paragraph__small')
  })

  it('renders the class name for inverse color', () => {
    const { container } = render(<Paragraph color="inverse">Paragraph</Paragraph>)

    const paragraph = container.querySelector(':only-child')

    expect(paragraph).toHaveClass('ams-paragraph--inverse')
  })

  it('renders an extra class name', () => {
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

  it('passes additional props', () => {
    const { container } = render(<Paragraph aria-hidden={false} data-test="data-test" id="id" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveAttribute('aria-hidden', 'false')
    expect(component).toHaveAttribute('id', 'id')
    expect(component).toHaveAttribute('data-test', 'data-test')
  })
})

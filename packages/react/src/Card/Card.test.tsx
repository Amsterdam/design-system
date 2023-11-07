import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { Card } from './Card'
import '@testing-library/jest-dom'

describe('Card', () => {
  it('renders', () => {
    const { container } = render(<Card />)

    const component = container.querySelector(':only-child')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    const cardRender = render(<Card />)
    const { container: cardHeadingGroupRender } = render(<Card.HeadingGroup tagline="test" />)
    const cardLinkRender = render(<Card.Link href="/" />)

    const card = cardRender.getByRole('article')
    const cardHeadingGroup = cardHeadingGroupRender.querySelector(':only-child')
    const cardLink = cardLinkRender.getByRole('link')

    expect(card).toHaveClass('amsterdam-card')
    expect(cardHeadingGroup).toHaveClass('amsterdam-card__heading-group')
    expect(cardLink).toHaveClass('amsterdam-card__link')
  })

  it('renders an additional class name', () => {
    const cardRender = render(<Card className="extra" />)
    const { container: cardHeadingGroupRender } = render(<Card.HeadingGroup tagline="test" className="extra" />)
    const cardLinkRender = render(<Card.Link href="/" className="extra" />)

    const card = cardRender.getByRole('article')
    const cardHeadingGroup = cardHeadingGroupRender.querySelector(':only-child')
    const cardLink = cardLinkRender.getByRole('link')

    expect(card).toHaveClass('extra')
    expect(cardHeadingGroup).toHaveClass('extra')
    expect(cardLink).toHaveClass('extra')

    expect(card).toHaveClass('amsterdam-card')
    expect(cardHeadingGroup).toHaveClass('amsterdam-card__heading-group')
    expect(cardLink).toHaveClass('amsterdam-card__link')
  })

  it('renders a tagline', () => {
    render(<Card.HeadingGroup tagline="tagline" />)

    const tagline = screen.getByText('tagline')

    expect(tagline).toBeInTheDocument()
  })

  it('supports ForwardRef in React', () => {
    const cardRef = createRef<HTMLElement>()
    const cardHeadingGroupRef = createRef<HTMLElement>()
    const cardLinkRef = createRef<HTMLAnchorElement>()

    const cardRender = render(<Card ref={cardRef} />)
    const { container: cardHeadingGroupRender } = render(<Card.HeadingGroup tagline="test" ref={cardHeadingGroupRef} />)
    const cardLinkRender = render(<Card.Link href="/" ref={cardLinkRef} />)

    const card = cardRender.getByRole('article')
    const cardHeadingGroup = cardHeadingGroupRender.querySelector(':only-child')
    const cardLink = cardLinkRender.getByRole('link')

    expect(cardRef.current).toBe(card)
    expect(cardHeadingGroupRef.current).toBe(cardHeadingGroup)
    expect(cardLinkRef.current).toBe(cardLink)
  })
})

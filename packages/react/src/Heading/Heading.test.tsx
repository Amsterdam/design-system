import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { Heading } from './Heading'
import '@testing-library/jest-dom'

describe('Heading', () => {
  it('renders a heading role element', () => {
    render(<Heading>Breaking news</Heading>)

    const heading = screen.getByRole('heading', {
      name: 'Breaking news',
    })

    expect(heading).toBeInTheDocument()
    expect(heading).toBeVisible()
  })

  it('renders a default heading at heading level 1', () => {
    render(<Heading>Breaking news</Heading>)

    const heading = screen.getByRole('heading', {
      name: 'Breaking news',
      level: 1,
    })

    expect(heading).toBeInTheDocument()
  })

  it('renders a heading at the specified level', () => {
    render(
      <>
        <Heading level={1}>H1</Heading>
        <Heading level={2}>H2</Heading>
        <Heading level={3}>H3</Heading>
        <Heading level={4}>H4</Heading>
        <Heading level={5}>H5</Heading>
        <Heading level={6}>H6</Heading>
      </>,
    )

    const h1 = screen.getByRole('heading', {
      name: 'H1',
      level: 1,
    })
    const h2 = screen.getByRole('heading', {
      name: 'H2',
      level: 2,
    })
    const h3 = screen.getByRole('heading', {
      name: 'H3',
      level: 3,
    })
    const h4 = screen.getByRole('heading', {
      name: 'H4',
      level: 4,
    })
    const h5 = screen.getByRole('heading', {
      name: 'H5',
      level: 5,
    })
    const h6 = screen.getByRole('heading', {
      name: 'H6',
      level: 6,
    })

    expect(h1).toBeInTheDocument()
    expect(h2).toBeInTheDocument()
    expect(h3).toBeInTheDocument()
    expect(h4).toBeInTheDocument()
    expect(h5).toBeInTheDocument()
    expect(h6).toBeInTheDocument()
  })

  it('renders the right style level class', () => {
    render(
      <>
        <Heading styleLevel={1}>Style level 1</Heading>
        <Heading styleLevel={2}>Style level 2</Heading>
        <Heading styleLevel={3}>Style level 3</Heading>
        <Heading styleLevel={4}>Style level 4</Heading>
        <Heading styleLevel={5}>Style level 5</Heading>
        <Heading styleLevel={6}>Style level 6</Heading>
      </>,
    )

    const styleLevel1 = screen.getByRole('heading', {
      name: 'Style level 1',
      level: 1,
    })
    const styleLevel2 = screen.getByRole('heading', {
      name: 'Style level 2',
      level: 1,
    })
    const styleLevel3 = screen.getByRole('heading', {
      name: 'Style level 3',
      level: 1,
    })
    const styleLevel4 = screen.getByRole('heading', {
      name: 'Style level 4',
      level: 1,
    })
    const styleLevel5 = screen.getByRole('heading', {
      name: 'Style level 5',
      level: 1,
    })
    const styleLevel6 = screen.getByRole('heading', {
      name: 'Style level 6',
      level: 1,
    })

    expect(styleLevel1).toHaveClass('amsterdam-heading-1')
    expect(styleLevel2).toHaveClass('amsterdam-heading-2')
    expect(styleLevel3).toHaveClass('amsterdam-heading-3')
    expect(styleLevel4).toHaveClass('amsterdam-heading-4')
    expect(styleLevel5).toHaveClass('amsterdam-heading-5')
    expect(styleLevel6).toHaveClass('amsterdam-heading-6')
  })

  it('renders rich text content', () => {
    render(
      <Heading>
        <strong>Breaking</strong> news
      </Heading>,
    )

    const heading = screen.getByRole('heading', {
      name: 'Breaking news',
    })

    const richText = heading.querySelector('strong')

    expect(richText).toBeInTheDocument()
  })

  it('can have an additional class name', () => {
    const { container } = render(<Heading className="large" />)

    const heading = container.querySelector(':only-child')

    expect(heading).toHaveClass('large')
    expect(heading).toHaveClass('amsterdam-heading')
  })

  it('is able to pass a (React) ref', () => {
    const ref = createRef<HTMLHeadingElement>()

    const { container } = render(<Heading ref={ref} />)

    const heading = container.querySelector(':only-child')

    expect(ref.current).toBe(heading)
  })
})

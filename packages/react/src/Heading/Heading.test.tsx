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

    expect(h1).toBeInTheDocument()
    expect(h2).toBeInTheDocument()
    expect(h3).toBeInTheDocument()
    expect(h4).toBeInTheDocument()
  })

  it('renders the right style level class', () => {
    render(
      <>
        <Heading size="level-1">Size level 1</Heading>
        <Heading size="level-2">Size level 2</Heading>
        <Heading size="level-3">Size level 3</Heading>
        <Heading size="level-4">Size level 4</Heading>
        <Heading size="level-5">Size level 5</Heading>
        <Heading size="level-6">Size level 6</Heading>
      </>,
    )

    const sizeLevel1 = screen.getByRole('heading', {
      name: 'Size level 1',
      level: 1,
    })
    const sizeLevel2 = screen.getByRole('heading', {
      name: 'Size level 2',
      level: 1,
    })
    const sizeLevel3 = screen.getByRole('heading', {
      name: 'Size level 3',
      level: 1,
    })
    const sizeLevel4 = screen.getByRole('heading', {
      name: 'Size level 4',
      level: 1,
    })
    const sizeLevel5 = screen.getByRole('heading', {
      name: 'Size level 5',
      level: 1,
    })
    const sizeLevel6 = screen.getByRole('heading', {
      name: 'Size level 6',
      level: 1,
    })

    expect(sizeLevel1).toHaveClass('ams-heading--1')
    expect(sizeLevel2).toHaveClass('ams-heading--2')
    expect(sizeLevel3).toHaveClass('ams-heading--3')
    expect(sizeLevel4).toHaveClass('ams-heading--4')
    expect(sizeLevel5).toHaveClass('ams-heading--5')
    expect(sizeLevel6).toHaveClass('ams-heading--6')
  })

  it('renders the right inverse color class', () => {
    render(<Heading inverseColor>Heading</Heading>)

    const heading = screen.getByRole('heading', { name: 'Heading' })

    expect(heading).toHaveClass('ams-heading--inverse-color')
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

  it('renders an additional class name', () => {
    const { container } = render(<Heading className="large" />)

    const heading = container.querySelector(':only-child')

    expect(heading).toHaveClass('large')
    expect(heading).toHaveClass('ams-heading')
  })

  it('is able to pass a React ref', () => {
    const ref = createRef<HTMLHeadingElement>()

    const { container } = render(<Heading ref={ref} />)

    const heading = container.querySelector(':only-child')

    expect(ref.current).toBe(heading)
  })
})

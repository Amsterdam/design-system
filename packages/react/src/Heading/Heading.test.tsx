/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { Heading } from './Heading'
import '@testing-library/jest-dom'

describe('Heading', () => {
  it('renders an element with role heading', () => {
    render(<Heading level={1}>Breaking news</Heading>)

    const heading = screen.getByRole('heading', {
      name: 'Breaking news',
    })

    expect(heading).toBeInTheDocument()
    expect(heading).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    render(<Heading level={1} />)

    const heading = screen.getByRole('heading')

    expect(heading).toHaveClass('ams-heading')
  })

  it('renders an extra class name', () => {
    render(<Heading className="extra" level={1} />)

    const heading = screen.getByRole('heading')

    expect(heading).toHaveClass('ams-heading extra')
  })

  it('renders the allowed levels correctly', () => {
    render(
      <>
        <Heading level={1}>Heading 1</Heading>
        <Heading level={2}>Heading 2</Heading>
        <Heading level={3}>Heading 3</Heading>
        <Heading level={4}>Heading 4</Heading>
      </>,
    )

    const h1 = screen.getByRole('heading', { level: 1, name: 'Heading 1' })
    const h2 = screen.getByRole('heading', { level: 2, name: 'Heading 2' })
    const h3 = screen.getByRole('heading', { level: 3, name: 'Heading 3' })
    const h4 = screen.getByRole('heading', { level: 4, name: 'Heading 4' })

    expect(h1).toBeInTheDocument()
    expect(h2).toBeInTheDocument()
    expect(h3).toBeInTheDocument()
    expect(h4).toBeInTheDocument()
  })

  it('renders the correct size level class', () => {
    render(
      <>
        <Heading level={1} size="level-1">
          Size level 1
        </Heading>
        <Heading level={1} size="level-2">
          Size level 2
        </Heading>
        <Heading level={1} size="level-3">
          Size level 3
        </Heading>
        <Heading level={1} size="level-4">
          Size level 4
        </Heading>
        <Heading level={1} size="level-5">
          Size level 5
        </Heading>
        <Heading level={1} size="level-6">
          Size level 6
        </Heading>
      </>,
    )

    const sizeLevel1 = screen.getByRole('heading', { level: 1, name: 'Size level 1' })
    const sizeLevel2 = screen.getByRole('heading', { level: 1, name: 'Size level 2' })
    const sizeLevel3 = screen.getByRole('heading', { level: 1, name: 'Size level 3' })
    const sizeLevel4 = screen.getByRole('heading', { level: 1, name: 'Size level 4' })
    const sizeLevel5 = screen.getByRole('heading', { level: 1, name: 'Size level 5' })
    const sizeLevel6 = screen.getByRole('heading', { level: 1, name: 'Size level 6' })

    expect(sizeLevel1).toHaveClass('ams-heading--1')
    expect(sizeLevel2).toHaveClass('ams-heading--2')
    expect(sizeLevel3).toHaveClass('ams-heading--3')
    expect(sizeLevel4).toHaveClass('ams-heading--4')
    expect(sizeLevel5).toHaveClass('ams-heading--5')
    expect(sizeLevel6).toHaveClass('ams-heading--6')
  })

  it('renders the class name for inverse color', () => {
    render(
      <Heading color="inverse" level={1}>
        Heading
      </Heading>,
    )

    const heading = screen.getByRole('heading', { name: 'Heading' })

    expect(heading).toHaveClass('ams-heading--inverse')
  })

  it('renders inline markup', () => {
    render(
      <Heading level={1}>
        <strong>Breaking</strong> news
      </Heading>,
    )

    const heading = screen.getByRole('heading', { name: 'Breaking news' })
    const inlineMarkup = heading.querySelector('strong')

    expect(inlineMarkup).toBeInTheDocument()
  })

  it('is able to pass a React ref', () => {
    const ref = createRef<HTMLHeadingElement>()

    render(<Heading level={1} ref={ref} />)

    const heading = screen.getByRole('heading')

    expect(ref.current).toBe(heading)
  })
})

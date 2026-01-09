/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { render, screen } from '@testing-library/react'
import { createRef } from 'react'

import { PageFooter } from './PageFooter'
import '@testing-library/jest-dom'

describe('Page Footer Menu', () => {
  it('renders a footer menu with children', () => {
    render(
      <PageFooter.Menu>
        <PageFooter.MenuLink href="#" lang="en">
          English
        </PageFooter.MenuLink>
        <PageFooter.MenuLink href="#">Mijn Amsterdam</PageFooter.MenuLink>
      </PageFooter.Menu>,
    )

    const menu = screen.getByRole('list')

    const items = screen.getAllByRole('listitem')

    expect(menu).toBeInTheDocument()
    expect(menu).toBeVisible()
    expect(items).toHaveLength(2)
  })

  it('renders a design system BEM class name', () => {
    render(<PageFooter.Menu />)

    const menu = screen.getByRole('list')

    expect(menu).toHaveClass('ams-page-footer__menu')
  })

  it('renders an extra class name', () => {
    render(<PageFooter.Menu className="intro" />)

    const menu = screen.getByRole('list')

    expect(menu).toHaveClass('ams-page-footer__menu intro')
  })

  it('renders a visually hidden heading with a default text', () => {
    render(<PageFooter.Menu />)

    const heading = screen.getByRole('heading', {
      name: 'Over deze website',
    })

    expect(heading).toBeInTheDocument()
    expect(heading.tagName).toBe('H2')
  })

  it('renders a visually hidden heading with a custom text or heading level', () => {
    render(<PageFooter.Menu heading="Meer informatie" headingLevel={4} />)

    const heading = screen.getByRole('heading', {
      name: 'Meer informatie',
    })

    expect(heading).toBeInTheDocument()
    expect(heading.tagName).toBe('H4')
  })

  it('is able to pass a React ref', () => {
    const ref = createRef<HTMLUListElement>()

    render(
      <PageFooter.Menu ref={ref}>
        <PageFooter.MenuLink href="#" lang="en">
          English
        </PageFooter.MenuLink>
      </PageFooter.Menu>,
    )

    const menu = screen.getByRole('list')

    expect(ref.current).toBe(menu)
  })
})

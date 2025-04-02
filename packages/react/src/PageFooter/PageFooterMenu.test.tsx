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

    const component = screen.getByRole('list')

    const children = screen.getAllByRole('listitem')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
    expect(children).toHaveLength(2)
  })

  it('renders a design system BEM class name', () => {
    render(<PageFooter.Menu />)

    const component = screen.getByRole('list')

    expect(component).toHaveClass('ams-footer__menu')
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

    const component = screen.getByRole('list')

    expect(ref.current).toBe(component)
  })

  it('renders an additional class name', () => {
    render(<PageFooter.Menu className="intro" />)

    const component = screen.getByRole('list')

    expect(component).toHaveClass('ams-footer__menu intro')
  })
})

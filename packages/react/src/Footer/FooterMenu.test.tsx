import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { Footer } from './Footer'
import '@testing-library/jest-dom'

describe('Footer menu', () => {
  it('renders a footer menu with children', () => {
    render(
      <Footer.Menu>
        <Footer.MenuLink href="#" lang="en">
          English
        </Footer.MenuLink>
        <Footer.MenuLink href="#">Mijn Amsterdam</Footer.MenuLink>
      </Footer.Menu>,
    )

    const component = screen.getByRole('list')

    const children = screen.getAllByRole('listitem')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
    expect(children).toHaveLength(2)
  })

  it('renders a design system BEM class name', () => {
    render(<Footer.Menu />)

    const component = screen.getByRole('list')

    expect(component).toHaveClass('ams-footer__menu')
  })

  it('is able to pass a React ref', () => {
    const ref = createRef<HTMLUListElement>()

    render(
      <Footer.Menu ref={ref}>
        <Footer.MenuLink href="#" lang="en">
          English
        </Footer.MenuLink>
      </Footer.Menu>,
    )

    const component = screen.getByRole('list')

    expect(ref.current).toBe(component)
  })

  it('renders an additional class name', () => {
    render(<Footer.Menu className="intro" />)

    const component = screen.getByRole('list')

    expect(component).toHaveClass('ams-footer__menu intro')
  })
})

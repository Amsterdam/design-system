import { LoginIcon } from '@amsterdam/design-system-react-icons'
import { render } from '@testing-library/react'
import { createRef } from 'react'
import { Footer } from './Footer'
import '@testing-library/jest-dom'

describe('Page menu', () => {
  it('renders a page menu with children', () => {
    const { container } = render(
      <Footer.Menu>
        <Footer.MenuLink href="#" lang="en">
          English
        </Footer.MenuLink>
        <Footer.MenuLink href="#" icon={LoginIcon}>
          Mijn Amsterdam
        </Footer.MenuLink>
      </Footer.Menu>,
    )

    const component = container.querySelector(':only-child')

    const children = container.querySelectorAll('li')
    const icons = container.querySelectorAll('svg')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
    expect(children.length).toBe(2)
    expect(icons.length).toBe(1)
  })

  it('renders a design system BEM class name', () => {
    const { container } = render(<Footer.Menu />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-footer__menu')
  })

  it('is able to pass a React ref', () => {
    const ref = createRef<HTMLUListElement>()

    const { container } = render(
      <Footer.Menu ref={ref}>
        <Footer.MenuLink href="#" lang="en">
          English
        </Footer.MenuLink>
      </Footer.Menu>,
    )

    const component = container.querySelector(':only-child')

    expect(ref.current).toBe(component)
  })

  it('renders an additional class name', () => {
    const { container } = render(<Footer.Menu className="intro" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('intro')
    expect(component).toHaveClass('ams-footer__menu')
  })
})

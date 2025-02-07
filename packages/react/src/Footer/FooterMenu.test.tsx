import { LoginIcon } from '@amsterdam/design-system-react-icons'
import { render } from '@testing-library/react'
import { createRef } from 'react'
import { FooterMenu } from './FooterMenu'
import '@testing-library/jest-dom'
import { FooterMenuLink } from './FooterMenuLink'

describe('Page menu', () => {
  it('renders a page menu with children', () => {
    const { container } = render(
      <FooterMenu>
        <FooterMenuLink href="#" lang="en">
          English
        </FooterMenuLink>
        <FooterMenuLink href="#" icon={LoginIcon}>
          Mijn Amsterdam
        </FooterMenuLink>
      </FooterMenu>,
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
    const { container } = render(<FooterMenu />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-footer__menu')
  })

  it('is able to pass a React ref', () => {
    const ref = createRef<HTMLUListElement>()

    const { container } = render(
      <FooterMenu ref={ref}>
        <FooterMenuLink href="#" lang="en">
          English
        </FooterMenuLink>
      </FooterMenu>,
    )

    const component = container.querySelector(':only-child')

    expect(ref.current).toBe(component)
  })

  it('renders an additional class name', () => {
    const { container } = render(<FooterMenu className="intro" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('intro')
    expect(component).toHaveClass('ams-footer__menu')
  })
})

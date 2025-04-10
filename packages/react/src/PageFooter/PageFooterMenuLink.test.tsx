import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { PageFooter } from './PageFooter'
import '@testing-library/jest-dom'

describe('Page Footer Menu Link', () => {
  it('renders with href attribute', () => {
    render(<PageFooter.MenuLink href="#">Link</PageFooter.MenuLink>)

    const component = screen.getByRole('link')

    expect(component).toBeInTheDocument()
    expect(component).toHaveAttribute('href', '#')
  })

  it('renders a design system BEM class name', () => {
    render(<PageFooter.MenuLink href="#">Link</PageFooter.MenuLink>)

    const component = screen.getByRole('link')

    expect(component).toHaveClass('ams-page-footer__menu-link')
  })

  it('renders an extra class through the className prop', () => {
    render(
      <PageFooter.MenuLink className="extra" href="#">
        Link
      </PageFooter.MenuLink>,
    )

    const component = screen.getByRole('link')

    expect(component).toHaveClass('ams-page-footer__menu-link extra')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLAnchorElement>()

    render(
      <PageFooter.MenuLink className="extra" href="#" ref={ref}>
        Link
      </PageFooter.MenuLink>,
    )

    const component = screen.getByRole('link')

    expect(ref.current).toBe(component)
  })
})

import { ChevronRightIcon } from '@amsterdam/design-system-react-icons'
import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { PageMenuLink } from './PageMenuLink'
import '@testing-library/jest-dom'

describe('Page menu link', () => {
  it('renders with href attribute', () => {
    render(<PageMenuLink href="#">Link</PageMenuLink>)

    const component = screen.getByRole('link')

    expect(component).toBeInTheDocument()
    expect(component).toHaveAttribute('href', '#')
  })

  it('renders a design system BEM class name', () => {
    render(<PageMenuLink href="#">Link</PageMenuLink>)

    const component = screen.getByRole('link')

    expect(component).toHaveClass('ams-page-menu__link')
  })

  it('renders an additional class name', () => {
    render(
      <PageMenuLink href="#" className="extra">
        Link
      </PageMenuLink>,
    )

    const component = screen.getByRole('link')

    expect(component).toHaveClass('ams-page-menu__link extra')
  })

  it('does not render an icon by default', () => {
    const { container } = render(<PageMenuLink href="#">Link</PageMenuLink>)

    const svg = container.querySelector('.ams-icon')

    expect(svg).not.toBeInTheDocument()
  })

  it('renders an icon when specified', () => {
    const { container } = render(
      <PageMenuLink href="#" icon={ChevronRightIcon}>
        Link
      </PageMenuLink>,
    )

    const svg = container.querySelector('.ams-icon')

    expect(svg).toBeInTheDocument()
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLAnchorElement>()
    render(
      <PageMenuLink href="#" className="extra" ref={ref}>
        Link
      </PageMenuLink>,
    )

    const component = screen.getByRole('link')
    expect(ref.current).toBe(component)
  })
})

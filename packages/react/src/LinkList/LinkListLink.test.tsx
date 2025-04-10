import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { LinkList } from './LinkList'

describe('Link list link', () => {
  it('renders', () => {
    const { container } = render(<LinkList.Link href="#" />)

    const listItem = screen.getByRole('listitem')
    const link = screen.getByRole('link')
    const icon = container.querySelector('svg')

    expect(listItem).toBeInTheDocument()
    expect(listItem).toBeVisible()
    expect(link).toBeInTheDocument()
    expect(link).toBeVisible()
    expect(icon).toBeInTheDocument()
    expect(icon).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    render(<LinkList.Link href="#" />)

    const component = screen.getByRole('link')

    expect(component).toHaveClass('ams-link-list__link')
  })

  it('renders an extra class through the className prop', () => {
    render(<LinkList.Link className="extra" href="#" />)

    const component = screen.getByRole('link')

    expect(component).toHaveClass('ams-link-list__link extra')
  })

  it('renders a class name for the small size', () => {
    render(<LinkList.Link href="#" size="small" />)

    const component = screen.getByRole('link')

    expect(component).toHaveClass('ams-link-list__link--small')
  })

  it('renders the class name for contrast color', () => {
    render(<LinkList.Link color="contrast" href="#" />)

    const component = screen.getByRole('link')

    expect(component).toHaveClass('ams-link-list__link--contrast')
  })

  it('renders the class name for inverse color', () => {
    render(<LinkList.Link color="inverse" href="#" />)

    const component = screen.getByRole('link')

    expect(component).toHaveClass('ams-link-list__link--inverse')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLAnchorElement>()

    render(<LinkList.Link href="#" ref={ref} />)

    const component = screen.getByRole('link')

    expect(ref.current).toBe(component)
  })
})

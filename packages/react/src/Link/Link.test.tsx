import { render } from '@testing-library/react'
import { createRef } from 'react'
import { Link } from './Link'
import '@testing-library/jest-dom'

describe('Link', () => {
  const linktext = 'Linktext'
  it('renders with href attribute', () => {
    const { container } = render(<Link href="#">{linktext}</Link>)
    const link = container.querySelector('a:only-child')
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '#')
  })

  it('renders standalone variant', () => {
    const { container } = render(<Link href="#">{linktext}</Link>)
    const link = container.querySelector('a:only-child')
    expect(link).toHaveClass('amsterdam-link')
  })

  it('renders inline variant', () => {
    const { container } = render(
      <Link variant="inList" href="#">
        {linktext}
      </Link>,
    )
    const link = container.querySelector('a:only-child')
    expect(link).toHaveClass('amsterdam-link amsterdam-link--in-list')
    const icon = link ? link.querySelector('svg:only-child') : null
    expect(icon).toBeInTheDocument()
  })

  it('renders inlist variant', () => {
    const { container } = render(
      <Link variant="inline" href="#">
        {linktext}
      </Link>,
    )
    const link = container.querySelector('a:only-child')
    expect(link).toHaveClass('amsterdam-link amsterdam-link--inline')
  })

  it('renders light background color', () => {
    const { container } = render(
      <Link onBackground="light" href="#">
        {linktext}
      </Link>,
    )
    const link = container.querySelector('a:only-child')
    expect(link).toHaveClass('amsterdam-link amsterdam-link--on-background-light')
  })

  it('renders dark background color', () => {
    const { container } = render(
      <Link onBackground="dark" href="#">
        {linktext}
      </Link>,
    )
    const link = container.querySelector('a:only-child')
    expect(link).toHaveClass('amsterdam-link amsterdam-link--on-background-dark')
  })

  it('renders an additional class name', () => {
    const { container } = render(<Link className="large" />)
    const link = container.querySelector(':only-child')
    expect(link).toHaveClass('large')
    expect(link).toHaveClass('amsterdam-link')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLAnchorElement>()
    const { container } = render(
      <Link ref={ref} href="https://example.com/">
        {'https://example.com/'}
      </Link>,
    )
    const link = container.querySelector(':only-child')
    expect(ref.current).toBe(link)
  })
})

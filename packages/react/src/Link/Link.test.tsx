import { render } from '@testing-library/react'
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

  it('renders with target attribute', () => {
    const { container } = render(
      <Link href="#" target="_blank">
        {linktext}
      </Link>,
    )
    const link = container.querySelector('a:only-child')
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('renders with rel attribute', () => {
    const { container } = render(
      <Link href="#" rel="noopener">
        {linktext}
      </Link>,
    )
    const link = container.querySelector('a:only-child')
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('rel', 'noopener')
  })

  it('renders standalone', () => {
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
    expect(link).toHaveClass('amsterdam-link amsterdam-link--background-light')
  })

  it('renders dark background color', () => {
    const { container } = render(
      <Link onBackground="dark" href="#">
        {linktext}
      </Link>,
    )
    const link = container.querySelector('a:only-child')
    expect(link).toHaveClass('amsterdam-link amsterdam-link--background-dark')
  })
})

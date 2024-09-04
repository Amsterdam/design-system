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

    expect(link).toHaveClass('ams-link')
  })

  it('renders inline variant', () => {
    const { container } = render(
      <Link variant="inline" href="#">
        {linktext}
      </Link>,
    )

    const link = container.querySelector('a:only-child')

    expect(link).toHaveClass('ams-link ams-link--inline')
  })

  it('renders an additional class name', () => {
    const { container } = render(<Link className="large" />)

    const link = container.querySelector(':only-child')

    expect(link).toHaveClass('large')
    expect(link).toHaveClass('ams-link')
  })

  it('renders the class name for contrast color', () => {
    const { container } = render(
      <Link contrastColor href="#">
        {linktext}
      </Link>,
    )

    const link = container.querySelector('a:only-child')

    expect(link).toHaveClass('ams-link ams-link--contrast-color')
  })

  it('renders the class name for inverse color', () => {
    const { container } = render(
      <Link inverseColor href="#">
        {linktext}
      </Link>,
    )

    const link = container.querySelector('a:only-child')

    expect(link).toHaveClass('ams-link ams-link--inverse-color')
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

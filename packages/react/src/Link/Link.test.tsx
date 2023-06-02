import { render } from '@testing-library/react'
import { Link } from './Link'
import '@testing-library/jest-dom'

describe('Link', () => {
  it('renders with href attribute', () => {
    const { container } = render(<Link href="#">{'https://example.com/'}</Link>)
    const link = container.querySelector('a:only-child')
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '#')
  })

  it('renders with target attribute', () => {
    const { container } = render(
      <Link href="#" target="_blank">
        {'https://example.com/'}
      </Link>,
    )
    const link = container.querySelector('a:only-child')
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('renders with rel attribute', () => {
    const { container } = render(
      <Link href="#" rel="noopener">
        {'https://example.com/'}
      </Link>,
    )
    const link = container.querySelector('a:only-child')
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('rel', 'noopener')
  })

  // it('renders default', () => {
  //   const { container } = render(
  //     <Link variant="default" href="#">
  //       {'https://example.com/'}
  //     </Link>,
  //   )
  //   const link = container.querySelector('a:only-child')
  //   expect(link).toHaveClass('amsterdam-link')
  // })

  it('renders inline variant', () => {
    const { container } = render(
      <Link variant="inline" href="#">
        {'https://example.com/'}
      </Link>,
    )
    const link = container.querySelector('a:only-child')
    expect(link).toHaveClass('amsterdam-link--inline')
  })

  it('renders white color', () => {
    const { container } = render(
      <Link color="white" href="#">
        {'https://example.com/'}
      </Link>,
    )
    const link = container.querySelector('a:only-child')
    expect(link).toHaveClass('amsterdam-link--color-white')
  })

  it('renders black color', () => {
    const { container } = render(
      <Link color="black" href="#">
        {'https://example.com/'}
      </Link>,
    )
    const link = container.querySelector('a:only-child')
    expect(link).toHaveClass('amsterdam-link--color-black')
  })
})

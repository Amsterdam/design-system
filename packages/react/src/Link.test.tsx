import { Alert } from '@amsterdam/design-system-react-icons'
import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { Link } from './Link'
import '@testing-library/jest-dom'

describe('Link', () => {
  it('renders a link role element', () => {
    render(<Link href="/">Home</Link>)

    const link = screen.getByRole('link', { name: 'Home' })

    expect(link).toBeInTheDocument()
    expect(link).toBeVisible()
  })

  it('renders an HTML a element', () => {
    const { container } = render(<Link>{'https://example.com/'}</Link>)

    const link = container.querySelector('a:only-child')

    expect(link).toBeInTheDocument()
  })

  it('renders a design system BEM class name', () => {
    const { container } = render(<Link />)

    const link = container.querySelector(':only-child')

    expect(link).toHaveClass('amsterdam-link')
  })

  it('renders the right variant classes', () => {
    render(
      <>
        <Link variant="standalone">Standalone link</Link>
        <Link variant="inList">Link in list</Link>
        <Link variant="inline">Inline link</Link>
      </>,
    )

    const standaloneLink = screen.getByText('Standalone link')
    const linkInList = screen.getByText('Link in list')
    const inlineLink = screen.getByText('Inline link')

    expect(standaloneLink).toHaveClass('amsterdam-link-standalone')
    expect(linkInList).toHaveClass('amsterdam-link-inlist')
    expect(inlineLink).toHaveClass('amsterdam-link-inline')
  })

  it('renders without any icons by default', () => {
    const { container } = render(<Link />)

    const svgContainer = container.querySelector(':only-child span')

    expect(svgContainer).toBeNull()
  })

  it('renders small icon when using variant inList', () => {
    const { container } = render(<Link variant="inList" />)

    const svgContainer = container.querySelector(':only-child span')

    expect(svgContainer).toHaveClass('amsterdam-icon-size-4')
  })

  it('renders a bigger icon when using variant inList and passing an icon', () => {
    const { container } = render(<Link variant="inList" icon={Alert} />)

    const svgContainer = container.querySelector(':only-child span')

    expect(svgContainer).toHaveClass('amsterdam-icon-size-3')
  })

  it('renders rich text content', () => {
    const { container } = render(
      <Link href="https://example.com/">
        <strong>https:</strong>
        {'//example.com/'}
      </Link>,
    )

    const link = container.querySelector(':only-child')

    const richText = link?.querySelector('strong')

    expect(richText).toBeInTheDocument()
  })

  it('can have a additional class name', () => {
    const { container } = render(<Link className="large" />)

    const link = container.querySelector(':only-child')

    expect(link).toHaveClass('large')

    expect(link).toHaveClass('amsterdam-link')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLAnchorElement>()

    const { container } = render(<Link ref={ref}>{'https://example.com/'}</Link>)

    const link = container.querySelector(':only-child')

    expect(ref.current).toBe(link)
  })

  // describe('variant for external links', () => {
  //   it('renders a design system BEM class name', () => {
  //     const { container } = render(<Link external />)

  //     const link = container.querySelector(':only-child')

  //     expect(link).toHaveClass('utrecht-link--external')
  //   })

  //   it('prevents sharing referer information', () => {
  //     const { container } = render(<Link external />)

  //     const link = container.querySelector(':only-child')

  //     expect(link).toHaveAttribute('rel')

  //     expect(link?.getAttribute('rel')).toContain('noreferrer')
  //   })

  //   it('prevents access to window.opener', () => {
  //     const { container } = render(<Link external />)

  //     const link = container.querySelector(':only-child')

  //     expect(link).toHaveAttribute('rel')

  //     expect(link?.getAttribute('rel')).toContain('noopener')
  //   })

  //   it('provides semantic information that the link is external', () => {
  //     const { container } = render(<Link external />)

  //     const link = container.querySelector(':only-child')

  //     expect(link).toHaveAttribute('rel')

  //     expect(link?.getAttribute('rel')).toContain('external')
  //   })
  // })
})

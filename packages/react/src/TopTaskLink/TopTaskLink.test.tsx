import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { TopTaskLink } from './TopTaskLink'
import '@testing-library/jest-dom'

describe('Top task link', () => {
  it('renders a link role element', () => {
    render(<TopTaskLink href="/" />)

    const link = screen.getByRole('link')

    expect(link).toBeInTheDocument()
    expect(link).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    const linkRender = render(<TopTaskLink href="/" />)
    const { container: linkTitleRender } = render(<TopTaskLink.Title />)
    const { container: linkDescriptionRender } = render(<TopTaskLink.Description />)

    const link = linkRender.getByRole('link')
    const linkTitle = linkTitleRender.querySelector(':only-child')
    const linkDescription = linkDescriptionRender.querySelector('p:only-child')

    expect(link).toHaveClass('amsterdam-top-task-link')
    expect(linkTitle).toHaveClass('amsterdam-top-task-link__title')
    expect(linkDescription).toHaveClass('amsterdam-top-task-link__description')
  })

  it('can have a custom class name', () => {
    const linkRender = render(<TopTaskLink href="/" className="extra" />)
    const { container: linkTitleRender } = render(<TopTaskLink.Title className="extra" />)
    const { container: linkDescriptionRender } = render(<TopTaskLink.Description className="extra" />)

    const link = linkRender.getByRole('link')
    const linkTitle = linkTitleRender.querySelector(':only-child')
    const linkDescription = linkDescriptionRender.querySelector('p:only-child')

    expect(link).toHaveClass('extra')
    expect(linkTitle).toHaveClass('extra')
    expect(linkDescription).toHaveClass('extra')
  })

  it('can have a additional class name', () => {
    const linkRender = render(<TopTaskLink href="/" className="extra" />)
    const { container: linkTitleRender } = render(<TopTaskLink.Title className="extra" />)
    const { container: linkDescriptionRender } = render(<TopTaskLink.Description className="extra" />)

    const link = linkRender.getByRole('link')
    const linkTitle = linkTitleRender.querySelector(':only-child')
    const linkDescription = linkDescriptionRender.querySelector('p:only-child')

    expect(link).toHaveClass('extra')
    expect(linkTitle).toHaveClass('extra')
    expect(linkDescription).toHaveClass('extra')

    expect(link).toHaveClass('amsterdam-top-task-link')
    expect(linkTitle).toHaveClass('amsterdam-top-task-link__title')
    expect(linkDescription).toHaveClass('amsterdam-top-task-link__description')
  })

  it('supports ForwardRef in React', () => {
    const linkRef = createRef<HTMLAnchorElement>()
    const linkTitleRef = createRef<HTMLElement>()
    const linkDescriptionRef = createRef<HTMLParagraphElement>()

    const linkRender = render(<TopTaskLink href="/" ref={linkRef} />)
    const { container: linkTitleRender } = render(<TopTaskLink.Title ref={linkTitleRef} />)
    const { container: linkDescriptionRender } = render(<TopTaskLink.Description ref={linkDescriptionRef} />)

    const link = linkRender.getByRole('link')
    const linkTitle = linkTitleRender.querySelector(':only-child')
    const linkDescription = linkDescriptionRender.querySelector('p:only-child')

    expect(linkRef.current).toBe(link)
    expect(linkTitleRef.current).toBe(linkTitle)
    expect(linkDescriptionRef.current).toBe(linkDescription)
  })
})

import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { PageHeading } from './PageHeading'
import '@testing-library/jest-dom'

describe('Page heading', () => {
  it('renders a heading role element', () => {
    render(<PageHeading>Breaking news</PageHeading>)

    const pageHeading = screen.getByRole('heading', {
      name: 'Breaking news',
    })

    expect(pageHeading).toBeInTheDocument()
    expect(pageHeading).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    const { container } = render(<PageHeading />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-page-heading')
  })

  it('renders an additional class name', () => {
    const { container } = render(<PageHeading className="extra" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('extra')

    expect(component).toHaveClass('ams-page-heading')
  })

  it('renders the right inverse color class', () => {
    render(<PageHeading inverseColor>Titel</PageHeading>)

    const pageHeading = screen.getByRole('heading', { name: 'Titel' })

    expect(pageHeading).toHaveClass('ams-page-heading--inverse-color')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLHeadingElement>()

    const { container } = render(<PageHeading ref={ref} />)

    const component = container.querySelector(':only-child')

    expect(ref.current).toBe(component)
  })
})

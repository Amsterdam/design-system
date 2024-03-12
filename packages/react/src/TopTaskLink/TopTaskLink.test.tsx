import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { TopTaskLink } from './TopTaskLink'
import '@testing-library/jest-dom'

describe('Top task link', () => {
  it('renders a link role element', () => {
    render(<TopTaskLink href="/" label="Label" description="Description" />)

    const link = screen.getByRole('link', {
      name: 'Label , Description',
    })

    expect(link).toBeInTheDocument()
    expect(link).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    render(<TopTaskLink href="/" label="Label" description="Description" />)

    const link = screen.getByRole('link', {
      name: 'Label , Description',
    })
    const label = screen.getByText('Label')
    const description = screen.getByText('Description')

    expect(link).toHaveClass('ams-top-task-link')
    expect(label).toHaveClass('ams-top-task-link__label')
    expect(description).toHaveClass('ams-top-task-link__description')
  })

  it('renders an additional class name', () => {
    render(<TopTaskLink href="/" label="Label" description="Description" className="extra" />)

    const link = screen.getByRole('link', {
      name: 'Label , Description',
    })

    expect(link).toHaveClass('extra')
    expect(link).toHaveClass('ams-top-task-link')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLAnchorElement>()

    render(<TopTaskLink href="/" label="Label" description="Description" ref={ref} />)

    const link = screen.getByRole('link', {
      name: 'Label , Description',
    })

    expect(ref.current).toBe(link)
  })
})

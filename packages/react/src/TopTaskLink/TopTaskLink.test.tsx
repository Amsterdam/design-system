import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { TopTaskLink } from './TopTaskLink'
import '@testing-library/jest-dom'

describe('Top task link', () => {
  it('renders a link role element', () => {
    render(<TopTaskLink label="Label" href="/" />)

    const link = screen.getByRole('link', {
      name: 'Label',
    })

    expect(link).toBeInTheDocument()
    expect(link).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    render(<TopTaskLink label="Label" description="Description" href="/" />)

    const link = screen.getByRole('link', {
      name: 'Label, Description',
    })
    const label = screen.getByText('Label')
    const description = screen.getByText('Description')

    expect(link).toHaveClass('amsterdam-top-task-link')
    expect(label).toHaveClass('amsterdam-top-task-link__label')
    expect(description).toHaveClass('amsterdam-top-task-link__description')
  })

  it('can have a additional class name', () => {
    render(<TopTaskLink href="/" label="Label" className="extra" />)

    const link = screen.getByRole('link', {
      name: 'Label',
    })

    expect(link).toHaveClass('extra')
    expect(link).toHaveClass('amsterdam-top-task-link')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLAnchorElement>()

    render(<TopTaskLink href="/" ref={ref} label="Label" />)

    const link = screen.getByRole('link', {
      name: 'Label',
    })

    expect(ref.current).toBe(link)
  })
})

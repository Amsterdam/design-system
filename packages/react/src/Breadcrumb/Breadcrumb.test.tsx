import { render, screen } from '@testing-library/react'
import { Breadcrumb } from './Breadcrumb'

describe('Breadcrumb', () => {
  it('renders an element with role navigation', () => {
    render(<Breadcrumb>Click me!</Breadcrumb>)

    const breadcrumb = screen.getByRole('navigation', {
      name: 'Click me!',
    })

    expect(breadcrumb).toBeInTheDocument()
    expect(breadcrumb).toBeVisible()
  })
})

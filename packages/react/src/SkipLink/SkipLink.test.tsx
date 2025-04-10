import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { SkipLink } from './SkipLink'
import '@testing-library/jest-dom'

describe('Skip link', () => {
  it('renders', () => {
    render(<SkipLink href="/" />)

    const component = screen.getByRole('link')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    render(<SkipLink href="/" />)

    const component = screen.getByRole('link')

    expect(component).toHaveClass('ams-skip-link')
  })

  it('renders an extra class through the className prop', () => {
    render(<SkipLink className="extra" href="/" />)

    const component = screen.getByRole('link')

    expect(component).toHaveClass('ams-skip-link extra')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLAnchorElement>()

    render(<SkipLink href="/" ref={ref} />)

    const component = screen.getByRole('link')

    expect(ref.current).toBe(component)
  })
})

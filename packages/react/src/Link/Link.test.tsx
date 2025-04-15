import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { Link } from './Link'
import '@testing-library/jest-dom'

describe('Link', () => {
  it('renders with href attribute', () => {
    render(<Link href="#" />)

    const component = screen.getByRole('link')

    expect(component).toBeInTheDocument()
    expect(component).toHaveAttribute('href', '#')
  })

  it('renders a design system BEM class name', () => {
    render(<Link href="#" />)

    const component = screen.getByRole('link')

    expect(component).toHaveClass('ams-link')
  })

  it('renders an extra class name', () => {
    render(<Link className="extra" href="#" />)

    const component = screen.getByRole('link')

    expect(component).toHaveClass('ams-link extra')
  })

  it('renders the class name for contrast color', () => {
    render(<Link color="contrast" href="#" />)

    const component = screen.getByRole('link')

    expect(component).toHaveClass('ams-link ams-link--contrast')
  })

  it('renders the class name for inverse color', () => {
    render(<Link color="inverse" href="#" />)

    const component = screen.getByRole('link')

    expect(component).toHaveClass('ams-link ams-link--inverse')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLAnchorElement>()

    render(<Link href="#" ref={ref} />)

    const component = screen.getByRole('link')

    expect(ref.current).toBe(component)
  })
})

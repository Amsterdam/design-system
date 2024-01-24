import { render } from '@testing-library/react'
import { createRef } from 'react'
import { Badge } from './Badge'
import '@testing-library/jest-dom'

describe('Badge', () => {
  it('renders', () => {
    const { container } = render(<Badge label="test" />)

    const component = container.querySelector(':only-child')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    const { container } = render(<Badge label="test" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('amsterdam-badge')
  })

  it('renders an additional class name', () => {
    const { container } = render(<Badge label="test" className="extra" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('amsterdam-badge extra')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLElement>()

    const { container } = render(<Badge label="test" ref={ref} />)

    const component = container.querySelector(':only-child')

    expect(ref.current).toBe(component)
  })

  it('renders with a number label', () => {
    const { container } = render(<Badge label={1} />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveTextContent('1')
  })

  it('renders with default color', () => {
    const { container } = render(<Badge label="test" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('amsterdam-badge--dark-green')
  })

  it('renders with black color', () => {
    const { container } = render(<Badge label="test" color="black" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('amsterdam-badge--black')
  })

  it('renders with blue color', () => {
    const { container } = render(<Badge label="test" color="blue" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('amsterdam-badge--blue')
  })

  it('renders with dark-blue color', () => {
    const { container } = render(<Badge label="test" color="dark-blue" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('amsterdam-badge--dark-blue')
  })

  it('renders with dark-green color', () => {
    const { container } = render(<Badge label="test" color="dark-green" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('amsterdam-badge--dark-green')
  })

  it('renders with green color', () => {
    const { container } = render(<Badge label="test" color="green" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('amsterdam-badge--green')
  })

  it('renders with magenta color', () => {
    const { container } = render(<Badge label="test" color="magenta" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('amsterdam-badge--magenta')
  })

  it('renders with orange color', () => {
    const { container } = render(<Badge label="test" color="orange" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('amsterdam-badge--orange')
  })

  it('renders with purple color', () => {
    const { container } = render(<Badge label="test" color="purple" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('amsterdam-badge--purple')
  })

  it('renders with white color', () => {
    const { container } = render(<Badge label="test" color="white" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('amsterdam-badge--white')
  })

  it('renders with yellow color', () => {
    const { container } = render(<Badge label="test" color="yellow" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('amsterdam-badge--yellow')
  })
})

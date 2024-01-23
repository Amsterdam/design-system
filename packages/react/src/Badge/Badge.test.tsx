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

  it('renders blue color', () => {
    const { container } = render(<Badge label="test" color="blue" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('amsterdam-badge--blue')
  })

  it('renders dark-blue color', () => {
    const { container } = render(<Badge label="test" color="dark-blue" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('amsterdam-badge--dark-blue')
  })

  it('renders green color', () => {
    const { container } = render(<Badge label="test" color="green" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('amsterdam-badge--green')
  })

  it('renders dark-green color', () => {
    const { container } = render(<Badge label="test" color="dark-green" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('amsterdam-badge--dark-green')
  })

  it('renders orange color', () => {
    const { container } = render(<Badge label="test" color="orange" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('amsterdam-badge--orange')
  })

  it('renders magenta color', () => {
    const { container } = render(<Badge label="test" color="magenta" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('amsterdam-badge--magenta')
  })

  it('renders purple color', () => {
    const { container } = render(<Badge label="test" color="purple" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('amsterdam-badge--purple')
  })

  it('renders yellow color', () => {
    const { container } = render(<Badge label="test" color="yellow" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('amsterdam-badge--yellow')
  })

  it('renders black color', () => {
    const { container } = render(<Badge label="test" color="black" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('amsterdam-badge--black')
  })

  it('renders white color', () => {
    const { container } = render(<Badge label="test" color="white" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('amsterdam-badge--white')
  })
})

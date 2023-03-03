import { Alert } from '@amsterdam/design-system-react-icons'
import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { Icon } from './Icon'
import '@testing-library/jest-dom'

describe('Icon', () => {
  it('renders a span element', () => {
    const { container } = render(<Icon />)

    const icon = container.querySelector('span:only-child')

    expect(icon).toBeInTheDocument()
  })

  it('renders a design system BEM class name', () => {
    const { container } = render(<Icon />)

    const icon = container.querySelector(':only-child')

    expect(icon).toHaveClass('amsterdam-icon')
  })

  it('renders an svg child', () => {
    const { container } = render(
      <Icon>
        <Alert />
      </Icon>,
    )

    const svg = container.querySelector(':only-child svg')

    expect(svg).toBeInTheDocument()
  })

  it('renders the right size classes', () => {
    render(
      <>
        <Icon size="small">Small icon</Icon>
        <Icon size="medium">Medium icon</Icon>
        <Icon size="large">Large icon</Icon>
      </>,
    )

    const smallIcon = screen.getByText('Small icon')
    const mediumIcon = screen.getByText('Medium icon')
    const largeIcon = screen.getByText('Large icon')

    expect(smallIcon).toHaveClass('amsterdam-icon-small')
    expect(mediumIcon).toHaveClass('amsterdam-icon-medium')
    expect(largeIcon).toHaveClass('amsterdam-icon-large')
  })

  it('can have a additional class name', () => {
    const { container } = render(<Icon className="large" />)

    const icon = container.querySelector(':only-child')

    expect(icon).toHaveClass('large')
    expect(icon).toHaveClass('amsterdam-icon')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLSpanElement>()

    const { container } = render(<Icon ref={ref} />)

    const icon = container.querySelector(':only-child')

    expect(ref.current).toBe(icon)
  })
})

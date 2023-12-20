import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { Stack } from './Stack'
import '@testing-library/jest-dom'

describe('Stack', () => {
  it('renders', () => {
    const { container } = render(<Stack />)
    const component = container.querySelector(':only-child')
    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    const { container } = render(<Stack />)
    const component = container.querySelector(':only-child')
    expect(component).toHaveClass('amsterdam-stack')
  })

  it('renders an additional class name', () => {
    const { container } = render(<Stack className="extra" />)
    const component = container.querySelector(':only-child')
    expect(component).toHaveClass('amsterdam-stack extra')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLImageElement>()
    const { container } = render(<Stack ref={ref} />)
    const component = container.querySelector(':only-child')
    expect(ref.current).toBe(component)
  })

  it('renders children', () => {
    render(
      <Stack>
        <p>Test Child</p>
      </Stack>,
    )
    const testChild = screen.getByText('Test Child')
    expect(testChild).toBeTruthy()
  })
})

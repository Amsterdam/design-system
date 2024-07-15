import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { Overlap } from './Overlap'
import '@testing-library/jest-dom'

describe('Overlap', () => {
  it('renders', () => {
    const { container } = render(<Overlap />)

    const component = container.querySelector(':only-child')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    const { container } = render(<Overlap />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-overlap')
  })

  it('renders an additional class name', () => {
    const { container } = render(<Overlap className="extra" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-overlap extra')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLImageElement>()

    const { container } = render(<Overlap ref={ref} />)

    const component = container.querySelector(':only-child')

    expect(ref.current).toBe(component)
  })

  it('renders children', () => {
    render(
      <Overlap>
        <p>Test Child</p>
      </Overlap>,
    )

    const testChild = screen.getByText('Test Child')

    expect(testChild).toBeTruthy()
  })
})

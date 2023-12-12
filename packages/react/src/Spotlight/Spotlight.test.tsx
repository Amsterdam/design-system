import { render } from '@testing-library/react'
import { createRef } from 'react'
import { Spotlight } from './Spotlight'
import '@testing-library/jest-dom'

describe('Spotlight', () => {
  it('renders', () => {
    const { container } = render(<Spotlight />)

    const component = container.querySelector(':only-child')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    const { container } = render(<Spotlight />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('amsterdam-spotlight')
  })

  it('renders an additional class name', () => {
    const { container } = render(<Spotlight className="extra" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('extra')

    expect(component).toHaveClass('amsterdam-spotlight')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLDivElement>()

    const { container } = render(<Spotlight ref={ref} />)

    const component = container.querySelector(':only-child')

    expect(ref.current).toBe(component)
  })

  it('gets a color class if you set a color', () => {
    const { container } = render(<Spotlight color="green" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('amsterdam-spotlight--green')
  })
})

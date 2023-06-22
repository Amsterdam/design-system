import { Alert } from '@amsterdam/design-system-react-icons'
import { render } from '@testing-library/react'
import { createRef } from 'react'
import { Icon } from './Icon'
import '@testing-library/jest-dom'

describe('Icon', () => {
  it('renders a span element', () => {
    const { container } = render(<Icon svg={Alert} />)

    const icon = container.querySelector('span:only-child')

    expect(icon).toBeInTheDocument()
  })

  it('renders a design system BEM class name', () => {
    const { container } = render(<Icon svg={Alert} />)

    const icon = container.querySelector(':only-child')

    expect(icon).toHaveClass('amsterdam-icon')
  })

  it('renders an svg child', () => {
    const { container } = render(<Icon svg={Alert} />)

    const svg = container.querySelector(':only-child svg')

    expect(svg).toBeInTheDocument()
  })

  it('renders the right size classes', () => {
    const { container: level3 } = render(<Icon svg={Alert} size="level-3" />)
    const { container: level4 } = render(<Icon svg={Alert} size="level-4" />)
    const { container: level5 } = render(<Icon svg={Alert} size="level-5" />)
    const { container: level6 } = render(<Icon svg={Alert} size="level-6" />)
    const { container: level7 } = render(<Icon svg={Alert} size="level-7" />)

    expect(level3.firstChild).toHaveClass('amsterdam-icon-size-3')
    expect(level4.firstChild).toHaveClass('amsterdam-icon-size-4')
    expect(level5.firstChild).toHaveClass('amsterdam-icon-size-5')
    expect(level6.firstChild).toHaveClass('amsterdam-icon-size-6')
    expect(level7.firstChild).toHaveClass('amsterdam-icon-size-7')
  })

  it('can have a additional class name', () => {
    const { container } = render(<Icon svg={Alert} className="large" />)

    const icon = container.querySelector(':only-child')

    expect(icon).toHaveClass('large')
    expect(icon).toHaveClass('amsterdam-icon')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLSpanElement>()

    const { container } = render(<Icon svg={Alert} ref={ref} />)

    const icon = container.querySelector(':only-child')

    expect(ref.current).toBe(icon)
  })
})

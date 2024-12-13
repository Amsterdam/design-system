import { AlertIcon } from '@amsterdam/design-system-react-icons'
import { render } from '@testing-library/react'
import { createRef } from 'react'
import { Icon } from './Icon'
import '@testing-library/jest-dom'

describe('Icon', () => {
  it('renders a span element', () => {
    const { container } = render(<Icon svg={AlertIcon} />)

    const icon = container.querySelector('span:only-child')

    expect(icon).toBeInTheDocument()
  })

  it('renders a design system BEM class name', () => {
    const { container } = render(<Icon svg={AlertIcon} />)

    const icon = container.querySelector(':only-child')

    expect(icon).toHaveClass('ams-icon')
  })

  it('renders an svg child', () => {
    const { container } = render(<Icon svg={AlertIcon} />)

    const svg = container.querySelector(':only-child svg')

    expect(svg).toBeInTheDocument()
  })

  it('renders the right size classes', () => {
    const { container: level3 } = render(<Icon svg={AlertIcon} size="level-3" />)
    const { container: level4 } = render(<Icon svg={AlertIcon} size="level-4" />)
    const { container: level5 } = render(<Icon svg={AlertIcon} size="level-5" />)
    const { container: level6 } = render(<Icon svg={AlertIcon} size="level-6" />)

    expect(level3.firstChild).toHaveClass('ams-icon--size-3')
    expect(level4.firstChild).toHaveClass('ams-icon--size-4')
    expect(level5.firstChild).toHaveClass('ams-icon--size-5')
    expect(level6.firstChild).toHaveClass('ams-icon--size-6')
  })

  it('renders the right square class', () => {
    const { container } = render(<Icon svg={AlertIcon} square />)

    const icon = container.querySelector('span:only-child')

    expect(icon).toHaveClass('ams-icon--square')
  })

  it('renders the inverse color class', () => {
    const { container } = render(
      <Icon svg={AlertIcon} inverseColor>
        Paragraph
      </Icon>,
    )

    const icon = container.querySelector('span:only-child')

    expect(icon).toHaveClass('ams-icon--inverse-color')
  })

  it('renders an additional class name', () => {
    const { container } = render(<Icon svg={AlertIcon} className="large" />)

    const icon = container.querySelector(':only-child')

    expect(icon).toHaveClass('large')
    expect(icon).toHaveClass('ams-icon')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLSpanElement>()

    const { container } = render(<Icon svg={AlertIcon} ref={ref} />)

    const icon = container.querySelector(':only-child')

    expect(ref.current).toBe(icon)
  })
})

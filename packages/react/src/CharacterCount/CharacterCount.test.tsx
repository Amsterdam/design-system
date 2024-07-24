import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { CharacterCount } from './CharacterCount'
import '@testing-library/jest-dom'

describe('Character count', () => {
  it('renders', () => {
    render(<CharacterCount length={10} maxLength={100} />)

    const component = screen.getByRole('status')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    render(<CharacterCount length={10} maxLength={100} />)

    const component = screen.getByRole('status')

    expect(component).toHaveClass('ams-character-count')
  })

  it('renders an additional class name', () => {
    render(<CharacterCount length={10} maxLength={100} className="extra" />)

    const component = screen.getByRole('status')

    expect(component).toHaveClass('ams-character-count extra')
  })

  it('renders an error class when length is larger than maxLength', () => {
    render(<CharacterCount length={101} maxLength={100} />)

    const component = screen.getByRole('status')

    expect(component).toHaveClass('ams-character-count--error')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLDivElement>()

    render(<CharacterCount length={10} maxLength={100} ref={ref} />)

    const component = screen.getByRole('status')

    expect(ref.current).toBe(component)
  })
})

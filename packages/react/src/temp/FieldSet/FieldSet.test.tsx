import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { FieldSet } from './FieldSet'
import '@testing-library/jest-dom'

describe('FieldSet', () => {
  it('renders', () => {
    render(<FieldSet legend="Test" />)

    const component = screen.getByRole('group', { name: 'Test' })

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    render(<FieldSet legend="Test" />)

    const component = screen.getByRole('group', { name: 'Test' })

    expect(component).toHaveClass('ams-field-set')
  })

  it('renders an additional class name', () => {
    render(<FieldSet legend="Test" className="extra" />)

    const component = screen.getByRole('group', { name: 'Test' })

    expect(component).toHaveClass('ams-field-set extra')
  })

  it('renders the correct legend class name', () => {
    const { container } = render(<FieldSet legend="Test" />)

    const component = container.querySelector('legend')

    expect(component).toHaveClass('ams-field-set__legend')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLFieldSetElement>()

    render(<FieldSet legend="Test" ref={ref} />)

    const component = screen.getByRole('group', { name: 'Test' })

    expect(ref.current).toBe(component)
  })
})

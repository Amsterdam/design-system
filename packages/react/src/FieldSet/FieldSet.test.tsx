/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

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

  it('renders an extra class name', () => {
    render(<FieldSet className="extra" legend="Test" />)

    const component = screen.getByRole('group', { name: 'Test' })

    expect(component).toHaveClass('ams-field-set extra')
  })

  it('renders the correct legend class name', () => {
    const { container } = render(<FieldSet legend="Test" />)

    const component = container.querySelector('legend')

    expect(component).toHaveClass('ams-field-set__legend')
  })

  it('renders the error class', () => {
    const { container } = render(<FieldSet invalid legend="Test" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-field-set--invalid')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLFieldSetElement>()

    render(<FieldSet legend="Test" ref={ref} />)

    const component = screen.getByRole('group', { name: 'Test' })

    expect(ref.current).toBe(component)
  })

  it('renders the provided hint text after the legend', () => {
    render(<FieldSet hint="hint text" legend="Legend" />)

    const component = screen.getByRole('group', { name: 'Legend (hint text)' })

    expect(component).toBeInTheDocument()
  })

  it('renders the default hint text after the legend', () => {
    render(<FieldSet legend="Legend" optional />)

    const component = screen.getByRole('group', { name: 'Legend (niet verplicht)' })

    expect(component).toBeInTheDocument()
  })

  it('renders the provided hint text after the legend when both `optional` and `hint` props are used', () => {
    render(<FieldSet hint="not required" legend="Legend" optional={true} />)

    const component = screen.getByRole('group', { name: 'Legend (not required)' })

    expect(component).toBeInTheDocument()
  })

  it('renders the provided hint text after the legend while `optional` is set to `false`', () => {
    render(<FieldSet hint="required" legend="Legend" optional={false} />)

    const component = screen.getByRole('group', { name: 'Legend (required)' })

    expect(component).toBeInTheDocument()
  })
})

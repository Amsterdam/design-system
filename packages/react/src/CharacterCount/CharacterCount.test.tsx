/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { describe, expect, it } from 'vitest'

import { CharacterCount } from './CharacterCount'

describe('CharacterCount', () => {
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

  it('renders an extra class name', () => {
    render(<CharacterCount className="extra" length={10} maxLength={100} />)

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

  it('passes additional props', () => {
    const { container } = render(
      <CharacterCount aria-hidden="false" data-test="data-test" id="id" length={10} maxLength={100} />,
    )

    const component = container.querySelector(':only-child')

    expect(component).toHaveAttribute('aria-hidden', 'false')
    expect(component).toHaveAttribute('id', 'id')
    expect(component).toHaveAttribute('data-test', 'data-test')
  })
})

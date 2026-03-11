/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { describe, expect, it } from 'vitest'

import { OrderedListItem } from './OrderedListItem'

describe('OrderedListItem', () => {
  it('renders', () => {
    render(<OrderedListItem />)

    const component = screen.getByRole('listitem')

    expect(component).toBeInTheDocument()
  })

  it('renders a design system BEM class name', () => {
    render(<OrderedListItem />)

    const component = screen.getByRole('listitem')

    expect(component).toHaveClass('ams-ordered-list__item')
  })

  it('renders an extra class name', () => {
    render(<OrderedListItem className="extra" />)

    const component = screen.getByRole('listitem')

    expect(component).toHaveClass('ams-ordered-list__item extra')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLLIElement>()

    render(<OrderedListItem ref={ref} />)

    const component = screen.getByRole('listitem')

    expect(ref.current).toBe(component)
  })

  it('passes additional props', () => {
    const { container } = render(<OrderedListItem aria-hidden="false" data-test="data-test" id="id" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveAttribute('aria-hidden', 'false')
    expect(component).toHaveAttribute('id', 'id')
    expect(component).toHaveAttribute('data-test', 'data-test')
  })
})

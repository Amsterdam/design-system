/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { describe, expect, it } from 'vitest'

import { UnorderedListItem } from './UnorderedListItem'

describe('UnorderedListItem', () => {
  it('renders', () => {
    render(<UnorderedListItem />)

    const component = screen.getByRole('listitem')

    expect(component).toBeInTheDocument()
  })

  it('renders a design system BEM class name', () => {
    render(<UnorderedListItem />)

    const component = screen.getByRole('listitem')

    expect(component).toHaveClass('ams-unordered-list__item')
  })

  it('renders an extra class name', () => {
    render(<UnorderedListItem className="extra" />)

    const component = screen.getByRole('listitem')

    expect(component).toHaveClass('ams-unordered-list__item extra')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLLIElement>()

    render(<UnorderedListItem ref={ref} />)

    const component = screen.getByRole('listitem')

    expect(ref.current).toBe(component)
  })

  it('passes additional props', () => {
    const { container } = render(<UnorderedListItem aria-hidden="false" data-test="data-test" id="id" />)
    const component = container.querySelector(':only-child')

    expect(component).toHaveAttribute('aria-hidden', 'false')
    expect(component).toHaveAttribute('id', 'id')
    expect(component).toHaveAttribute('data-test', 'data-test')
  })
})

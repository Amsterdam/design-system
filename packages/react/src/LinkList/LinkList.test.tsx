/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { describe, expect, it } from 'vitest'

import { LinkList } from './LinkList'

describe('LinkList', () => {
  it('renders', () => {
    render(<LinkList />)

    const component = screen.getByRole('list')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    render(<LinkList />)

    const component = screen.getByRole('list')

    expect(component).toHaveClass('ams-link-list')
  })

  it('renders an extra class name', () => {
    render(<LinkList className="extra" />)

    const component = screen.getByRole('list')

    expect(component).toHaveClass('ams-link-list extra')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLUListElement>()

    render(<LinkList ref={ref} />)

    const component = screen.getByRole('list')

    expect(ref.current).toBe(component)
  })

  it('passes additional props', () => {
    const { container } = render(<LinkList aria-hidden="false" data-test="data-test" id="id" />)
    const component = container.querySelector(':only-child')

    expect(component).toHaveAttribute('aria-hidden', 'false')
    expect(component).toHaveAttribute('id', 'id')
    expect(component).toHaveAttribute('data-test', 'data-test')
  })
})

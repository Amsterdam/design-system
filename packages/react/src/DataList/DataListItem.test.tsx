/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { render } from '@testing-library/react'
import { createRef } from 'react'
import { describe, expect, it } from 'vitest'

import { DataList } from './DataList'

describe('DataListItem', () => {
  it('renders', () => {
    const { container } = render(<DataList.Item />)

    const component = container.querySelector(':only-child')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    const { container } = render(<DataList.Item />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-data-list__item')
  })

  it('renders an extra class name', () => {
    const { container } = render(<DataList.Item className="extra" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-data-list__item extra')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLDivElement>()

    const { container } = render(<DataList.Item ref={ref} />)

    const component = container.querySelector(':only-child')

    expect(ref.current).toBe(component)
  })

  it('passes additional props', () => {
    const { container } = render(<DataList.Item aria-hidden="false" data-test="data-test" id="id" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveAttribute('aria-hidden', 'false')
    expect(component).toHaveAttribute('id', 'id')
    expect(component).toHaveAttribute('data-test', 'data-test')
  })
})

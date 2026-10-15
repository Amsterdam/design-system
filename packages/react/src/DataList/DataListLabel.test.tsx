/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { describe, expect, it } from 'vitest'

import { DataList } from './DataList'

describe('DataListLabel', () => {
  it('renders', () => {
    render(<DataList.Label>Test</DataList.Label>)

    const component = screen.getByRole('term')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    render(<DataList.Label>Test</DataList.Label>)

    const component = screen.getByRole('term')

    expect(component).toHaveClass('ams-data-list__label')
  })

  it('renders an extra class name', () => {
    render(<DataList.Label className="extra">Test</DataList.Label>)

    const component = screen.getByRole('term')

    expect(component).toHaveClass('ams-data-list__label extra')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLElement>()

    render(<DataList.Label ref={ref}>Test</DataList.Label>)

    const component = screen.getByRole('term')

    expect(ref.current).toBe(component)
  })

  it('passes additional props', () => {
    render(<DataList.Label aria-hidden="false" data-test="data-test" id="id" />)

    const component = screen.getByRole('term')

    expect(component).toHaveAttribute('aria-hidden', 'false')
    expect(component).toHaveAttribute('id', 'id')
    expect(component).toHaveAttribute('data-test', 'data-test')
  })
})

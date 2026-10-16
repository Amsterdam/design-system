/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { describe, expect, it } from 'vitest'

import { DataList } from './DataList'

describe('DataListKey', () => {
  it('renders', () => {
    render(<DataList.Key>Test</DataList.Key>)

    const component = screen.getByRole('term')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
    expect(component.tagName).toBe('DT')
  })

  it('renders a design system BEM class name', () => {
    render(<DataList.Key>Test</DataList.Key>)

    expect(screen.getByRole('term')).toHaveClass('ams-data-list__key')
  })

  it('renders an extra class name', () => {
    render(<DataList.Key className="extra">Test</DataList.Key>)

    expect(screen.getByRole('term')).toHaveClass('ams-data-list__key extra')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLElement>()

    render(<DataList.Key ref={ref}>Test</DataList.Key>)

    expect(ref.current).toBe(screen.getByRole('term'))
  })

  it('passes additional props', () => {
    render(<DataList.Key aria-hidden="false" data-test="data-test" id="id" />)

    const component = screen.getByRole('term')

    expect(component).toHaveAttribute('aria-hidden', 'false')
    expect(component).toHaveAttribute('id', 'id')
    expect(component).toHaveAttribute('data-test', 'data-test')
  })
})

/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { render } from '@testing-library/react'
import { createRef } from 'react'
import { describe, expect, it } from 'vitest'

import { MetadataSeparator } from './MetadataSeparator'

describe('Metadata.Separator', () => {
  it('renders', () => {
    const { container } = render(<MetadataSeparator />)

    const component = container.querySelector(':only-child')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    const { container } = render(<MetadataSeparator />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-metadata__separator')
  })

  it('renders an extra class name', () => {
    const { container } = render(<MetadataSeparator className="extra" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-metadata__separator extra')
  })

  it('renders an en dash with a space on either side', () => {
    const { container } = render(<MetadataSeparator />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveTextContent('–')
    expect(component?.textContent).toBe(' – ')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLSpanElement>()

    const { container } = render(<MetadataSeparator ref={ref} />)

    const component = container.querySelector(':only-child')

    expect(ref.current).toBe(component)
  })
})

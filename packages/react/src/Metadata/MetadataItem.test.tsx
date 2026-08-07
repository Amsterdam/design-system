/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { describe, expect, it } from 'vitest'

import { MetadataItem } from './MetadataItem'

describe('Metadata.Item', () => {
  it('renders', () => {
    const { container } = render(<MetadataItem />)

    const component = container.querySelector(':only-child')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    const { container } = render(<MetadataItem />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-metadata__item')
  })

  it('renders an extra class name', () => {
    const { container } = render(<MetadataItem className="extra" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-metadata__item extra')
  })

  it('renders rich text content', () => {
    render(
      <MetadataItem>
        <time dateTime="2025-07-29">29 juli 2025</time>
      </MetadataItem>,
    )

    expect(screen.getByText('29 juli 2025')).toBeInTheDocument()
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLSpanElement>()

    const { container } = render(<MetadataItem ref={ref} />)

    const component = container.querySelector(':only-child')

    expect(ref.current).toBe(component)
  })
})

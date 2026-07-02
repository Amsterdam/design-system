/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { render } from '@testing-library/react'
import { createRef } from 'react'
import { describe, expect, it } from 'vitest'

import { Placeholder, placeholderAppearances } from './Placeholder'

describe('Placeholder', () => {
  it('renders', () => {
    const { container } = render(<Placeholder />)

    const component = container.querySelector(':only-child')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    const { container } = render(<Placeholder />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-placeholder')
  })

  it('renders an extra class name', () => {
    const { container } = render(<Placeholder className="extra" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-placeholder extra')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLDivElement>()

    const { container } = render(<Placeholder ref={ref} />)

    const component = container.querySelector(':only-child')

    expect(ref.current).toBe(component)
  })

  it('is hidden from assistive technology', () => {
    const { container } = render(<Placeholder />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveAttribute('aria-hidden', 'true')
  })

  it('renders the paragraph appearance with 3 lines by default', () => {
    const { container } = render(<Placeholder />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-placeholder--paragraph')
    expect(container.querySelectorAll('.ams-placeholder__line')).toHaveLength(3)
  })

  it('renders a class name for each appearance', () => {
    placeholderAppearances.forEach((appearance) => {
      const { container, unmount } = render(<Placeholder appearance={appearance} />)

      const component = container.querySelector(':only-child')

      expect(component).toHaveClass(`ams-placeholder--${appearance}`)

      unmount()
    })
  })

  it('renders the number of lines for a paragraph', () => {
    const { container } = render(<Placeholder lines={5} />)

    expect(container.querySelectorAll('.ams-placeholder__line')).toHaveLength(5)
  })

  it('renders a single heading block for a heading', () => {
    const { container } = render(<Placeholder appearance="heading" />)

    expect(container.querySelectorAll('.ams-placeholder__heading')).toHaveLength(1)
    expect(container.querySelectorAll('.ams-placeholder__line')).toHaveLength(0)
  })

  it('renders an image, a heading, and the number of lines for a card', () => {
    const { container } = render(<Placeholder appearance="card" lines={2} />)

    expect(container.querySelectorAll('.ams-placeholder__image')).toHaveLength(1)
    expect(container.querySelectorAll('.ams-placeholder__heading')).toHaveLength(1)
    expect(container.querySelectorAll('.ams-placeholder__line')).toHaveLength(2)
  })

  it('renders a marker and a line for each list item', () => {
    const { container } = render(<Placeholder appearance="list" lines={4} />)

    expect(container.querySelectorAll('.ams-placeholder__list-item')).toHaveLength(4)
    expect(container.querySelectorAll('.ams-placeholder__marker')).toHaveLength(4)
    expect(container.querySelectorAll('.ams-placeholder__line')).toHaveLength(4)
  })

  it('renders a header row and the number of rows and columns for a table', () => {
    const { container } = render(<Placeholder appearance="table" columns={4} rows={2} />)

    expect(container.querySelectorAll('.ams-placeholder__table-row')).toHaveLength(3)
    expect(container.querySelectorAll('.ams-placeholder__table-row--header')).toHaveLength(1)
    expect(container.querySelectorAll('.ams-placeholder__table-cell')).toHaveLength(12)
  })
})

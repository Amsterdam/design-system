/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { render } from '@testing-library/react'
import { createRef } from 'react'
import { describe, expect, it } from 'vitest'

import { DescriptionList, descriptionListTermsWidths } from './DescriptionList'

describe('DescriptionList', () => {
  it('renders', () => {
    const { container } = render(<DescriptionList />)

    const component = container.querySelector(':only-child')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    const { container } = render(<DescriptionList />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-description-list')
  })

  it('renders an extra class name', () => {
    const { container } = render(<DescriptionList className="extra" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-description-list extra')
  })

  descriptionListTermsWidths.map((width) =>
    it(`renders the class name for the ‘${width}’ terms column width`, () => {
      const { container } = render(<DescriptionList termsWidth={width} />)

      const component = container.querySelector(':only-child')

      expect(component).toHaveClass(`ams-description-list--${width}`)
    }),
  )

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLDListElement>()

    const { container } = render(<DescriptionList ref={ref} />)

    const component = container.querySelector(':only-child')

    expect(ref.current).toBe(component)
  })

  it('renders the class name for inverse color', () => {
    const { container } = render(<DescriptionList color="inverse" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-description-list--inverse')
  })

  it('passes additional props', () => {
    const { container } = render(<DescriptionList aria-hidden="false" data-test="data-test" id="id" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveAttribute('aria-hidden', 'false')
    expect(component).toHaveAttribute('id', 'id')
    expect(component).toHaveAttribute('data-test', 'data-test')
  })
})

/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { render } from '@testing-library/react'
import { createRef } from 'react'
import { describe, expect, it } from 'vitest'

import { PageFooter } from './PageFooter'

describe('PageFooterSpotlight', () => {
  it('renders', () => {
    const { container } = render(<PageFooter.Spotlight />)

    const component = container.querySelector(':only-child')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    const { container } = render(<PageFooter.Spotlight />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-page-footer__spotlight')
  })

  it('renders an extra class name', () => {
    const { container } = render(<PageFooter.Spotlight className="extra" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-page-footer__spotlight extra')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLDivElement>()

    const { container } = render(<PageFooter.Spotlight ref={ref} />)

    const component = container.querySelector(':only-child')

    expect(ref.current).toBe(component)
  })

  it('passes additional props', () => {
    const { container } = render(<PageFooter.Spotlight aria-hidden="false" data-test="data-test" id="id" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveAttribute('aria-hidden', 'false')
    expect(component).toHaveAttribute('id', 'id')
    expect(component).toHaveAttribute('data-test', 'data-test')
  })
})

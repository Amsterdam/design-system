/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { render, screen } from '@testing-library/react'
import { createRef } from 'react'

import { aspectRatioOptions } from '../common/types'
import { generateAspectRatioClass } from './generateAspectRatioClass'
import { Image } from './Image'
import '@testing-library/jest-dom'

describe('Image', () => {
  it('renders', () => {
    render(<Image alt="" />)

    const component = screen.getByRole('presentation')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    render(<Image alt="" />)

    const component = screen.getByRole('presentation')

    expect(component).toHaveClass('ams-image')
  })

  it('renders an extra class name', () => {
    render(<Image alt="" className="extra" />)

    const component = screen.getByRole('presentation')

    expect(component).toHaveClass('ams-image extra')
  })

  aspectRatioOptions.forEach((aspectRatio) => {
    it(`renders class names to display the image in the ${aspectRatio} aspect ratio`, () => {
      render(<Image alt="" aspectRatio={aspectRatio} />)

      const component = screen.getByRole('presentation')

      const aspectRatioClass = generateAspectRatioClass(aspectRatio) || ''
      expect(component).toHaveClass(aspectRatioClass)
    })
  })

  it('sets a default width attribute', () => {
    render(<Image alt="" />)

    const component = screen.getByRole('presentation')

    expect(component).toHaveAttribute('width', '600')
  })

  it('overrides the default width attribute', () => {
    render(<Image alt="" width={300} />)

    const component = screen.getByRole('presentation')

    expect(component).toHaveAttribute('width', '300')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLImageElement>()

    render(<Image alt="" ref={ref} />)

    const component = screen.getByRole('presentation')

    expect(ref.current).toBe(component)
  })
})

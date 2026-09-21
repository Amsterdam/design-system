/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { describe, expect, it } from 'vitest'

import { ProgressBar } from './ProgressBar'

const defaultProps = {
  max: 10,
  text: '4 van de 10 stappen',
  value: 4,
}

describe('ProgressBar', () => {
  it('renders', () => {
    const { container } = render(<ProgressBar {...defaultProps} />)

    const component = container.querySelector(':only-child')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    const { container } = render(<ProgressBar {...defaultProps} />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-progress-bar')
  })

  it('renders an extra class name', () => {
    const { container } = render(<ProgressBar {...defaultProps} className="extra" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-progress-bar extra')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLDivElement>()

    const { container } = render(<ProgressBar {...defaultProps} ref={ref} />)

    const component = container.querySelector(':only-child')

    expect(ref.current).toBe(component)
  })

  it('spreads additional props onto the root element', () => {
    const { container } = render(<ProgressBar {...defaultProps} data-test="data-test" id="id" />)

    const root = container.querySelector(':only-child')

    expect(root).toHaveAttribute('id', 'id')
    expect(root).toHaveAttribute('data-test', 'data-test')
  })

  it('shows the text visually, above the bar', () => {
    const { container } = render(<ProgressBar {...defaultProps} />)

    const text = container.querySelector('.ams-progress-bar-text')

    expect(text).toHaveTextContent(defaultProps.text)
    expect(text).toBeVisible()
  })

  it('hides the visible text from assistive technology, so it is not announced twice', () => {
    const { container } = render(<ProgressBar {...defaultProps} />)

    const text = container.querySelector('.ams-progress-bar-text')

    expect(text).toHaveAttribute('aria-hidden', 'true')
  })

  it('renders a native progress element carrying the value and max', () => {
    render(<ProgressBar {...defaultProps} />)

    const progress = screen.getByRole('progressbar') as HTMLProgressElement

    expect(progress.value).toBe(defaultProps.value)
    expect(progress.max).toBe(defaultProps.max)
  })

  it('labels the native progress element with the text, so that is announced instead of a percentage', () => {
    render(<ProgressBar {...defaultProps} />)

    expect(screen.getByRole('progressbar')).toHaveAccessibleName(defaultProps.text)
  })

  it('hides the visual fill from assistive technology', () => {
    const { container } = render(<ProgressBar {...defaultProps} />)

    const fill = container.querySelector('.ams-progress-bar-fill')

    expect(fill).toHaveAttribute('aria-hidden', 'true')
  })

  it('scales the visual fill to match value and max', () => {
    const { container } = render(<ProgressBar max={4} text="1 van de 4 stappen" value={1} />)

    const fill = container.querySelector('.ams-progress-bar-fill')

    expect(fill).toHaveStyle({ transform: 'scaleX(0.25)' })
  })

  it('scales the visual fill to empty when value is 0', () => {
    const { container } = render(<ProgressBar max={4} text="0 van de 4 stappen" value={0} />)

    const fill = container.querySelector('.ams-progress-bar-fill')

    expect(fill).toHaveStyle({ transform: 'scaleX(0)' })
  })

  it('scales the visual fill to full width when value equals max', () => {
    const { container } = render(<ProgressBar max={4} text="4 van de 4 stappen" value={4} />)

    const fill = container.querySelector('.ams-progress-bar-fill')

    expect(fill).toHaveStyle({ transform: 'scaleX(1)' })
  })
})

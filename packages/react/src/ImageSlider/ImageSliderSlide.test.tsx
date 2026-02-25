/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { render } from '@testing-library/react'

import { ImageSliderSlide } from './ImageSliderSlide'

describe('ImageSliderSlide', () => {
  it('renders a caption when provided', () => {
    const { getByText } = render(
      <ImageSliderSlide
        alt="One"
        caption="A bridge over a calm river."
        currentSlideId={0}
        index={0}
        src="https://picsum.photos/id/122/320/180"
      />,
    )

    expect(getByText('A bridge over a calm river.')).toBeInTheDocument()
  })

  it('does not render a figure element when no caption is provided', () => {
    const { container } = render(
      <ImageSliderSlide alt="One" currentSlideId={0} index={0} src="https://picsum.photos/id/122/320/180" />,
    )

    expect(container.querySelector('figure')).not.toBeInTheDocument()
  })

  it('renders a figure element when a caption is provided', () => {
    const { container } = render(
      <ImageSliderSlide
        alt="One"
        caption="A bridge over a calm river."
        currentSlideId={0}
        index={0}
        src="https://picsum.photos/id/122/320/180"
      />,
    )

    expect(container.querySelector('figure')).toBeInTheDocument()
  })

  it('hides captioned non-current slides from assistive technologies', () => {
    const { container } = render(
      <ImageSliderSlide
        alt="One"
        caption="A bridge over a calm river."
        currentSlideId={0}
        index={1}
        src="https://picsum.photos/id/122/320/180"
      />,
    )

    const figure = container.querySelector('figure')
    const ariaHiddenWrapper = container.querySelector('[aria-hidden="true"]')

    expect(figure).toBeInTheDocument()
    expect(ariaHiddenWrapper).toBeInTheDocument()
    expect(ariaHiddenWrapper).toContainElement(figure as HTMLElement)
  })
})

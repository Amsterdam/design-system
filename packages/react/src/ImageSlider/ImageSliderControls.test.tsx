import { render } from '@testing-library/react'
import { createRef } from 'react'
import { ImageSliderControls } from './ImageSliderControls'
import '@testing-library/jest-dom'

describe('Image Slider Controls', () => {
  const nextLabel = 'Volgende'
  const previousLabel = 'Vorige'

  it('renders', () => {
    const { container } = render(<ImageSliderControls nextLabel={nextLabel} previousLabel={previousLabel} />)

    const component = container.querySelector(':only-child')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLDivElement>()

    const { container } = render(<ImageSliderControls ref={ref} nextLabel={nextLabel} previousLabel={previousLabel} />)

    const component = container.querySelector(':only-child')

    expect(ref.current).toBe(component)
  })
})

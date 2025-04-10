import { render } from '@testing-library/react'
import { createRef } from 'react'
import { PageFooter } from './PageFooter'
import '@testing-library/jest-dom'

describe('Page Footer Spotlight', () => {
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

  it('renders an extra class through the className prop', () => {
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
})

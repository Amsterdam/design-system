import { render } from '@testing-library/react'
import { createRef } from 'react'
import { DescriptionList } from './DescriptionList'
import '@testing-library/jest-dom'

describe('Description list', () => {
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

  it('renders an additional class name', () => {
    const { container } = render(<DescriptionList className="extra" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-description-list extra')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLDListElement>()

    const { container } = render(<DescriptionList ref={ref} />)

    const component = container.querySelector(':only-child')

    expect(ref.current).toBe(component)
  })
})

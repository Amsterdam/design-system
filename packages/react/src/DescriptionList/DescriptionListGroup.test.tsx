import { render } from '@testing-library/react'
import { createRef } from 'react'
import { DescriptionList } from './DescriptionList'
import '@testing-library/jest-dom'

describe('Description List Group', () => {
  it('renders', () => {
    const { container } = render(<DescriptionList.Group>Test</DescriptionList.Group>)

    const component = container.querySelector(':only-child')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    const { container } = render(<DescriptionList.Group>Test</DescriptionList.Group>)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-description-list__group')
  })

  it('renders an additional class name', () => {
    const { container } = render(<DescriptionList.Group className="extra">Test</DescriptionList.Group>)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-description-list__group extra')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLDivElement>()

    const { container } = render(<DescriptionList.Group ref={ref}>Test</DescriptionList.Group>)

    const component = container.querySelector(':only-child')

    expect(ref.current).toBe(component)
  })
})

import { render } from '@testing-library/react'
import { createRef } from 'react'
import { DescriptionList } from './DescriptionList'
import '@testing-library/jest-dom'

describe('Description list details', () => {
  it('renders', () => {
    const { container } = render(<DescriptionList.Details>Test</DescriptionList.Details>)

    const component = container.querySelector(':only-child')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    const { container } = render(<DescriptionList.Details>Test</DescriptionList.Details>)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-description-list__details')
  })

  it('renders an additional class name', () => {
    const { container } = render(<DescriptionList.Details className="extra">Test</DescriptionList.Details>)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-description-list__details extra')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLElement>()

    const { container } = render(<DescriptionList.Details ref={ref}>Test</DescriptionList.Details>)

    const component = container.querySelector(':only-child')

    expect(ref.current).toBe(component)
  })
})

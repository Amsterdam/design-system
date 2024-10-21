import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { DescriptionList } from './DescriptionList'
import '@testing-library/jest-dom'

describe('Description List Description', () => {
  it('renders', () => {
    render(<DescriptionList.Details>Test</DescriptionList.Details>)

    const component = screen.getByRole('definition')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    render(<DescriptionList.Details>Test</DescriptionList.Details>)

    const component = screen.getByRole('definition')

    expect(component).toHaveClass('ams-description-list__details')
  })

  it('renders an additional class name', () => {
    render(<DescriptionList.Details className="extra">Test</DescriptionList.Details>)

    const component = screen.getByRole('definition')

    expect(component).toHaveClass('ams-description-list__details extra')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLElement>()

    render(<DescriptionList.Details ref={ref}>Test</DescriptionList.Details>)

    const component = screen.getByRole('definition')

    expect(ref.current).toBe(component)
  })
})

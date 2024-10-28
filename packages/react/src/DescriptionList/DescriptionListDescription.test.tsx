import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { DescriptionList } from './DescriptionList'
import '@testing-library/jest-dom'

describe('Description List Description', () => {
  it('renders', () => {
    render(<DescriptionList.Description>Test</DescriptionList.Description>)

    const component = screen.getByRole('definition')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    render(<DescriptionList.Description>Test</DescriptionList.Description>)

    const component = screen.getByRole('definition')

    expect(component).toHaveClass('ams-description-list__description')
  })

  it('renders an additional class name', () => {
    render(<DescriptionList.Description className="extra">Test</DescriptionList.Description>)

    const component = screen.getByRole('definition')

    expect(component).toHaveClass('ams-description-list__description extra')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLElement>()

    render(<DescriptionList.Description ref={ref}>Test</DescriptionList.Description>)

    const component = screen.getByRole('definition')

    expect(ref.current).toBe(component)
  })
})

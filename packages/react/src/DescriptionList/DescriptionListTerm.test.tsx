import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { DescriptionList } from './DescriptionList'
import '@testing-library/jest-dom'

describe('Description list term', () => {
  it('renders', () => {
    render(<DescriptionList.Term>Test</DescriptionList.Term>)

    const component = screen.getByRole('term')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    render(<DescriptionList.Term>Test</DescriptionList.Term>)

    const component = screen.getByRole('term')

    expect(component).toHaveClass('ams-description-list__term')
  })

  it('renders an additional class name', () => {
    render(<DescriptionList.Term className="extra">Test</DescriptionList.Term>)

    const component = screen.getByRole('term')

    expect(component).toHaveClass('ams-description-list__term extra')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLElement>()

    const { container } = render(<DescriptionList.Term ref={ref}>Test</DescriptionList.Term>)

    const component = container.querySelector(':only-child')

    expect(ref.current).toBe(component)
  })
})

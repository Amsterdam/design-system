import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { DescriptionList } from './DescriptionList'
import '@testing-library/jest-dom'

describe('Description List Term', () => {
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

  it('renders an extra class name', () => {
    render(<DescriptionList.Term className="extra">Test</DescriptionList.Term>)

    const component = screen.getByRole('term')

    expect(component).toHaveClass('ams-description-list__term extra')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLElement>()

    render(<DescriptionList.Term ref={ref}>Test</DescriptionList.Term>)

    const component = screen.getByRole('term')

    expect(ref.current).toBe(component)
  })
})

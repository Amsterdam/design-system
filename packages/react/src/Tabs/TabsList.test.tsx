import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { TabsList } from './TabsList'
import '@testing-library/jest-dom'

describe('Tabs list', () => {
  it('renders', () => {
    render(<TabsList />)

    const component = screen.getByRole('tablist')

    expect(component).toBeInTheDocument()
  })

  it('renders a design system BEM class name', () => {
    render(<TabsList />)

    const component = screen.getByRole('tablist')

    expect(component).toHaveClass('ams-tabs__list')
  })

  it('renders an additional class name', () => {
    render(<TabsList className="extra" />)

    const component = screen.getByRole('tablist')

    expect(component).toHaveClass('ams-tabs__list extra')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLDivElement>()

    const { container } = render(<TabsList ref={ref} />)

    const tabsList = container.querySelector('.ams-tabs__list')

    expect(ref.current).toBe(tabsList)
  })
})

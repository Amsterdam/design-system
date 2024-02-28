import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { Tabs } from './Tabs'
import '@testing-library/jest-dom'

describe('Tabs list', () => {
  it('renders', () => {
    render(<Tabs.List></Tabs.List>)

    const component = screen.getByRole('tablist')

    expect(component).toBeInTheDocument()
  })

  it('renders a design system BEM class name', () => {
    render(<Tabs.List></Tabs.List>)

    const component = screen.getByRole('tablist')

    expect(component).toHaveClass('amsterdam-tabs__list')
  })

  it('renders an additional class name', () => {
    render(<Tabs.List className="extra"></Tabs.List>)

    const component = screen.getByRole('tablist')

    expect(component).toHaveClass('amsterdam-tabs__list extra')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLDivElement>()

    const { container } = render(<Tabs.List ref={ref}></Tabs.List>)

    const tabsList = container.querySelector('.amsterdam-tabs__list')

    expect(ref.current).toBe(tabsList)
  })
})

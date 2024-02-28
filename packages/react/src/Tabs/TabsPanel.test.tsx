import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { TabsPanel } from './TabsPanel'
import '@testing-library/jest-dom'

describe('Tabs panel', () => {
  it('renders', () => {
    render(<TabsPanel tab={0} />)

    const component = screen.getByRole('tabpanel')

    expect(component).toBeInTheDocument()
  })

  it('renders a design system BEM class name', () => {
    render(<TabsPanel tab={0} />)

    const component = screen.getByRole('tabpanel')

    expect(component).toHaveClass('amsterdam-tabs__panel')
  })

  it('renders an additional class name', () => {
    render(<TabsPanel tab={0} className="extra" />)

    const component = screen.getByRole('tabpanel')

    expect(component).toHaveClass('amsterdam-tabs__panel extra')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLDivElement>()

    const { container } = render(<TabsPanel tab={0} ref={ref} />)

    const tabsPanel = container.querySelector('.amsterdam-tabs__panel')

    expect(ref.current).toBe(tabsPanel)
  })

  // Tabs prop testen
})

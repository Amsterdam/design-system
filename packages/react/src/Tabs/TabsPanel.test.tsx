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

    expect(component).toHaveClass('ams-tabs__panel')
  })

  it('renders an additional class name', () => {
    render(<TabsPanel tab={0} className="extra" />)

    const component = screen.getByRole('tabpanel')

    expect(component).toHaveClass('ams-tabs__panel extra')
  })

  it('renders the correct id based on the tabs prop', () => {
    const { container } = render(<TabsPanel tab={0} />)

    const component = container.querySelector('#-panel-0')

    expect(component).toBeInTheDocument()
  })

  it('should associate the tab with the correct button', () => {
    render(<TabsPanel tab={0} />)

    const component = screen.getByRole('tabpanel')

    expect(component).toHaveAttribute('aria-labelledby', '-tab-0')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLDivElement>()

    render(<TabsPanel tab={0} ref={ref} />)

    const component = screen.getByRole('tabpanel')

    expect(ref.current).toBe(component)
  })
})

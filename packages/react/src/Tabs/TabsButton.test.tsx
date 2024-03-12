import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { TabsButton } from './TabsButton'
import '@testing-library/jest-dom'

describe('Tabs button', () => {
  it('renders', () => {
    render(<TabsButton tab={0} />)

    const component = screen.getByRole('tab')

    expect(component).toBeInTheDocument()
  })

  it('renders a design system BEM class name', () => {
    render(<TabsButton tab={0} />)

    const component = screen.getByRole('tab')

    expect(component).toHaveClass('ams-tabs__button')
  })

  it('renders an additional class name', () => {
    render(<TabsButton tab={0} className="extra" />)

    const component = screen.getByRole('tab')

    expect(component).toHaveClass('ams-tabs__button extra')
  })

  it('renders a label', () => {
    render(<TabsButton tab={0}>Label</TabsButton>)

    const component = screen.getByRole('tab', { name: 'Label' })

    expect(component).toBeInTheDocument()
  })

  it('renders the correct id based on the tabs prop', () => {
    const { container } = render(<TabsButton tab={123} />)

    const component = container.querySelector('#-tab-123')

    expect(component).toBeInTheDocument()
  })

  it('should associate the button with the correct tab', () => {
    render(<TabsButton tab={0} />)

    const component = screen.getByRole('tab')

    expect(component).toHaveAttribute('aria-controls', '-panel-0')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLButtonElement>()
    render(<TabsButton tab={0} ref={ref} />)

    const component = screen.getByRole('tab')

    expect(ref.current).toBe(component)
  })
})

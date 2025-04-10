import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { TabsButton } from './TabsButton'
import '@testing-library/jest-dom'

describe('Tabs button', () => {
  it('renders', () => {
    render(<TabsButton tab="one" />)

    const component = screen.getByRole('tab')

    expect(component).toBeInTheDocument()
  })

  it('renders a design system BEM class name', () => {
    render(<TabsButton tab="one" />)

    const component = screen.getByRole('tab')

    expect(component).toHaveClass('ams-tabs__button')
  })

  it('renders an extra class through the className prop', () => {
    render(<TabsButton className="extra" tab="one" />)

    const component = screen.getByRole('tab')

    expect(component).toHaveClass('ams-tabs__button extra')
  })

  it('renders a label', () => {
    render(<TabsButton tab="one">Label</TabsButton>)

    const component = screen.getByRole('tab', { name: 'Label' })

    expect(component).toBeInTheDocument()
  })

  it('renders the correct id based on the tabs prop', () => {
    const { container } = render(<TabsButton tab="one" />)

    const component = container.querySelector('#-tab-one')

    expect(component).toBeInTheDocument()
  })

  it('should associate the button with the correct tab', () => {
    render(<TabsButton tab="one" />)

    const component = screen.getByRole('tab')

    expect(component).toHaveAttribute('aria-controls', '-panel-one')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLButtonElement>()

    render(<TabsButton ref={ref} tab="one" />)

    const component = screen.getByRole('tab')

    expect(ref.current).toBe(component)
  })
})

import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { Tabs } from './Tabs'
import '@testing-library/jest-dom'

describe('Tabs Panel', () => {
  it('renders', () => {
    render(
      <Tabs activeTab="one">
        <Tabs.Panel tab="one" />
      </Tabs>,
    )

    const component = screen.getByRole('tabpanel')

    expect(component).toBeInTheDocument()
  })

  it('renders a design system BEM class name', () => {
    render(
      <Tabs activeTab="one">
        <Tabs.Panel tab="one" />
      </Tabs>,
    )

    const component = screen.getByRole('tabpanel')

    expect(component).toHaveClass('ams-tabs__panel')
  })

  it('renders an additional class name', () => {
    render(
      <Tabs activeTab="one">
        <Tabs.Panel tab="one" />
      </Tabs>,
    )

    const component = screen.getByRole('tabpanel')

    expect(component).toHaveClass('ams-tabs__panel extra')
  })

  it('renders the correct id based on the tabs prop', () => {
    const { container } = render(
      <Tabs activeTab="one">
        <Tabs.Panel tab="one" />
      </Tabs>,
    )

    const component = container.querySelector('#-panel-0')

    expect(component).toBeInTheDocument()
  })

  it('should associate the tab with the correct button', () => {
    render(
      <Tabs activeTab="one">
        <Tabs.Panel tab="one" />
      </Tabs>,
    )

    const component = screen.getByRole('tabpanel')

    expect(component).toHaveAttribute('aria-labelledby', '-tab-0')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLDivElement>()

    render(
      <Tabs activeTab="one">
        <Tabs.Panel ref={ref} tab="one" />
      </Tabs>,
    )

    const component = screen.getByRole('tabpanel')

    expect(ref.current).toBe(component)
  })
})

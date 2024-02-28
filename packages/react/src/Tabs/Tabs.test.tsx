import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { Tabs } from './Tabs'
import '@testing-library/jest-dom'

describe('Tabs', () => {
  it('renders', () => {
    render(<Tabs />)

    const component = screen.getByRole('tabs')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    render(<Tabs />)

    const component = screen.getByRole('tabs')

    expect(component).toHaveClass('amsterdam-tabs')
  })

  it('renders an additional class name', () => {
    render(<Tabs className="extra" />)

    const component = screen.getByRole('tabs')

    expect(component).toHaveClass('amsterdam-tabs extra')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLDivElement>()

    const { container } = render(<Tabs ref={ref} />)

    const component = container.querySelector(':only-child')

    expect(ref.current).toBe(component)
  })

  it('supports children', () => {
    render(
      <Tabs>
        <Tabs.List>
          <Tabs.Button tab={0} label="Tab 1" />
          <Tabs.Button tab={1} label="Tab 2" />
        </Tabs.List>
        <Tabs.Panel tab={0}>Content 1</Tabs.Panel>
        <Tabs.Panel tab={2}>Content 2</Tabs.Panel>
      </Tabs>,
    )

    expect(screen.getByRole('tabs')).toBeInTheDocument()
    expect(screen.getByRole('tablist')).toBeInTheDocument()
    expect(screen.getByRole('tab', { selected: true })).toBeInTheDocument()
    expect(screen.getByRole('tabpanel')).toBeInTheDocument()
  })

  it('should render its subcomponents', () => {
    render(
      <Tabs>
        <Tabs.List>
          <Tabs.Button tab={0} label="Tab 1" />
          <Tabs.Button tab={1} label="Tab 2" />
        </Tabs.List>
        <Tabs.Panel tab={0}>Content 1</Tabs.Panel>
        <Tabs.Panel tab={1}>Content 2</Tabs.Panel>
      </Tabs>,
    )

    expect(screen.getByRole('tab', { name: 'Tab 1', selected: true })).toBeInTheDocument()
    expect(screen.getByRole('tab', { name: 'Tab 2', selected: false })).toBeInTheDocument()
    expect(screen.getByRole('tabpanel')).toBeInTheDocument()
  })

  // TODO add switching of tabs
})

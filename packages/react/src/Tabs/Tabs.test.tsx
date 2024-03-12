import { fireEvent, render, screen } from '@testing-library/react'
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

    expect(component).toHaveClass('ams-tabs')
  })

  it('renders an additional class name', () => {
    render(<Tabs className="extra" />)

    const component = screen.getByRole('tabs')

    expect(component).toHaveClass('ams-tabs extra')
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
          <Tabs.Button tab={0}>Tab 1</Tabs.Button>
          <Tabs.Button tab={1}>Tab 2</Tabs.Button>
        </Tabs.List>
        <Tabs.Panel tab={0}>Content 1</Tabs.Panel>
        <Tabs.Panel tab={1}>Content 2</Tabs.Panel>
      </Tabs>,
    )

    expect(screen.getByRole('tabs')).toBeInTheDocument()
    expect(screen.getByRole('tablist')).toBeInTheDocument()
    expect(screen.getByRole('tab', { selected: true })).toBeInTheDocument()
    expect(screen.getByRole('tabpanel')).toBeInTheDocument()
  })

  it('should select a tab when clicked', async () => {
    render(
      <Tabs>
        <Tabs.List>
          <Tabs.Button tab={0}>Tab 1</Tabs.Button>
          <Tabs.Button tab={1}>Tab 2</Tabs.Button>
        </Tabs.List>
        <Tabs.Panel tab={0}>Content 1</Tabs.Panel>
        <Tabs.Panel tab={1}>Content 2</Tabs.Panel>
      </Tabs>,
    )

    const tabOne = screen.getByRole('tab', { name: 'Tab 1' })
    const tabTwo = screen.getByRole('tab', { name: 'Tab 2' })

    expect(tabOne).toHaveAttribute('aria-selected', 'true')
    expect(tabOne).toHaveAttribute('tabindex', '0')

    expect(tabTwo).toHaveAttribute('aria-selected', 'false')
    expect(tabTwo).toHaveAttribute('tabindex', '-1')

    expect(screen.getByRole('tabpanel')).toHaveTextContent('Content 1')

    if (tabTwo) {
      fireEvent.click(tabTwo)
    }

    expect(tabOne).toHaveAttribute('aria-selected', 'false')
    expect(tabOne).toHaveAttribute('tabindex', '-1')

    expect(tabTwo).toHaveAttribute('aria-selected', 'true')
    expect(tabTwo).toHaveAttribute('tabindex', '0')

    expect(screen.getByRole('tabpanel')).toHaveTextContent('Content 2')
  })

  it.skip('should forward the onClick event on the Tab', () => {
    // This feature has not been implemented yet
  })

  it.skip('should be able to set the active initial tab', () => {
    // This feature has not been implemented yet
  })
})

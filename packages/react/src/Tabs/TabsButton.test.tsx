import { fireEvent, render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { TabsButton } from './TabsButton'
import { TabsContext } from './TabsContext'
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

  it('calls onChange with the newly activated tab', () => {
    const onChange = jest.fn()
    const contextValue = {
      activeTab: 0,
      tabsId: 'test-tabs',
      updateTab: onChange,
    }

    render(
      <TabsContext.Provider value={contextValue}>
        <TabsButton tab={1}>Tab 1</TabsButton>
      </TabsContext.Provider>,
    )

    const button = screen.getByRole('tab', { name: 'Tab 1' })
    fireEvent.click(button)

    expect(onChange).toHaveBeenCalledWith(1)
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLButtonElement>()

    render(<TabsButton tab={0} ref={ref} />)

    const component = screen.getByRole('tab')

    expect(ref.current).toBe(component)
  })
})

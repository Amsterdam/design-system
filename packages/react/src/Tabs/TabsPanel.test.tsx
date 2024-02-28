import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { Tabs } from './Tabs'
import '@testing-library/jest-dom'

describe('Tabs panel', () => {
  const testContent = 'Test content'
  it('renders', () => {
    render(<Tabs.Panel tab={0}>{testContent}</Tabs.Panel>)

    const component = screen.getByRole('tabpanel')

    expect(component).toBeInTheDocument()
  })

  it('renders a design system BEM class name', () => {
    render(<Tabs.Panel tab={0}>{testContent}</Tabs.Panel>)

    const component = screen.getByRole('tabpanel')

    expect(component).toHaveClass('amsterdam-tabs__panel')
  })

  it('renders an additional class name', () => {
    render(
      <Tabs.Panel tab={0} className="extra">
        {testContent}
      </Tabs.Panel>,
    )

    const component = screen.getByRole('tabpanel')

    expect(component).toHaveClass('amsterdam-tabs__panel extra')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLDivElement>()

    const { container } = render(
      <Tabs.Panel tab={0} ref={ref}>
        {testContent}
      </Tabs.Panel>,
    )

    const tabsPanel = container.querySelector('.amsterdam-tabs__panel')

    expect(ref.current).toBe(tabsPanel)
  })
})

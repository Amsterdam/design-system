import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { TabsButton } from './TabsButton'
import '@testing-library/jest-dom'

describe('Tabs button', () => {
  const testLabel = 'Test title'
  it('renders', () => {
    render(<TabsButton tab={0} label={testLabel} />)

    const component = screen.getByRole('tab')

    expect(component).toBeInTheDocument()
  })

  it('renders a design system BEM class name', () => {
    render(<TabsButton tab={0} label={testLabel} />)

    const component = screen.getByRole('tab')

    expect(component).toHaveClass('amsterdam-tabs__button')
  })

  it('renders an additional class name', () => {
    render(<TabsButton tab={0} label={testLabel} className="extra" />)

    const component = screen.getByRole('tab')

    expect(component).toHaveClass('amsterdam-tabs__button extra')
  })

  it('renders a label', () => {
    render(<TabsButton tab={0} label={testLabel} />)

    const component = screen.getByRole('tab', { name: testLabel })

    expect(component).toBeInTheDocument()
  })

  it('renders the correct id based on the tabs prop', () => {
    const { container } = render(<TabsButton tab={123} label={testLabel} />)

    const component = container.querySelector('#-tab-123')

    expect(component).toBeInTheDocument()
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLButtonElement>()
    render(<TabsButton tab={0} label={testLabel} ref={ref} />)

    const component = screen.getByRole('tab')

    expect(ref.current).toBe(component)
  })
})

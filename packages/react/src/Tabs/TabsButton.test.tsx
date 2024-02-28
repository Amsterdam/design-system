import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { Tabs } from './Tabs'
import '@testing-library/jest-dom'

describe('Tabs button', () => {
  const testLabel = 'Test title'
  it('renders', () => {
    render(<Tabs.Button tab={0} label={testLabel} />)

    const component = screen.getByRole('tab')

    expect(component).toBeInTheDocument()
  })

  it('renders a design system BEM class name', () => {
    render(<Tabs.Button tab={0} label={testLabel} />)

    const component = screen.getByRole('tab')

    expect(component).toHaveClass('amsterdam-tabs__button')
  })

  it('renders an additional class name', () => {
    render(<Tabs.Button tab={0} label={testLabel} className="extra" />)

    const component = screen.getByRole('tab')

    expect(component).toHaveClass('amsterdam-tabs__button extra')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLButtonElement>()
    render(<Tabs.Button tab={0} label={testLabel} ref={ref} />)

    const component = screen.getByRole('tab')

    expect(ref.current).toBe(component)
  })
})

/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { createRef } from 'react'
import { TabsButton } from './TabsButton'
import '@testing-library/jest-dom'
import { TabsContext } from './TabsContext'

describe('Tabs button', () => {
  it('renders', () => {
    render(<TabsButton aria-controls="one" />)

    const component = screen.getByRole('tab')

    expect(component).toBeInTheDocument()
  })

  it('renders a design system BEM class name', () => {
    render(<TabsButton aria-controls="one" />)

    const component = screen.getByRole('tab')

    expect(component).toHaveClass('ams-tabs__button')
  })

  it('renders an extra class name', () => {
    render(<TabsButton aria-controls="one" className="extra" />)

    const component = screen.getByRole('tab')

    expect(component).toHaveClass('ams-tabs__button extra')
  })

  it('renders a label', () => {
    render(<TabsButton aria-controls="one">Label</TabsButton>)

    const component = screen.getByRole('tab', { name: 'Label' })

    expect(component).toBeInTheDocument()
  })

  it('renders the correct id based on the tabs prop', () => {
    const { container } = render(<TabsButton aria-controls="one" />)

    const component = container.querySelector('#button-one')

    expect(component).toBeInTheDocument()
  })

  it('should associate the button with the correct tab', () => {
    render(<TabsButton aria-controls="one" />)

    const component = screen.getByRole('tab')

    expect(component).toHaveAttribute('aria-controls', 'one')
  })

  it('does not call updateTab if event.preventDefault is invoked', async () => {
    const user = userEvent.setup()
    const mockUpdateTab = jest.fn()

    render(
      <TabsContext.Provider value={{ updateTab: mockUpdateTab }}>
        <TabsButton aria-controls="one" onClick={(event) => event.preventDefault()}>
          Label
        </TabsButton>
      </TabsContext.Provider>,
    )

    const button = screen.getByRole('tab', { name: 'Label' })
    await user.click(button)

    expect(mockUpdateTab).not.toHaveBeenCalled()
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLButtonElement>()

    render(<TabsButton aria-controls="one" ref={ref} />)

    const component = screen.getByRole('tab')

    expect(ref.current).toBe(component)
  })
})

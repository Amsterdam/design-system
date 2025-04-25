/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { createRef } from 'react'
import { Tabs } from './Tabs'
import '@testing-library/jest-dom'

describe('Tabs', () => {
  it('renders', () => {
    const { container } = render(<Tabs />)

    const component = container.querySelector(':only-child')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    const { container } = render(<Tabs />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-tabs')
  })

  it('renders an extra class name', () => {
    const { container } = render(<Tabs className="extra" />)

    const component = container.querySelector(':only-child')

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
          <Tabs.Button aria-controls="one">Tab 1</Tabs.Button>
          <Tabs.Button aria-controls="two">Tab 2</Tabs.Button>
        </Tabs.List>
        <Tabs.Panel id="one">Content 1</Tabs.Panel>
        <Tabs.Panel id="two">Content 2</Tabs.Panel>
      </Tabs>,
    )

    expect(screen.getByRole('tablist')).toBeInTheDocument()
    expect(screen.getByRole('tab', { selected: true })).toBeInTheDocument()
    expect(screen.getByRole('tabpanel')).toBeInTheDocument()
  })

  it('should select a tab when clicked', async () => {
    const user = userEvent.setup()

    render(
      <Tabs>
        <Tabs.List>
          <Tabs.Button aria-controls="one">Tab 1</Tabs.Button>
          <Tabs.Button aria-controls="two">Tab 2</Tabs.Button>
        </Tabs.List>
        <Tabs.Panel id="one">Content 1</Tabs.Panel>
        <Tabs.Panel id="two">Content 2</Tabs.Panel>
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
      await user.click(tabTwo)
    }

    expect(tabOne).toHaveAttribute('aria-selected', 'false')
    expect(tabOne).toHaveAttribute('tabindex', '-1')
    expect(tabTwo).toHaveAttribute('aria-selected', 'true')
    expect(tabTwo).toHaveAttribute('tabindex', '0')
    expect(screen.getByRole('tabpanel')).toHaveTextContent('Content 2')
  })

  it('calls onTabChange with the newly activated tab', async () => {
    const user = userEvent.setup()

    const onTabChange = jest.fn()
    render(
      <Tabs onTabChange={onTabChange}>
        <Tabs.List>
          <Tabs.Button aria-controls="one">Tab 1</Tabs.Button>
        </Tabs.List>
      </Tabs>,
    )

    const button = screen.getByRole('tab', { name: 'Tab 1' })
    await user.click(button)

    expect(onTabChange).toHaveBeenCalledWith('one')
  })

  it('should be able to set the initially active tab', () => {
    render(
      <Tabs activeTab="three">
        <Tabs.List>
          <Tabs.Button aria-controls="one">Tab 1</Tabs.Button>
          <Tabs.Button aria-controls="two">Tab 2</Tabs.Button>
          <Tabs.Button aria-controls="three">Tab 3</Tabs.Button>
          <Tabs.Button aria-controls="four">Tab 4</Tabs.Button>
        </Tabs.List>
        <Tabs.Panel id="one">Content 1</Tabs.Panel>
        <Tabs.Panel id="two">Content 2</Tabs.Panel>
        <Tabs.Panel id="three">Content 3</Tabs.Panel>
        <Tabs.Panel id="four">Content 4</Tabs.Panel>
      </Tabs>,
    )

    const tabOne = screen.getByRole('tab', { name: 'Tab 1' })
    const tabThree = screen.getByRole('tab', { name: 'Tab 3' })

    expect(tabOne).toHaveAttribute('aria-selected', 'false')
    expect(tabOne).toHaveAttribute('tabindex', '-1')
    expect(tabThree).toHaveAttribute('aria-selected', 'true')
    expect(tabThree).toHaveAttribute('tabindex', '0')
    expect(screen.getByRole('tabpanel')).toHaveTextContent('Content 3')
  })

  it('should set the first tab as the initially active tab when the supplied active tab does not exist', async () => {
    // Disable console.warn for this test, to prevent it from cluttering the test output
    jest.spyOn(console, 'warn').mockImplementation(() => {})

    render(
      <Tabs activeTab="unknown">
        <Tabs.List>
          <Tabs.Button aria-controls="one">Tab 1</Tabs.Button>
          <Tabs.Button aria-controls="two">Tab 2</Tabs.Button>
          <Tabs.Button aria-controls="three">Tab 3</Tabs.Button>
          <Tabs.Button aria-controls="four">Tab 4</Tabs.Button>
        </Tabs.List>
        <Tabs.Panel id="one">Content 1</Tabs.Panel>
        <Tabs.Panel id="two">Content 2</Tabs.Panel>
        <Tabs.Panel id="three">Content 3</Tabs.Panel>
        <Tabs.Panel id="four">Content 4</Tabs.Panel>
      </Tabs>,
    )

    const firstTab = screen.getByRole('tab', { name: 'Tab 1' })
    const lastTab = screen.getByRole('tab', { name: 'Tab 4' })

    expect(firstTab).toHaveAttribute('aria-selected', 'true')
    expect(firstTab).toHaveAttribute('tabindex', '0')
    expect(lastTab).toHaveAttribute('aria-selected', 'false')
    expect(lastTab).toHaveAttribute('tabindex', '-1')
    expect(screen.getByRole('tabpanel')).toHaveTextContent('Content 1')
  })

  it('sets focus on Tabs buttons when using arrow keys', async () => {
    const user = userEvent.setup()

    render(
      <Tabs>
        <Tabs.List>
          <Tabs.Button aria-controls="one">Tab 1</Tabs.Button>
          <Tabs.Button aria-controls="two">Tab 2</Tabs.Button>
          <Tabs.Button aria-controls="three">Tab 3</Tabs.Button>
        </Tabs.List>
        <Tabs.Panel id="one" />
        <Tabs.Panel id="two" />
        <Tabs.Panel id="three" />
      </Tabs>,
    )

    const firstButton = screen.getByRole('tab', { name: 'Tab 1' })
    const thirdButton = screen.getByRole('tab', { name: 'Tab 3' })

    await user.click(firstButton)

    expect(firstButton).toHaveFocus()

    // Click the right arrow key twice
    await user.keyboard('{ArrowRight}')
    await user.keyboard('{ArrowRight}')

    expect(thirdButton).toHaveFocus()
    expect(firstButton).not.toHaveFocus()

    await user.keyboard('{ArrowRight}')

    expect(firstButton).toHaveFocus()
  })
})

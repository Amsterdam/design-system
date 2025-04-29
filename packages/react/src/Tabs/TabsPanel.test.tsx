/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { Tabs } from './Tabs'
import '@testing-library/jest-dom'

describe('Tabs Panel', () => {
  it('renders', () => {
    render(
      <Tabs>
        <Tabs.List>
          <Tabs.Button aria-controls="one" />
        </Tabs.List>
        <Tabs.Panel id="one" />
      </Tabs>,
    )

    const component = screen.getByRole('tabpanel')

    expect(component).toBeInTheDocument()
  })

  it('renders a design system BEM class name', () => {
    render(
      <Tabs>
        <Tabs.List>
          <Tabs.Button aria-controls="one" />
        </Tabs.List>
        <Tabs.Panel id="one" />
      </Tabs>,
    )

    const component = screen.getByRole('tabpanel')

    expect(component).toHaveClass('ams-tabs__panel')
  })

  it('renders an extra class name', () => {
    render(
      <Tabs>
        <Tabs.List>
          <Tabs.Button aria-controls="one" />
        </Tabs.List>
        <Tabs.Panel className="extra" id="one" />
      </Tabs>,
    )

    const component = screen.getByRole('tabpanel')

    expect(component).toHaveClass('ams-tabs__panel extra')
  })

  it('renders the correct id based on the tabs prop', () => {
    render(
      <Tabs>
        <Tabs.List>
          <Tabs.Button aria-controls="one" />
        </Tabs.List>
        <Tabs.Panel id="one" />
      </Tabs>,
    )

    const component = screen.getByRole('tabpanel')

    expect(component).toHaveAttribute('id', 'one')
  })

  it('should associate the tab with the correct button', () => {
    render(
      <Tabs>
        <Tabs.List>
          <Tabs.Button aria-controls="one" />
        </Tabs.List>
        <Tabs.Panel id="one" />
      </Tabs>,
    )

    const component = screen.getByRole('tabpanel')

    expect(component).toHaveAttribute('aria-labelledby', 'button-one')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLDivElement>()

    render(
      <Tabs>
        <Tabs.List>
          <Tabs.Button aria-controls="one" />
        </Tabs.List>
        <Tabs.Panel id="one" ref={ref} />
      </Tabs>,
    )

    const component = screen.getByRole('tabpanel')

    expect(ref.current).toBe(component)
  })
})

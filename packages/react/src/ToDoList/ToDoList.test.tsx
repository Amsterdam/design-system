/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { describe, expect, it } from 'vitest'

import { ToDoList } from './ToDoList'

describe('ToDoList', () => {
  it('renders', () => {
    render(<ToDoList />)

    const component = screen.getByRole('list')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    render(<ToDoList />)

    const component = screen.getByRole('list')

    expect(component).toHaveClass('ams-to-do-list')
  })

  it('renders an extra class name', () => {
    render(<ToDoList className="extra" />)

    const component = screen.getByRole('list')

    expect(component).toHaveClass('ams-to-do-list extra')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLElement>()

    render(<ToDoList ref={ref} />)

    const component = screen.getByRole('list')

    expect(ref.current).toBe(component)
  })
})

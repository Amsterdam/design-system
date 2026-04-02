/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { createRef } from 'react'
import { describe, expect, it } from 'vitest'

import { ToDoList } from './ToDoList'

describe('ToDoList', () => {
  it('renders', () => {
    const { container } = render(<ToDoList />)

    const component = container.querySelector('.ams-to-do-list')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    const { container } = render(<ToDoList />)

    const component = container.querySelector('.ams-to-do-list')

    expect(component).toHaveClass('ams-to-do-list')
  })

  it('renders an extra class name', () => {
    const { container } = render(<ToDoList className="extra" />)

    const component = container.querySelector('.ams-to-do-list')

    expect(component).toHaveClass('ams-to-do-list extra')
  })

  it('renders a list of items', () => {
    render(<ToDoList />)

    const list = screen.getByRole('list')

    expect(list).toBeInTheDocument()
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLElement>()

    const { container } = render(<ToDoList ref={ref} />)

    const component = container.querySelector('.ams-to-do-list')

    expect(ref.current).toBe(component)
  })

  it('allows users to add items via the text input', async () => {
    const user = userEvent.setup()

    render(<ToDoList />)

    const input = screen.getByRole('textbox', { name: 'Nieuwe taak' })
    const addButton = screen.getByRole('button', { name: 'Taak toevoegen' })

    await user.type(input, 'Eerste taak')
    await user.click(addButton)

    const checkbox = screen.getByRole('checkbox', { name: 'Eerste taak' })

    expect(checkbox).toBeInTheDocument()
  })

  it('allows users to mark items as done', async () => {
    const user = userEvent.setup()

    render(<ToDoList defaultItems={[{ label: 'Eerste taak' }]} />)

    const checkbox = screen.getByRole('checkbox', { name: 'Eerste taak' })
    const item = checkbox.closest('li')

    expect(item).not.toHaveClass('ams-to-do-list__item--done')

    await user.click(checkbox)

    expect(item).toHaveClass('ams-to-do-list__item--done')
  })

  it('allows users to delete items', async () => {
    const user = userEvent.setup()

    render(<ToDoList defaultItems={[{ label: 'Eerste taak' }]} />)

    const deleteButton = screen.getByRole('button', { name: 'Verwijderen' })

    await user.click(deleteButton)

    expect(screen.queryByRole('checkbox', { name: 'Eerste taak' })).not.toBeInTheDocument()
  })
})

/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { FormEvent, ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

import { clsx } from 'clsx'
import { forwardRef, useId, useRef, useState } from 'react'

import { Button } from '../Button'
import { Checkbox } from '../Checkbox'
import { TextInput } from '../TextInput'

export type ToDoListItem = {
  /** Whether the item is completed. */
  done?: boolean
  /** Optional stable identifier for controlled usage. */
  id?: string
  /** The text shown next to the checkbox. */
  label: string
}

type ToDoListInternalItem = Omit<ToDoListItem, 'id'> & Required<Pick<ToDoListItem, 'id'>>

export type ToDoListProps = {
  /** Label for the button that submits a new item. */
  addItemButtonLabel?: string
  /** Accessible label for the input used to add a new item. */
  addItemLabel?: string
  /** Items rendered by the list when it first mounts. */
  defaultItems?: ToDoListItem[]
  /**
   * Called whenever items change because the user adds, toggles or removes an item.
   */
  onItemsChange?: (items: ToDoListItem[]) => void
} & PropsWithChildren<HTMLAttributes<HTMLElement>>

const normaliseItems = (items?: ToDoListItem[]): ToDoListInternalItem[] =>
  (items ?? []).map((item, index) => ({
    ...item,
    id: item.id ?? `ams-to-do-list-item-${index}`,
  }))

/**
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-TODO-ADD-GROUP-to-do-list--docs ToDoList docs at Amsterdam Design System}
 */
export const ToDoList = forwardRef(
  (
    {
      addItemButtonLabel = 'Taak toevoegen',
      addItemLabel = 'Nieuwe taak',
      children,
      className,
      defaultItems,
      onItemsChange,
      ...restProps
    }: ToDoListProps,
    ref: ForwardedRef<HTMLElement>,
  ) => {
    const [items, setItems] = useState<ToDoListInternalItem[]>(() => normaliseItems(defaultItems))
    const [newItemLabel, setNewItemLabel] = useState('')
    const itemIdCounter = useRef(items.length)
    const inputId = useId()

    const createItemId = () => {
      const id = `ams-to-do-list-item-${itemIdCounter.current}`

      itemIdCounter.current += 1

      return id
    }

    const emitItemsChange = (nextItems: ToDoListInternalItem[]) => {
      if (!onItemsChange) {
        return
      }

      onItemsChange(nextItems.map(({ done, id, label }) => ({ done, id, label })))
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault()

      const label = newItemLabel.trim()

      if (!label) {
        return
      }

      const nextItems = [...items, { done: false, id: createItemId(), label }]

      setItems(nextItems)
      emitItemsChange(nextItems)
      setNewItemLabel('')
    }

    const handleToggleItem = (id: string) => {
      const nextItems = items.map((item) => (item.id === id ? { ...item, done: !item.done } : item))

      setItems(nextItems)
      emitItemsChange(nextItems)
    }

    const handleDeleteItem = (id: string) => {
      const nextItems = items.filter((item) => item.id !== id)

      setItems(nextItems)
      emitItemsChange(nextItems)
    }

    const isNewItemLabelEmpty = newItemLabel.trim().length === 0

    return (
      <section {...restProps} className={clsx('ams-to-do-list', className)} ref={ref}>
        <form className="ams-to-do-list__form" onSubmit={handleSubmit}>
          <div className="ams-to-do-list__form-fields">
            <label className="ams-visually-hidden" htmlFor={inputId}>
              {addItemLabel}
            </label>
            <TextInput id={inputId} onChange={(event) => setNewItemLabel(event.target.value)} value={newItemLabel} />
          </div>
          <Button disabled={isNewItemLabelEmpty} type="submit">
            {addItemButtonLabel}
          </Button>
        </form>

        <ul className="ams-to-do-list__items">
          {items.map((item) => (
            <li className={clsx('ams-to-do-list__item', item.done && 'ams-to-do-list__item--done')} key={item.id}>
              <Checkbox checked={Boolean(item.done)} onChange={() => handleToggleItem(item.id)}>
                <span className="ams-to-do-list__label">{item.label}</span>
              </Checkbox>
              <Button
                className="ams-to-do-list__delete-button"
                onClick={() => handleDeleteItem(item.id)}
                type="button"
                variant="tertiary"
              >
                Verwijderen
              </Button>
            </li>
          ))}
        </ul>

        {children}
      </section>
    )
  },
)

ToDoList.displayName = 'ToDoList'

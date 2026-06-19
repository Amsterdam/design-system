/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { createRef } from 'react'
import { describe, expect, it, vi } from 'vitest'

import { TableOfContents } from './TableOfContents'

describe('TableOfContents', () => {
  it('renders', () => {
    const { container } = render(<TableOfContents />)

    const component = container.querySelector(':only-child')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders its children', () => {
    render(
      <TableOfContents>
        <TableOfContents.List />
      </TableOfContents>,
    )

    const testChild = screen.getByRole('list')

    expect(testChild).toBeTruthy()
  })

  it('renders a heading', () => {
    render(<TableOfContents heading="Test heading" />)

    const heading = screen.getByRole('heading')

    expect(heading).toBeInTheDocument()
    expect(heading).toHaveTextContent('Test heading')
  })

  it('renders a design system BEM class name', () => {
    const { container } = render(<TableOfContents />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-table-of-contents')
  })

  it('renders an extra class name', () => {
    const { container } = render(<TableOfContents className="extra" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-table-of-contents extra')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLElement>()

    const { container } = render(<TableOfContents ref={ref} />)

    const component = container.querySelector(':only-child')

    expect(ref.current).toBe(component)
  })

  it('passes additional props', () => {
    const { container } = render(<TableOfContents aria-hidden="false" data-test="data-test" id="id" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveAttribute('aria-hidden', 'false')
    expect(component).toHaveAttribute('id', 'id')
    expect(component).toHaveAttribute('data-test', 'data-test')
  })

  it('renders no toggle buttons by default', () => {
    render(
      <TableOfContents>
        <TableOfContents.List>
          <TableOfContents.Link href="#a" label="A">
            <TableOfContents.List>
              <TableOfContents.Link href="#a-1" label="A.1" />
            </TableOfContents.List>
          </TableOfContents.Link>
        </TableOfContents.List>
      </TableOfContents>,
    )

    expect(screen.queryByRole('button')).not.toBeInTheDocument()
  })

  it('labels the navigation landmark with its heading', () => {
    render(
      <TableOfContents heading="Op deze pagina">
        <TableOfContents.List>
          <TableOfContents.Link href="#a" label="A" />
        </TableOfContents.List>
      </TableOfContents>,
    )

    expect(screen.getByRole('navigation')).toHaveAccessibleName('Op deze pagina')
  })

  describe('when collapsible', () => {
    it('renders a toggle button only for items with a nested list', () => {
      render(
        <TableOfContents collapsible>
          <TableOfContents.List>
            <TableOfContents.Link href="#a" label="A" />
            <TableOfContents.Link href="#b" label="B">
              <TableOfContents.List>
                <TableOfContents.Link href="#b-1" label="B.1" />
              </TableOfContents.List>
            </TableOfContents.Link>
          </TableOfContents.List>
        </TableOfContents>,
      )

      const buttons = screen.getAllByRole('button')

      expect(buttons).toHaveLength(1)
      expect(buttons[0]).toHaveAccessibleName('Toon submenu van B')
    })

    it('is collapsed by default', () => {
      render(
        <TableOfContents collapsible>
          <TableOfContents.List>
            <TableOfContents.Link href="#a" label="A">
              <TableOfContents.List>
                <TableOfContents.Link href="#a-1" label="A.1" />
              </TableOfContents.List>
            </TableOfContents.Link>
          </TableOfContents.List>
        </TableOfContents>,
      )

      const button = screen.getByRole('button')

      expect(button).toHaveAttribute('aria-expanded', 'false')

      const item = screen.getAllByRole('listitem').find((li) => li.classList.contains('ams-table-of-contents__item'))

      expect(item).toHaveClass('ams-table-of-contents__item--collapsed')
    })

    it('honours defaultExpanded', () => {
      render(
        <TableOfContents collapsible>
          <TableOfContents.List>
            <TableOfContents.Link defaultExpanded href="#a" label="A">
              <TableOfContents.List>
                <TableOfContents.Link href="#a-1" label="A.1" />
              </TableOfContents.List>
            </TableOfContents.Link>
          </TableOfContents.List>
        </TableOfContents>,
      )

      const button = screen.getByRole('button')

      expect(button).toHaveAttribute('aria-expanded', 'true')
      expect(button).toHaveAccessibleName('Verberg submenu van A')
    })

    it('toggles aria-expanded and the collapsed class on click', () => {
      render(
        <TableOfContents collapsible>
          <TableOfContents.List>
            <TableOfContents.Link href="#a" label="A">
              <TableOfContents.List>
                <TableOfContents.Link href="#a-1" label="A.1" />
              </TableOfContents.List>
            </TableOfContents.Link>
          </TableOfContents.List>
        </TableOfContents>,
      )

      const button = screen.getByRole('button')
      const item = screen.getAllByRole('listitem').find((li) => li.classList.contains('ams-table-of-contents__item'))

      expect(button).toHaveAttribute('aria-expanded', 'false')
      expect(item).toHaveClass('ams-table-of-contents__item--collapsed')

      fireEvent.click(button)

      expect(button).toHaveAttribute('aria-expanded', 'true')
      expect(item).not.toHaveClass('ams-table-of-contents__item--collapsed')

      fireEvent.click(button)

      expect(button).toHaveAttribute('aria-expanded', 'false')
      expect(item).toHaveClass('ams-table-of-contents__item--collapsed')
    })

    it('links the button to the nested list via aria-controls', () => {
      render(
        <TableOfContents collapsible>
          <TableOfContents.List>
            <TableOfContents.Link defaultExpanded href="#a" label="A">
              <TableOfContents.List>
                <TableOfContents.Link href="#a-1" label="A.1" />
              </TableOfContents.List>
            </TableOfContents.Link>
          </TableOfContents.List>
        </TableOfContents>,
      )

      const button = screen.getByRole('button')
      const panelId = button.getAttribute('aria-controls')
      const lists = screen.getAllByRole('list')
      const nestedList = lists.find((ul) => ul.id === panelId)

      expect(panelId).toBeTruthy()
      expect(nestedList).toBeInTheDocument()
      expect(nestedList).toHaveClass('ams-table-of-contents__list')
    })

    it('preserves a custom nested list id for aria-controls', () => {
      render(
        <TableOfContents collapsible>
          <TableOfContents.List>
            <TableOfContents.Link defaultExpanded href="#a" label="A">
              <TableOfContents.List id="custom-panel-id">
                <TableOfContents.Link href="#a-1" label="A.1" />
              </TableOfContents.List>
            </TableOfContents.Link>
          </TableOfContents.List>
        </TableOfContents>,
      )

      const button = screen.getByRole('button')
      const nestedList = document.getElementById('custom-panel-id')

      expect(button).toHaveAttribute('aria-controls', 'custom-panel-id')
      expect(nestedList).toBeInTheDocument()
      expect(nestedList).toHaveClass('ams-table-of-contents__list')
    })

    it('calls onToggle with the new expanded state when the button is clicked', () => {
      const onToggle = vi.fn()

      render(
        <TableOfContents collapsible>
          <TableOfContents.List>
            <TableOfContents.Link href="#a" label="A" onToggle={onToggle}>
              <TableOfContents.List>
                <TableOfContents.Link href="#a-1" label="A.1" />
              </TableOfContents.List>
            </TableOfContents.Link>
          </TableOfContents.List>
        </TableOfContents>,
      )

      const button = screen.getByRole('button')

      fireEvent.click(button)

      expect(onToggle).toHaveBeenCalledTimes(1)
      expect(onToggle).toHaveBeenCalledWith(true)

      fireEvent.click(button)

      expect(onToggle).toHaveBeenLastCalledWith(false)
    })

    it('does not throw when onToggle is not provided', () => {
      render(
        <TableOfContents collapsible>
          <TableOfContents.List>
            <TableOfContents.Link href="#a" label="A">
              <TableOfContents.List>
                <TableOfContents.Link href="#a-1" label="A.1" />
              </TableOfContents.List>
            </TableOfContents.Link>
          </TableOfContents.List>
        </TableOfContents>,
      )

      const button = screen.getByRole('button')

      expect(() => fireEvent.click(button)).not.toThrow()
    })

    it('uses custom accessible labels when provided', () => {
      render(
        <TableOfContents collapsible hideAccessibleLabel="Hide" showAccessibleLabel="Show">
          <TableOfContents.List>
            <TableOfContents.Link href="#a" label="A">
              <TableOfContents.List>
                <TableOfContents.Link href="#a-1" label="A.1" />
              </TableOfContents.List>
            </TableOfContents.Link>
          </TableOfContents.List>
        </TableOfContents>,
      )

      const button = screen.getByRole('button')

      expect(button).toHaveAccessibleName('Show A')

      fireEvent.click(button)

      expect(button).toHaveAccessibleName('Hide A')
    })

    it('moves focus to the toggle button when collapsing a subtree that contains focus', () => {
      render(
        <TableOfContents collapsible>
          <TableOfContents.List>
            <TableOfContents.Link defaultExpanded href="#a" label="A">
              <TableOfContents.List>
                <TableOfContents.Link href="#a-1" label="A.1" />
              </TableOfContents.List>
            </TableOfContents.Link>
          </TableOfContents.List>
        </TableOfContents>,
      )

      const nestedLink = screen.getByRole('link', { name: 'A.1' })
      const button = screen.getByRole('button')

      nestedLink.focus()

      expect(nestedLink).toHaveFocus()

      // Use `fireEvent.click`, which does not focus the button first, mirroring platforms where
      // clicking a button leaves focus in place. Focus then moves to the toggle only because the
      // component restores it before hiding the subtree, which is the behaviour under test.
      fireEvent.click(button)

      expect(button).toHaveFocus()
    })

    it('preserves non-list children of an expandable link', () => {
      render(
        <TableOfContents collapsible>
          <TableOfContents.List>
            <TableOfContents.Link defaultExpanded href="#a" label="A">
              <span>Extra content</span>
              <TableOfContents.List>
                <TableOfContents.Link href="#a-1" label="A.1" />
              </TableOfContents.List>
            </TableOfContents.Link>
          </TableOfContents.List>
        </TableOfContents>,
      )

      expect(screen.getByText('Extra content')).toBeInTheDocument()
    })

    it('sets focus on toggle buttons when using arrow keys', async () => {
      const user = userEvent.setup()

      render(
        <TableOfContents collapsible>
          <TableOfContents.List>
            <TableOfContents.Link defaultExpanded href="#a" label="A">
              <TableOfContents.List>
                <TableOfContents.Link href="#b" label="B">
                  <TableOfContents.List>
                    <TableOfContents.Link href="#b-1" label="B.1" />
                  </TableOfContents.List>
                </TableOfContents.Link>
              </TableOfContents.List>
            </TableOfContents.Link>
            <TableOfContents.Link href="#c" label="C">
              <TableOfContents.List>
                <TableOfContents.Link href="#c-1" label="C.1" />
              </TableOfContents.List>
            </TableOfContents.Link>
          </TableOfContents.List>
        </TableOfContents>,
      )

      const firstButton = screen.getByRole('button', { name: /Toon submenu van A|Verberg submenu van A/ })
      const lastButton = screen.getByRole('button', { name: /Toon submenu van C/ })

      firstButton.focus()

      expect(firstButton).toHaveFocus()

      await user.keyboard('{ArrowDown}')
      await user.keyboard('{ArrowDown}')

      expect(lastButton).toHaveFocus()

      // Rotating: wraps from last to first
      await user.keyboard('{ArrowDown}')

      expect(firstButton).toHaveFocus()
    })

    it('skips hidden toggles when using arrow keys', async () => {
      const user = userEvent.setup()

      render(
        <TableOfContents collapsible>
          <TableOfContents.List>
            <TableOfContents.Link href="#a" label="A">
              <TableOfContents.List>
                <TableOfContents.Link href="#b" label="B">
                  <TableOfContents.List>
                    <TableOfContents.Link href="#b-1" label="B.1" />
                  </TableOfContents.List>
                </TableOfContents.Link>
              </TableOfContents.List>
            </TableOfContents.Link>
            <TableOfContents.Link href="#c" label="C">
              <TableOfContents.List>
                <TableOfContents.Link href="#c-1" label="C.1" />
              </TableOfContents.List>
            </TableOfContents.Link>
          </TableOfContents.List>
        </TableOfContents>,
      )

      const firstButton = screen.getByRole('button', { name: /Toon submenu van A/ })
      const visibleNextButton = screen.getByRole('button', { name: /Toon submenu van C/ })

      firstButton.focus()
      expect(firstButton).toHaveFocus()

      await user.keyboard('{ArrowDown}')

      expect(visibleNextButton).toHaveFocus()
    })

    it('does not move focus from links when using arrow keys', async () => {
      const user = userEvent.setup()

      render(
        <TableOfContents collapsible>
          <TableOfContents.List>
            <TableOfContents.Link href="#a" label="A">
              <TableOfContents.List>
                <TableOfContents.Link href="#a-1" label="A.1" />
              </TableOfContents.List>
            </TableOfContents.Link>
          </TableOfContents.List>
        </TableOfContents>,
      )

      const link = screen.getByRole('link', { name: 'A' })

      link.focus()
      expect(link).toHaveFocus()

      await user.keyboard('{ArrowDown}')

      expect(link).toHaveFocus()
    })
  })
})

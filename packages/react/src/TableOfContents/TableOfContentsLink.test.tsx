/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { AnchorHTMLAttributes } from 'react'

import { fireEvent, render, screen } from '@testing-library/react'
import { createRef, forwardRef } from 'react'
import { describe, expect, it, vi } from 'vitest'

import { TableOfContents } from './TableOfContents'

const renderCollapsible = (linkProps = {}, { collapsible = true } = {}) =>
  render(
    <TableOfContents collapsible={collapsible}>
      <TableOfContents.List>
        <TableOfContents.Link href="#parent" label="Parent" {...linkProps}>
          <TableOfContents.List>
            <TableOfContents.Link href="#child" label="Child" />
          </TableOfContents.List>
        </TableOfContents.Link>
      </TableOfContents.List>
    </TableOfContents>,
  )

const getParentItem = () => screen.getByRole('button').closest('li') as HTMLLIElement

describe('TableOfContentsLink', () => {
  it('renders', () => {
    render(<TableOfContents.Link href="#" label="Test label" />)

    const link = screen.getByRole('link')

    expect(link).toBeInTheDocument()
    expect(link).toBeVisible()
    expect(link).toHaveTextContent('Test label')
  })

  it('renders a design system BEM class name', () => {
    render(<TableOfContents.Link href="#" label="Test" />)

    const component = screen.getByRole('link')

    expect(component).toHaveClass('ams-table-of-contents__link')
  })

  it('renders an extra class name', () => {
    render(<TableOfContents.Link className="extra" href="#" label="Test" />)

    const component = screen.getByRole('link')

    expect(component).toHaveClass('ams-table-of-contents__link extra')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLAnchorElement>()

    render(<TableOfContents.Link href="#" label="Test" ref={ref} />)

    const component = screen.getByRole('link')

    expect(ref.current).toBe(component)
  })

  it('passes additional props', () => {
    render(<TableOfContents.Link aria-hidden="false" data-test="data-test" href="#" id="id" label="Test" />)

    const component = screen.getByRole('link')

    expect(component).toHaveAttribute('aria-hidden', 'false')
    expect(component).toHaveAttribute('id', 'id')
    expect(component).toHaveAttribute('data-test', 'data-test')
  })

  it('renders a custom link component', () => {
    const CustomLink = ({ children, ...props }: AnchorHTMLAttributes<HTMLAnchorElement>) => (
      <a {...props} data-custom="true">
        {children}
      </a>
    )

    render(<TableOfContents.Link href="/test" label="Test" linkComponent={CustomLink} />)

    const component = screen.getByRole('link')

    expect(component).toHaveAttribute('data-custom', 'true')
    expect(component).toHaveAttribute('href', '/test')
    expect(component).toHaveClass('ams-table-of-contents__link')
  })

  it('forwards the ref to an intrinsic link component', () => {
    const ref = createRef<HTMLAnchorElement>()

    render(<TableOfContents.Link href="/test" label="Test" linkComponent="a" ref={ref} />)

    expect(ref.current).toBe(screen.getByRole('link'))
  })

  it('does not forward the ref to a custom link component', () => {
    const ref = createRef<HTMLAnchorElement>()
    const CustomLink = forwardRef<HTMLAnchorElement, AnchorHTMLAttributes<HTMLAnchorElement>>(
      function CustomLink(props, customRef) {
        return <a {...props} ref={customRef} />
      },
    )

    render(<TableOfContents.Link href="/test" label="Test" linkComponent={CustomLink} ref={ref} />)

    expect(ref.current).toBeNull()
  })

  describe('when collapsible', () => {
    it('renders a toggle button for a link with a nested list', () => {
      renderCollapsible()

      expect(screen.getByRole('button', { name: /Parent/ })).toBeInTheDocument()
    })

    it('does not render a toggle button when the parent is not collapsible', () => {
      renderCollapsible({}, { collapsible: false })

      expect(screen.queryByRole('button')).not.toBeInTheDocument()
    })

    it('does not render a toggle button for a link without a nested list', () => {
      render(
        <TableOfContents collapsible>
          <TableOfContents.List>
            <TableOfContents.Link href="#parent" label="Parent" />
          </TableOfContents.List>
        </TableOfContents>,
      )

      expect(screen.queryByRole('button')).not.toBeInTheDocument()
    })

    it('is collapsed by default', () => {
      renderCollapsible()

      expect(getParentItem()).toHaveClass('ams-table-of-contents__item--collapsed')
      expect(screen.getByRole('button', { name: /Parent/ })).toHaveAttribute('aria-expanded', 'false')
    })

    it('expands initially when defaultExpanded is set', () => {
      renderCollapsible({ defaultExpanded: true })

      expect(getParentItem()).not.toHaveClass('ams-table-of-contents__item--collapsed')
      expect(screen.getByRole('button', { name: /Parent/ })).toHaveAttribute('aria-expanded', 'true')
    })

    it('links the toggle button to the nested list via aria-controls', () => {
      renderCollapsible()

      const button = screen.getByRole('button', { name: /Parent/ })
      const nestedListId = button.getAttribute('aria-controls')
      const nestedList = getParentItem().querySelector('.ams-table-of-contents__list')

      expect(nestedListId).toBeTruthy()
      expect(nestedList).toHaveAttribute('id', nestedListId)
    })

    it('toggles the expanded state when the button is clicked', () => {
      renderCollapsible()

      const item = getParentItem()
      const button = screen.getByRole('button', { name: /Parent/ })

      expect(item).toHaveClass('ams-table-of-contents__item--collapsed')

      fireEvent.click(button)

      expect(item).not.toHaveClass('ams-table-of-contents__item--collapsed')
      expect(button).toHaveAttribute('aria-expanded', 'true')

      fireEvent.click(button)

      expect(item).toHaveClass('ams-table-of-contents__item--collapsed')
    })

    it('calls onToggle with the new expanded state when the button is clicked', () => {
      const onToggle = vi.fn()
      renderCollapsible({ onToggle })

      const button = screen.getByRole('button', { name: /Parent/ })

      fireEvent.click(button)

      expect(onToggle).toHaveBeenCalledTimes(1)
      expect(onToggle).toHaveBeenCalledWith(true)

      fireEvent.click(button)

      expect(onToggle).toHaveBeenLastCalledWith(false)
    })

    it('does not throw when onToggle is not provided', () => {
      renderCollapsible()

      const button = screen.getByRole('button', { name: /Parent/ })

      expect(() => fireEvent.click(button)).not.toThrow()
    })

    it('respects the expanded prop when true', () => {
      renderCollapsible({ expanded: true })

      expect(getParentItem()).not.toHaveClass('ams-table-of-contents__item--collapsed')
    })

    it('respects the expanded prop when false', () => {
      renderCollapsible({ expanded: false })

      expect(getParentItem()).toHaveClass('ams-table-of-contents__item--collapsed')
    })

    it('ignores defaultExpanded when expanded is provided', () => {
      renderCollapsible({ defaultExpanded: true, expanded: false })

      expect(getParentItem()).toHaveClass('ams-table-of-contents__item--collapsed')
    })

    it('does not toggle internally when controlled', () => {
      renderCollapsible({ expanded: false })

      const item = getParentItem()
      const button = screen.getByRole('button', { name: /Parent/ })

      fireEvent.click(button)

      expect(item).toHaveClass('ams-table-of-contents__item--collapsed')
    })

    it('calls onToggle in controlled mode with the desired next state', () => {
      const onToggle = vi.fn()
      renderCollapsible({ expanded: false, onToggle })

      fireEvent.click(screen.getByRole('button', { name: /Parent/ }))

      expect(onToggle).toHaveBeenCalledTimes(1)
      expect(onToggle).toHaveBeenCalledWith(true)
      expect(getParentItem()).toHaveClass('ams-table-of-contents__item--collapsed')
    })

    it('responds to controlled prop changes', () => {
      const { rerender } = renderCollapsible({ expanded: false })

      expect(getParentItem()).toHaveClass('ams-table-of-contents__item--collapsed')

      rerender(
        <TableOfContents collapsible>
          <TableOfContents.List>
            <TableOfContents.Link expanded href="#parent" label="Parent">
              <TableOfContents.List>
                <TableOfContents.Link href="#child" label="Child" />
              </TableOfContents.List>
            </TableOfContents.Link>
          </TableOfContents.List>
        </TableOfContents>,
      )

      expect(getParentItem()).not.toHaveClass('ams-table-of-contents__item--collapsed')
    })

    it('ignores the expanded prop when the parent is not collapsible', () => {
      renderCollapsible({ expanded: true }, { collapsible: false })

      expect(screen.queryByRole('button')).not.toBeInTheDocument()
    })

    it('moves focus to the toggle button when a collapse hides the focused nested link', () => {
      renderCollapsible({ defaultExpanded: true })

      const button = screen.getByRole('button', { name: /Parent/ })
      const childLink = screen.getByRole('link', { name: 'Child' })

      childLink.focus()
      expect(childLink).toHaveFocus()

      fireEvent.click(button)

      expect(button).toHaveFocus()
    })
  })
})

/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { AnchorHTMLAttributes } from 'react'

import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { describe, expect, it } from 'vitest'

import { Pagination } from './Pagination'

describe('Pagination', () => {
  const linkTemplate = (page: number) => `#?pagina=${page}`

  it('renders', () => {
    render(<Pagination linkTemplate={linkTemplate} totalPages={10} />)

    const component = screen.getByRole('navigation', { name: 'Paginering' })

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    render(<Pagination linkTemplate={linkTemplate} totalPages={10} />)

    const component = screen.getByRole('navigation', { name: 'Paginering' })

    expect(component).toHaveClass('ams-pagination')
  })

  it('renders an extra class name', () => {
    render(<Pagination className="extra" linkTemplate={linkTemplate} totalPages={10} />)

    const component = screen.getByRole('navigation', { name: 'Paginering' })

    expect(component).toHaveClass('ams-pagination extra')
  })

  it('should render all the pages when totalPages <= maxVisiblePages', () => {
    render(<Pagination linkTemplate={linkTemplate} maxVisiblePages={6} totalPages={6} />)

    const listItem = screen.getAllByRole('listitem', { hidden: true })

    const range = ['1', '2', '3', '4', '5', '6']

    range.forEach((item, index) => {
      expect(listItem[index]).toHaveTextContent(item)
    })
  })

  it('should render the pages including one (last) ellipsis in the correct location when totalPages > maxVisiblePages', () => {
    render(<Pagination linkTemplate={linkTemplate} maxVisiblePages={7} page={1} totalPages={10} />)

    const listItem = screen.getAllByRole('listitem', { hidden: true })

    const range = ['1', '2', '3', '4', '5', '…', '10']

    range.forEach((item, index) => {
      expect(listItem[index]).toHaveTextContent(item)
    })
  })

  it('should render the pages including two ellipses in the correct location when totalPages > maxVisiblePages and current page > 4', () => {
    render(<Pagination linkTemplate={linkTemplate} maxVisiblePages={7} page={6} totalPages={10} />)

    const listItem = screen.getAllByRole('listitem', { hidden: true })

    const range = ['1', '…', '5', '6', '7', '…', '10']

    range.forEach((item, index) => {
      expect(listItem[index]).toHaveTextContent(item)
    })
  })

  it('should render the pages including one (first) ellipsis in the correct location when totalPages > maxVisiblePages and page > maxVisiblePages', () => {
    render(<Pagination linkTemplate={linkTemplate} maxVisiblePages={7} page={7} totalPages={10} />)

    const listItem = screen.getAllByRole('listitem', { hidden: true })

    const range = ['1', '…', '6', '7', '8', '9', '10']

    range.forEach((item, index) => {
      expect(listItem[index]).toHaveTextContent(item)
    })
  })

  it('renders the ellipsis element class on the ellipsis', () => {
    render(<Pagination linkTemplate={linkTemplate} maxVisiblePages={7} page={1} totalPages={10} />)

    const ellipsis = screen.getByText('…')

    expect(ellipsis).toHaveClass('ams-pagination__ellipsis')
  })

  it('should set aria-current to true on the current page', () => {
    render(<Pagination linkTemplate={linkTemplate} page={4} totalPages={10} />)

    const currentPageLink = screen.getByRole('link', { name: 'Pagina 4' })

    expect(currentPageLink).toHaveAttribute('aria-current', 'page')
  })

  it('should set the correct href on the links', () => {
    render(<Pagination linkTemplate={linkTemplate} page={4} totalPages={10} />)

    const previousPageLink = screen.getByRole('link', { name: 'Vorige pagina' })
    const currentPageLink = screen.getByRole('link', { name: 'Pagina 4' })
    const nextPageLink = screen.getByRole('link', { name: 'Volgende pagina' })

    expect(previousPageLink).toHaveAttribute('href', '#?pagina=3')
    expect(currentPageLink).toHaveAttribute('href', '#?pagina=4')
    expect(nextPageLink).toHaveAttribute('href', '#?pagina=5')
  })

  it('sets a custom id for the accessible name', () => {
    render(<Pagination accessibleNameId="custom-id" linkTemplate={linkTemplate} totalPages={10} />)

    const component = screen.getByRole('navigation', { name: 'Paginering' })

    expect(component).toHaveAttribute('aria-labelledby', 'custom-id')
  })

  it('generates a unique fallback id when none is provided', () => {
    render(
      <>
        <Pagination linkTemplate={linkTemplate} totalPages={10} />
        <Pagination linkTemplate={linkTemplate} totalPages={10} />
      </>,
    )

    const [first, second] = screen.getAllByRole('navigation', { name: 'Paginering' })

    expect(first).toHaveAttribute('aria-labelledby')
    expect(second).toHaveAttribute('aria-labelledby')
    expect(first.getAttribute('aria-labelledby')).not.toBe(second.getAttribute('aria-labelledby'))
  })

  it('should not render when totalPages is 1 or less', () => {
    render(<Pagination linkTemplate={linkTemplate} totalPages={1} />)

    expect(screen.queryByRole('navigation')).not.toBeInTheDocument()
  })

  it('should not show the previous link on the first page', () => {
    render(<Pagination linkTemplate={linkTemplate} page={1} totalPages={10} />)

    expect(screen.queryByRole('link', { name: 'Vorige pagina' })).not.toBeInTheDocument()
  })

  it('should not show the next link on the last page', () => {
    render(<Pagination linkTemplate={linkTemplate} page={10} totalPages={10} />)

    expect(screen.queryByRole('link', { name: 'Volgende pagina' })).not.toBeInTheDocument()
  })

  it('renders custom labels for the previous and next links', () => {
    render(
      <Pagination linkTemplate={linkTemplate} nextLabel="next" page={4} previousLabel="previous" totalPages={10} />,
    )

    const previousLink = screen.getByRole('link', { name: 'Vorige pagina' })
    const nextLink = screen.getByRole('link', { name: 'Volgende pagina' })

    expect(previousLink).toHaveTextContent('previous')
    expect(previousLink).toHaveAttribute('rel', 'prev')
    expect(nextLink).toHaveTextContent('next')
    expect(nextLink).toHaveAttribute('rel', 'next')
  })

  it('renders the relative-link element class on the previous and next links', () => {
    render(<Pagination linkTemplate={linkTemplate} page={4} totalPages={10} />)

    const previousLink = screen.getByRole('link', { name: 'Vorige pagina' })
    const nextLink = screen.getByRole('link', { name: 'Volgende pagina' })

    expect(previousLink).toHaveClass('ams-pagination__relative-link')
    expect(nextLink).toHaveClass('ams-pagination__relative-link')
  })

  it('renders an accessible name for the navigation', () => {
    render(<Pagination accessibleName="Pagination" linkTemplate={linkTemplate} totalPages={10} />)

    const component = screen.getByRole('navigation', { name: 'Pagination' })

    expect(component).toBeInTheDocument()
  })

  it('renders accessible names for the previous and next links', () => {
    render(
      <Pagination
        linkTemplate={linkTemplate}
        nextAccessibleName="Next page"
        page={4}
        previousAccessibleName="Previous page"
        totalPages={10}
      />,
    )

    const previousLink = screen.getByRole('link', { name: 'Previous page' })
    const nextLink = screen.getByRole('link', { name: 'Next page' })

    expect(previousLink).toBeInTheDocument()
    expect(nextLink).toBeInTheDocument()
  })

  it('renders a custom link component', () => {
    const CustomLink = (props: AnchorHTMLAttributes<HTMLAnchorElement>) => <a data-test {...props} />

    render(<Pagination linkComponent={CustomLink} linkTemplate={linkTemplate} totalPages={10} />)

    const customLink = screen.getByRole('link', { name: 'Pagina 1' })

    expect(customLink).toHaveAttribute('data-test')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLElement>()

    render(<Pagination linkTemplate={linkTemplate} ref={ref} totalPages={10} />)

    const component = screen.getByRole('navigation', { name: 'Paginering' })

    expect(ref.current).toBe(component)
  })

  it('passes additional props', () => {
    render(<Pagination aria-hidden="false" data-test="data-test" id="id" linkTemplate={linkTemplate} totalPages={10} />)

    const component = screen.getByRole('navigation', { name: 'Paginering' })

    expect(component).toHaveAttribute('aria-hidden', 'false')
    expect(component).toHaveAttribute('id', 'id')
    expect(component).toHaveAttribute('data-test', 'data-test')
  })
})

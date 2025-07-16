/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import type { AnchorHTMLAttributes } from 'react'
import { Pagination } from './Pagination'
import '@testing-library/jest-dom'

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

  it('should render all the pages when totalPages < maxVisiblePages', () => {
    render(<Pagination linkTemplate={linkTemplate} maxVisiblePages={7} totalPages={6} />)

    const listItem = screen.getAllByRole('listitem', { hidden: true })

    const range = ['1', '2', '3', '4', '5', '6']

    range.forEach((item, index) => {
      expect(listItem[index]).toHaveTextContent(item)
    })
  })

  it('should render the pages including one (last) spacer in the correct location when totalPages > maxVisiblePages', () => {
    render(<Pagination linkTemplate={linkTemplate} maxVisiblePages={7} page={1} totalPages={10} />)

    const listItem = screen.getAllByRole('listitem', { hidden: true })

    const range = ['1', '2', '3', '4', '5', '…', '10']

    range.forEach((item, index) => {
      expect(listItem[index]).toHaveTextContent(item)
    })
  })

  it('should render the pages including the two spacers in the correct location when totalPages > maxVisiblePages and current page > 4', () => {
    render(<Pagination linkTemplate={linkTemplate} maxVisiblePages={7} page={6} totalPages={10} />)

    const listItem = screen.getAllByRole('listitem', { hidden: true })

    const range = ['1', '…', '5', '6', '7', '…', '10']

    range.forEach((item, index) => {
      expect(listItem[index]).toHaveTextContent(item)
    })
  })

  it('should render the pages including one (first) spacer in the correct location when totalPages > maxVisiblePages and page > maxVisiblePages', () => {
    render(<Pagination linkTemplate={linkTemplate} maxVisiblePages={7} page={8} totalPages={10} />)

    const listItem = screen.getAllByRole('listitem', { hidden: true })

    const range = ['1', '…', '6', '7', '8', '9', '10']

    range.forEach((item, index) => {
      expect(listItem[index]).toHaveTextContent(item)
    })
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

  it('sets a custom id for the accessible label - deprecated', () => {
    render(<Pagination linkTemplate={linkTemplate} totalPages={10} visuallyHiddenLabelId="custom-id" />)

    const component = screen.getByRole('navigation', { name: 'Paginering' })

    expect(component).toHaveAttribute('aria-labelledby', 'custom-id')
  })

  it('sets a custom id for the accessible label', () => {
    render(<Pagination accessibleNameId="custom-id" linkTemplate={linkTemplate} totalPages={10} />)

    const component = screen.getByRole('navigation', { name: 'Paginering' })

    expect(component).toHaveAttribute('aria-labelledby', 'custom-id')
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

  it('renders custom labels for the ‘previous’ and ‘next’ links', () => {
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

  it('renders an accessible label for the navigation - deprecated', () => {
    render(<Pagination linkTemplate={linkTemplate} totalPages={10} visuallyHiddenLabel="Pagination" />)

    const component = screen.getByRole('navigation', { name: 'Pagination' })

    expect(component).toBeInTheDocument()
  })

  it('renders an accessible label for the navigation', () => {
    render(<Pagination accessibleName="Pagination" linkTemplate={linkTemplate} totalPages={10} />)

    const component = screen.getByRole('navigation', { name: 'Pagination' })

    expect(component).toBeInTheDocument()
  })

  it('renders accessible labels for the ‘previous’ and ‘next’ links - deprecated', () => {
    render(
      <Pagination
        linkTemplate={linkTemplate}
        nextVisuallyHiddenLabel="Next page"
        page={4}
        previousVisuallyHiddenLabel="Previous page"
        totalPages={10}
      />,
    )

    const previousLink = screen.getByRole('link', { name: 'Previous page' })
    const nextLink = screen.getByRole('link', { name: 'Next page' })

    expect(previousLink).toBeInTheDocument()
    expect(nextLink).toBeInTheDocument()
  })

  it('renders accessible labels for the ‘previous’ and ‘next’ links', () => {
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
})

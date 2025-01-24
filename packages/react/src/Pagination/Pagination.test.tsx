import { fireEvent, render, screen } from '@testing-library/react'
import { createRef, useState } from 'react'
import { Pagination } from './Pagination'
import '@testing-library/jest-dom'

describe('Pagination', () => {
  it('renders', () => {
    const { container } = render(<Pagination totalPages={10} />)

    const component = container.querySelector(':only-child')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    const { container } = render(<Pagination totalPages={10} />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-pagination')
  })

  it('can have a additional class name', () => {
    const { container } = render(<Pagination className="extra" totalPages={10} />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('extra')
    expect(component).toHaveClass('ams-pagination')
  })

  it('should render all the pages when totalPages < maxVisiblePages', () => {
    render(<Pagination maxVisiblePages={7} totalPages={6} />)

    expect(screen.getAllByRole('listitem').length).toBe(8) // 6 + 2 buttons
    expect(screen.queryByTestId('lastSpacer')).not.toBeInTheDocument()
    expect(screen.queryByTestId('firstSpacer')).not.toBeInTheDocument()
  })

  it('should render the pages including one (last) spacer when totalPages > maxVisiblePages', () => {
    render(<Pagination maxVisiblePages={7} page={1} totalPages={10} />)

    expect(screen.getAllByRole('listitem').length).toBe(8) // 6 + 2 buttons
    expect(screen.getByTestId('lastSpacer')).toBeInTheDocument()
    expect(screen.queryByTestId('firstSpacer')).not.toBeInTheDocument()
  })

  it('should render the pages including the two spacers when totalPages > maxVisiblePages and current page > 4', () => {
    render(<Pagination maxVisiblePages={7} page={6} totalPages={10} />)

    expect(screen.getAllByRole('listitem').length).toBe(7) // 5 + 2 buttons
    expect(screen.getByTestId('lastSpacer')).toBeInTheDocument()
    expect(screen.getByTestId('firstSpacer')).toBeInTheDocument()
  })

  it('should navigate to the next page when clicking on the ‘next’ button', () => {
    const onPageChangeMock = jest.fn()

    render(<Pagination onPageChange={onPageChangeMock} page={6} totalPages={10} />)

    expect(onPageChangeMock).not.toHaveBeenCalled()
    expect(screen.getByRole('button', { name: 'Pagina 6' })).toHaveAttribute('aria-current', 'true')
    expect(screen.getByRole('button', { name: 'Ga naar pagina 7' })).not.toHaveAttribute('aria-current', 'true')

    fireEvent.click(screen.getByText('volgende'))

    expect(onPageChangeMock).toHaveBeenCalled()
    expect(screen.getByRole('button', { name: 'Ga naar pagina 6' })).not.toHaveAttribute('aria-current', 'true')
    expect(screen.getByRole('button', { name: 'Pagina 7' })).toHaveAttribute('aria-current', 'true')
  })

  it('should navigate to the previous page when clicking on the ‘previous’ button', () => {
    const onPageChangeMock = jest.fn()

    render(<Pagination onPageChange={onPageChangeMock} page={6} totalPages={10} />)

    expect(onPageChangeMock).not.toHaveBeenCalled()
    expect(screen.getByRole('button', { name: 'Pagina 6' })).toHaveAttribute('aria-current', 'true')
    expect(screen.getByRole('button', { name: 'Ga naar pagina 5' })).not.toHaveAttribute('aria-current', 'true')

    fireEvent.click(screen.getByText('vorige'))

    expect(onPageChangeMock).toHaveBeenCalled()
    expect(screen.getByRole('button', { name: 'Ga naar pagina 6' })).not.toHaveAttribute('aria-current', 'true')
    expect(screen.getByRole('button', { name: 'Pagina 5' })).toHaveAttribute('aria-current', 'true')
  })

  it('should be working in a controlled state', () => {
    function ControlledComponent() {
      const [page, setPage] = useState(6)

      return <Pagination onPageChange={setPage} page={page} totalPages={10} />
    }

    render(<ControlledComponent />)

    expect(screen.getByRole('button', { name: 'Pagina 6' })).toHaveAttribute('aria-current', 'true')
    expect(screen.getByRole('button', { name: 'Ga naar pagina 5' })).not.toHaveAttribute('aria-current', 'true')

    fireEvent.click(screen.getByText('vorige'))

    expect(screen.getByRole('button', { name: 'Ga naar pagina 6' })).not.toHaveAttribute('aria-current', 'true')
    expect(screen.getByRole('button', { name: 'Pagina 5' })).toHaveAttribute('aria-current', 'true')

    fireEvent.click(screen.getByText('volgende'))

    expect(screen.getByRole('button', { name: 'Pagina 6' })).toHaveAttribute('aria-current', 'true')
    expect(screen.getByRole('button', { name: 'Ga naar pagina 5' })).not.toHaveAttribute('aria-current', 'true')
  })

  it('renders custom labels for the ‘previous’ and ‘next’ buttons', () => {
    render(<Pagination nextLabel="next" previousLabel="previous" totalPages={10} />)

    const previousButton = screen.getByRole('button', { name: 'Vorige pagina' })
    const nextButton = screen.getByRole('button', { name: 'Volgende pagina' })

    expect(previousButton).toHaveTextContent('previous')
    expect(nextButton).toHaveTextContent('next')
  })

  it('renders an accessible label for the navigation', () => {
    render(<Pagination totalPages={10} visuallyHiddenLabel="Pagination" />)

    const navElement = screen.getByRole('navigation')

    expect(navElement).toHaveAccessibleName('Pagination')
  })

  it('renders accessible labels for the ‘previous’ and ‘next’ buttons', () => {
    render(
      <Pagination nextVisuallyHiddenLabel="Next page" previousVisuallyHiddenLabel="Previous page" totalPages={10} />,
    )

    const previousButton = screen.getByRole('button', { name: 'Previous page' })
    const nextButton = screen.getByRole('button', { name: 'Next page' })

    expect(previousButton).toBeInTheDocument()
    expect(nextButton).toBeInTheDocument()
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLElement>()

    const { container } = render(<Pagination ref={ref} totalPages={10} />)

    const component = container.querySelector(':only-child')

    expect(ref.current).toBe(component)
  })
})

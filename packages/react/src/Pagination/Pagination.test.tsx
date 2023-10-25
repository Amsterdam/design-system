import { fireEvent, render, screen } from '@testing-library/react'
import { createRef, useState } from 'react'
import { Pagination } from './Pagination'
import '@testing-library/jest-dom'

describe('Pagination', () => {
  it('renders', () => {
    const { container } = render(<Pagination page={1} pageSize={10} collectionSize={60} />)
    const component = container.querySelector(':only-child')
    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    const { container } = render(<Pagination page={1} pageSize={10} collectionSize={60} />)
    const component = container.querySelector(':only-child')
    expect(component).toHaveClass('amsterdam-pagination')
  })

  it('can have a additional class name', () => {
    const { container } = render(<Pagination page={1} pageSize={10} collectionSize={60} className="extra" />)
    const component = container.querySelector(':only-child')
    expect(component).toHaveClass('extra')
    expect(component).toHaveClass('amsterdam-pagination')
  })

  it('should render all the pages when the pages < maxVisiblePages', () => {
    render(<Pagination page={1} pageSize={10} collectionSize={60} />)
    expect(screen.getAllByRole('listitem').length).toBe(8) // 6 + 2 buttons
  })

  it('should render the pages including one (last) spacer when the pages > maxVisiblePages', () => {
    render(<Pagination page={1} pageSize={10} collectionSize={80} maxVisiblePages={7} />)
    expect(screen.getAllByRole('listitem').length).toBe(8) // 6 + 2 buttons
    expect(screen.getByTestId('lastSpacer')).toBeInTheDocument()
    expect(screen.queryByTestId('firstSpacer')).not.toBeInTheDocument()
  })

  it('should render the pages including the two spacer when the pages > maxVisiblePages and current page > 4', () => {
    render(<Pagination page={6} pageSize={10} collectionSize={100} maxVisiblePages={7} />)
    expect(screen.getAllByRole('listitem').length).toBe(7) // 5 + 2 buttons
    expect(screen.getByTestId('lastSpacer')).toBeInTheDocument()
    expect(screen.getByTestId('firstSpacer')).toBeInTheDocument()
  })

  it('should navigate to the next page when clicking on the "next" button', () => {
    const onPageChangeMock = jest.fn()
    render(<Pagination page={6} pageSize={10} collectionSize={100} onPageChange={onPageChangeMock} />)

    expect(onPageChangeMock).not.toHaveBeenCalled()
    expect(screen.getByText('6')).toHaveAttribute('aria-current', 'true')
    expect(screen.getByText('7')).not.toHaveAttribute('aria-current', 'true')

    fireEvent.click(screen.getByText('volgende'))

    expect(onPageChangeMock).toHaveBeenCalled()
    expect(screen.getByText('6')).not.toHaveAttribute('aria-current', 'true')
    expect(screen.getByText('7')).toHaveAttribute('aria-current', 'true')
  })

  it('should navigate to the previous page when clicking on the "previous" button', () => {
    const onPageChangeMock = jest.fn()
    render(<Pagination page={6} pageSize={10} collectionSize={100} onPageChange={onPageChangeMock} />)

    expect(onPageChangeMock).not.toHaveBeenCalled()
    expect(screen.getByText('6')).toHaveAttribute('aria-current', 'true')
    expect(screen.getByText('5')).not.toHaveAttribute('aria-current', 'true')

    fireEvent.click(screen.getByText('vorige'))

    expect(onPageChangeMock).toHaveBeenCalled()
    expect(screen.getByText('6')).not.toHaveAttribute('aria-current', 'true')
    expect(screen.getByText('5')).toHaveAttribute('aria-current', 'true')
  })

  it('should be working in a controlled state', () => {
    function ControlledComponent() {
      const [page, setPage] = useState(6)

      return <Pagination page={page} pageSize={10} collectionSize={100} onPageChange={setPage} />
    }

    render(<ControlledComponent />)

    expect(screen.getByText('6')).toHaveAttribute('aria-current', 'true')
    expect(screen.getByText('5')).not.toHaveAttribute('aria-current', 'true')

    fireEvent.click(screen.getByText('vorige'))

    expect(screen.getByText('6')).not.toHaveAttribute('aria-current', 'true')
    expect(screen.getByText('5')).toHaveAttribute('aria-current', 'true')

    fireEvent.click(screen.getByText('volgende'))

    expect(screen.getByText('6')).toHaveAttribute('aria-current', 'true')
    expect(screen.getByText('5')).not.toHaveAttribute('aria-current', 'true')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLElement>()
    const { container } = render(<Pagination page={1} pageSize={10} collectionSize={60} ref={ref} />)
    const component = container.querySelector(':only-child')
    expect(ref.current).toBe(component)
  })
})

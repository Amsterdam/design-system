import { render } from '@testing-library/react'
import { createRef } from 'react'
import { HeaderGridCellNarrowWindowOnly } from './HeaderGridCellNarrowWindowOnly'
import '@testing-library/jest-dom'

describe('Header narrow screen only grid cell', () => {
  it('renders', () => {
    const { container } = render(<HeaderGridCellNarrowWindowOnly />)

    const component = container.querySelector(':only-child')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a Grid.Cell', () => {
    const { container } = render(<HeaderGridCellNarrowWindowOnly />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-grid__cell')
  })

  it('renders a design system BEM class name', () => {
    const { container } = render(<HeaderGridCellNarrowWindowOnly />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-header__grid-cell-narrow-window-only')
  })

  it('renders an additional class name', () => {
    const { container } = render(<HeaderGridCellNarrowWindowOnly className="extra" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-header__grid-cell-narrow-window-only extra')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLDivElement>()

    const { container } = render(<HeaderGridCellNarrowWindowOnly ref={ref} />)

    const component = container.querySelector(':only-child')

    expect(ref.current).toBe(component)
  })
})

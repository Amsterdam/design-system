import { render } from '@testing-library/react'
import { createRef } from 'react'
import { PageHeaderGridCellNarrowWindowOnly } from './PageHeaderGridCellNarrowWindowOnly'
import '@testing-library/jest-dom'

describe('Page Header Grid Cell Narrow Window Only', () => {
  it('renders', () => {
    const { container } = render(<PageHeaderGridCellNarrowWindowOnly />)

    const component = container.querySelector(':only-child')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a Grid.Cell', () => {
    const { container } = render(<PageHeaderGridCellNarrowWindowOnly />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-grid__cell')
  })

  it('renders a design system BEM class name', () => {
    const { container } = render(<PageHeaderGridCellNarrowWindowOnly />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-page-header__grid-cell-narrow-window-only')
  })

  it('renders an additional class name', () => {
    const { container } = render(<PageHeaderGridCellNarrowWindowOnly className="extra" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-page-header__grid-cell-narrow-window-only extra')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLDivElement>()

    const { container } = render(<PageHeaderGridCellNarrowWindowOnly ref={ref} />)

    const component = container.querySelector(':only-child')

    expect(ref.current).toBe(component)
  })
})

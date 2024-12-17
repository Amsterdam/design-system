import { render } from '@testing-library/react'
import { createRef } from 'react'
import { HeaderNarrowScreenOnlyGridCell } from './HeaderNarrowScreenOnlyGridCell'
import '@testing-library/jest-dom'

describe('Header narrow screen only grid cell', () => {
  it('renders', () => {
    const { container } = render(<HeaderNarrowScreenOnlyGridCell />)

    const component = container.querySelector(':only-child')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a Grid.Cell', () => {
    const { container } = render(<HeaderNarrowScreenOnlyGridCell />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-grid__cell')
  })

  it('renders a design system BEM class name', () => {
    const { container } = render(<HeaderNarrowScreenOnlyGridCell />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-header__narrow-screen-only-grid-cell')
  })

  it('renders an additional class name', () => {
    const { container } = render(<HeaderNarrowScreenOnlyGridCell className="extra" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-header__narrow-screen-only-grid-cell extra')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLDivElement>()

    const { container } = render(<HeaderNarrowScreenOnlyGridCell ref={ref} />)

    const component = container.querySelector(':only-child')

    expect(ref.current).toBe(component)
  })
})

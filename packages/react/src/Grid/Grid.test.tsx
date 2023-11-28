import { render } from '@testing-library/react'
import { createRef } from 'react'
import { Grid } from './Grid'
import '@testing-library/jest-dom'

describe('Grid', () => {
  it('renders', () => {
    const { container } = render(<Grid />)
    const component = container.querySelector(':only-child')
    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    const { container } = render(<Grid />)
    const component = container.querySelector(':only-child')
    expect(component).toHaveClass('amsterdam-grid')
  })

  it('renders an additional class name', () => {
    const { container } = render(<Grid className="extra" />)
    const component = container.querySelector(':only-child')
    expect(component).toHaveClass('extra')
    expect(component).toHaveClass('amsterdam-grid')
  })

  it('renders the compact class name', () => {
    const { container } = render(<Grid compact />)
    const component = container.querySelector(':only-child')
    expect(component).toHaveClass('amsterdam-grid--compact')
  })

  it('renders a medium vertical spacing class name for a spacious grid', () => {
    const { container } = render(<Grid paddingVertical="medium" />)
    const component = container.querySelector(':only-child')
    expect(component).toHaveClass('amsterdam-grid--padding-vertical--medium')
  })

  it('renders a medium vertical spacing class name for a compact grid', () => {
    const { container } = render(<Grid compact paddingVertical="medium" />)
    const component = container.querySelector(':only-child')
    expect(component).toHaveClass('amsterdam-grid--padding-vertical--medium')
  })

  it('renders a small top class name for a spacious grid', () => {
    const { container } = render(<Grid paddingTop="small" />)
    const component = container.querySelector(':only-child')
    expect(component).toHaveClass('amsterdam-grid--padding-top--small')
  })

  it('renders a small top class name for a compact grid', () => {
    const { container } = render(<Grid compact paddingTop="small" />)
    const component = container.querySelector(':only-child')
    expect(component).toHaveClass('amsterdam-grid--padding-top--small')
  })

  it('renders a large bottom class name for a spacious grid', () => {
    const { container } = render(<Grid paddingBottom="large" />)
    const component = container.querySelector(':only-child')
    expect(component).toHaveClass('amsterdam-grid--padding-bottom--large')
  })

  it('renders a large bottom class name for a compact grid', () => {
    const { container } = render(<Grid compact paddingBottom="large" />)
    const component = container.querySelector(':only-child')
    expect(component).toHaveClass('amsterdam-grid--padding-bottom--large')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLDivElement>()
    const { container } = render(<Grid ref={ref} />)
    const component = container.querySelector(':only-child')
    expect(ref.current).toBe(component)
  })
})

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

  it('renders the high-density class name', () => {
    const { container } = render(<Grid density="high" />)
    const component = container.querySelector(':only-child')
    expect(component).toHaveClass('amsterdam-grid--density-high')
  })

  it('renders a medium vertical spacing class name for a low-density grid', () => {
    const { container } = render(<Grid spaceVertical="medium" />)
    const component = container.querySelector(':only-child')
    expect(component).toHaveClass('amsterdam-grid--density-low--space-vertical--medium')
  })

  it('renders a medium vertical spacing class name for a high-density grid', () => {
    const { container } = render(<Grid density="high" spaceVertical="medium" />)
    const component = container.querySelector(':only-child')
    expect(component).toHaveClass('amsterdam-grid--density-high--space-vertical--medium')
  })

  it('renders a small top class name for a low-density grid', () => {
    const { container } = render(<Grid spaceTop="small" />)
    const component = container.querySelector(':only-child')
    expect(component).toHaveClass('amsterdam-grid--density-low--space-top--small')
  })

  it('renders a small top class name for a high-density grid', () => {
    const { container } = render(<Grid density="high" spaceTop="small" />)
    const component = container.querySelector(':only-child')
    expect(component).toHaveClass('amsterdam-grid--density-high--space-top--small')
  })

  it('renders a large bottom class name for a low-density grid', () => {
    const { container } = render(<Grid spaceBottom="large" />)
    const component = container.querySelector(':only-child')
    expect(component).toHaveClass('amsterdam-grid--density-low--space-bottom--large')
  })

  it('renders a large bottom class name for a high-density grid', () => {
    const { container } = render(<Grid density="high" spaceBottom="large" />)
    const component = container.querySelector(':only-child')
    expect(component).toHaveClass('amsterdam-grid--density-high--space-bottom--large')
  })

  it('prioritizes vertical space over bottom and top space', () => {
    const { container } = render(<Grid spaceVertical="medium" spaceTop="small" spaceBottom="large" />)
    const component = container.querySelector(':only-child')
    expect(component).toHaveClass('amsterdam-grid--density-low--space-vertical--medium')
    expect(component).not.toHaveClass('amsterdam-grid--density-low--space-top--small')
    expect(component).not.toHaveClass('amsterdam-grid--density-low--space-bottom--large')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLDivElement>()
    const { container } = render(<Grid ref={ref} />)
    const component = container.querySelector(':only-child')
    expect(ref.current).toBe(component)
  })
})

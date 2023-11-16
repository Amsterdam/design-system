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
    const { container } = render(<Grid marginVertical="medium" />)
    const component = container.querySelector(':only-child')
    expect(component).toHaveClass('amsterdam-grid--density-low--margin-vertical--medium')
  })

  it('renders a medium vertical spacing class name for a high-density grid', () => {
    const { container } = render(<Grid density="high" marginVertical="medium" />)
    const component = container.querySelector(':only-child')
    expect(component).toHaveClass('amsterdam-grid--density-high--margin-vertical--medium')
  })

  it('renders a small top class name for a low-density grid', () => {
    const { container } = render(<Grid marginTop="small" />)
    const component = container.querySelector(':only-child')
    expect(component).toHaveClass('amsterdam-grid--density-low--margin-top--small')
  })

  it('renders a small top class name for a high-density grid', () => {
    const { container } = render(<Grid density="high" marginTop="small" />)
    const component = container.querySelector(':only-child')
    expect(component).toHaveClass('amsterdam-grid--density-high--margin-top--small')
  })

  it('renders a large bottom class name for a low-density grid', () => {
    const { container } = render(<Grid marginBottom="large" />)
    const component = container.querySelector(':only-child')
    expect(component).toHaveClass('amsterdam-grid--density-low--margin-bottom--large')
  })

  it('renders a large bottom class name for a high-density grid', () => {
    const { container } = render(<Grid density="high" marginBottom="large" />)
    const component = container.querySelector(':only-child')
    expect(component).toHaveClass('amsterdam-grid--density-high--margin-bottom--large')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLDivElement>()
    const { container } = render(<Grid ref={ref} />)
    const component = container.querySelector(':only-child')
    expect(ref.current).toBe(component)
  })
})

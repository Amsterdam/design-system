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
    const { container } = render(<Grid paddingVertical="medium" />)
    const component = container.querySelector(':only-child')
    expect(component).toHaveClass('amsterdam-grid--padding-vertical--medium')
  })

  it('renders a medium vertical spacing class name for a high-density grid', () => {
    const { container } = render(<Grid density="high" paddingVertical="medium" />)
    const component = container.querySelector(':only-child')
    expect(component).toHaveClass('amsterdam-grid--padding-vertical--medium')
  })

  it('renders a small top class name for a low-density grid', () => {
    const { container } = render(<Grid paddingTop="small" />)
    const component = container.querySelector(':only-child')
    expect(component).toHaveClass('amsterdam-grid--padding-top--small')
  })

  it('renders a small top class name for a high-density grid', () => {
    const { container } = render(<Grid density="high" paddingTop="small" />)
    const component = container.querySelector(':only-child')
    expect(component).toHaveClass('amsterdam-grid--padding-top--small')
  })

  it('renders a large bottom class name for a low-density grid', () => {
    const { container } = render(<Grid paddingBottom="large" />)
    const component = container.querySelector(':only-child')
    expect(component).toHaveClass('amsterdam-grid--padding-bottom--large')
  })

  it('renders a large bottom class name for a high-density grid', () => {
    const { container } = render(<Grid density="high" paddingBottom="large" />)
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

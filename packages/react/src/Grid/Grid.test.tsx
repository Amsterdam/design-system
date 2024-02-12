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

  it('renders a medium vertical spacing class name', () => {
    const { container } = render(<Grid paddingVertical="medium" />)
    const component = container.querySelector(':only-child')
    expect(component).toHaveClass('amsterdam-grid--padding-vertical--medium')
  })

  it('renders a small top class name', () => {
    const { container } = render(<Grid paddingTop="small" />)
    const component = container.querySelector(':only-child')
    expect(component).toHaveClass('amsterdam-grid--padding-top--small')
  })

  it('renders a large bottom class name', () => {
    const { container } = render(<Grid paddingBottom="large" />)
    const component = container.querySelector(':only-child')
    expect(component).toHaveClass('amsterdam-grid--padding-bottom--large')
  })

  it('renders a class name for a vertical gap', () => {
    const { container } = render(<Grid gapVertical="large" />)
    const component = container.querySelector(':only-child')
    expect(component).toHaveClass('amsterdam-grid--gap-vertical--large')
  })

  it('renders a class name for a vertical gap and a vertical padding', () => {
    const { container } = render(<Grid gapVertical="small" paddingVertical="large" />)
    const component = container.querySelector(':only-child')
    expect(component).toHaveClass('amsterdam-grid--gap-vertical--small amsterdam-grid--padding-vertical--large')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLDivElement>()
    const { container } = render(<Grid ref={ref} />)
    const component = container.querySelector(':only-child')
    expect(ref.current).toBe(component)
  })
})

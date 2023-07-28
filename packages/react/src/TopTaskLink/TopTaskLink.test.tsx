import { render } from '@testing-library/react'
import { createRef } from 'react'
import { TopTaskLink } from './TopTaskLink'
import '@testing-library/jest-dom'

describe('Top task link', () => {
  it('renders', () => {
    const { container } = render(<TopTaskLink />)

    const component = container.querySelector(':only-child')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    const { container } = render(<TopTaskLink />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('amsterdam-top-task-link')
  })

  it('can have a custom class name', () => {
    const { container } = render(<TopTaskLink className="extra" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('extra')
  })

  it('can have a additional class name', () => {
    const { container } = render(<TopTaskLink className="extra" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('extra')

    expect(component).toHaveClass('amsterdam-top-task-link')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLElement>()

    const { container } = render(<TopTaskLink ref={ref} />)

    const component = container.querySelector(':only-child')

    expect(ref.current).toBe(component)
  })
})

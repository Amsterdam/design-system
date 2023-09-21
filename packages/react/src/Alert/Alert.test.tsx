import { render } from '@testing-library/react'
// import { createRef } from 'react'
import { Alert } from './Alert'
import '@testing-library/jest-dom'

describe('Alert', () => {
  it('renders', () => {
    const { container } = render(<Alert text="test" type="info" />)

    const component = container.querySelector(':only-child')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  // it('renders a design system BEM class name', () => {
  //   const { container } = render(<Alert />)

  //   const component = container.querySelector(':only-child')

  //   expect(component).toHaveClass('amsterdam-alert')
  // })

  // it('can have a additional class name', () => {
  //   const { container } = render(<Alert className="extra" />)

  //   const component = container.querySelector(':only-child')

  //   expect(component).toHaveClass('extra')

  //   expect(component).toHaveClass('amsterdam-alert')
  // })

  // it('supports ForwardRef in React', () => {
  //   const ref = createRef<HTMLElement>()

  //   const { container } = render(<Alert ref={ref} />)

  //   const component = container.querySelector(':only-child')

  //   expect(ref.current).toBe(component)
  // })
})

import { render } from '@testing-library/react'
import { createRef } from 'react'
import { Accordion } from './Accordion'
import '@testing-library/jest-dom'

describe('Accordion', () => {
  it('renders an accordion', () => {
    const { container } = render(<Accordion headingLevel={1} />)

    const accordion = container.querySelector('.ams-accordion')

    expect(accordion).toBeInTheDocument()
    expect(accordion).toBeVisible()
  })

  it('renders an additional class name', () => {
    const { container } = render(<Accordion headingLevel={1} className="test" />)

    const accordion = container.querySelector('.ams-accordion')

    expect(accordion).toHaveClass('test')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLDivElement>()

    const { container } = render(<Accordion headingLevel={1} ref={ref} />)

    const accordion = container.querySelector('.ams-accordion')

    expect(ref.current).toBe(accordion)
  })
})

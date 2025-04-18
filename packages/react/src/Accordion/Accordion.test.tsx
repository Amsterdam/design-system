import { fireEvent, render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { Accordion } from './Accordion'
import '@testing-library/jest-dom'
import { KeyboardKeys } from '../common/useKeyboardFocus'

describe('Accordion', () => {
  it('renders an accordion', () => {
    const { container } = render(<Accordion headingLevel={1} />)

    const accordion = container.querySelector('.ams-accordion')

    expect(accordion).toBeInTheDocument()
    expect(accordion).toBeVisible()
  })

  it('renders an extra class name', () => {
    const { container } = render(<Accordion className="test" headingLevel={1} />)

    const accordion = container.querySelector('.ams-accordion')

    expect(accordion).toHaveClass('test')
  })

  it('sets focus on Accordion buttons when using arrow keys', () => {
    const { container } = render(
      <Accordion headingLevel={1}>
        <Accordion.Section label="one" />
        <Accordion.Section label="two" />
        <Accordion.Section label="three" />
      </Accordion>,
    )

    const firstChild = container.firstChild as HTMLElement
    const firstButton = screen.getByRole('button', { name: 'one' })
    const thirdButton = screen.getByRole('button', { name: 'three' })

    fireEvent.keyDown(firstChild, {
      key: KeyboardKeys.ArrowDown,
    })

    expect(firstButton).toHaveFocus()

    Array.from(Array(2).keys()).forEach(() => {
      fireEvent.keyDown(firstChild, {
        key: KeyboardKeys.ArrowDown,
      })
    })

    expect(thirdButton).toHaveFocus()
    expect(firstButton).not.toHaveFocus()
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLDivElement>()

    const { container } = render(<Accordion headingLevel={1} ref={ref} />)

    const accordion = container.querySelector('.ams-accordion')

    expect(ref.current).toBe(accordion)
  })
})

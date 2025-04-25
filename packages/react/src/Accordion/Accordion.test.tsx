/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
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

  it('renders an extra class name', () => {
    const { container } = render(<Accordion className="test" headingLevel={1} />)

    const accordion = container.querySelector('.ams-accordion')

    expect(accordion).toHaveClass('test')
  })

  it('sets focus on Accordion buttons when using arrow keys', async () => {
    const user = userEvent.setup()

    render(
      <Accordion headingLevel={1}>
        <Accordion.Section label="one" />
        <Accordion.Section label="two" />
        <Accordion.Section label="three" />
      </Accordion>,
    )

    const firstButton = screen.getByRole('button', { name: 'one' })
    const thirdButton = screen.getByRole('button', { name: 'three' })

    await user.click(firstButton)

    expect(firstButton).toHaveFocus()

    // Click the down arrow key twice
    await user.keyboard('{ArrowDown}')
    await user.keyboard('{ArrowDown}')

    expect(thirdButton).toHaveFocus()
    expect(firstButton).not.toHaveFocus()

    await user.keyboard('{ArrowDown}')

    expect(firstButton).toHaveFocus()
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLDivElement>()

    const { container } = render(<Accordion headingLevel={1} ref={ref} />)

    const accordion = container.querySelector('.ams-accordion')

    expect(ref.current).toBe(accordion)
  })
})

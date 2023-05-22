import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { createRef } from 'react'
import { Textbox } from './Textbox'

describe('Textbox', () => {
  it('renders an element with role textbox', () => {
    render(<Textbox />)

    const textbox = screen.getByRole('textbox')

    expect(textbox).toBeInTheDocument()
    expect(textbox).toBeVisible()
  })

  it('is able to pass a React ref', () => {
    const ref = createRef<HTMLInputElement>()

    const { container } = render(<Textbox ref={ref} />)

    const textbox = container.querySelector(':only-child')

    expect(ref.current).toBe(textbox)
  })
})

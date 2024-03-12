import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { FormLabel } from './FormLabel'
import '@testing-library/jest-dom'

describe('Form label', () => {
  it('renders an HTML label element', () => {
    const { container } = render(<FormLabel htmlFor="form-control" />)

    const label = container.querySelector('label:only-child')

    expect(label).toBeInTheDocument()
    expect(label).toBeVisible()
  })

  it('renders an HTML label element with for attribute', () => {
    const { container } = render(<FormLabel htmlFor="form-control" />)

    const label = container.querySelector('label[for="form-control"]:only-child')

    expect(label).toBeInTheDocument()
  })

  it('renders a design system BEM class name', () => {
    const { container } = render(<FormLabel htmlFor="form-control" />)

    const label = container.querySelector(':only-child')

    expect(label).toHaveClass('ams-form-label')
  })

  it('renders rich text content', () => {
    const { container } = render(
      <FormLabel htmlFor="form-control">
        <strong>Current</strong> password
      </FormLabel>,
    )

    const label = container.querySelector(':only-child')

    const richText = label?.querySelector('strong')

    expect(richText).toBeInTheDocument()
  })

  it('can be associated with an HTML form input', () => {
    render(
      <>
        <FormLabel htmlFor="email">Email</FormLabel>
        <input type="email" id="email" />
      </>,
    )

    const textbox = screen.getByRole('textbox', {
      name: 'Email',
    })

    expect(textbox).toBeInTheDocument()
    expect(textbox).toBeVisible()
  })

  it('can be hidden', () => {
    const { container } = render(<FormLabel hidden htmlFor="form-control" />)

    const label = container.querySelector(':only-child')

    expect(label).not.toBeVisible()
  })

  it('renders an additional class name', () => {
    const { container } = render(<FormLabel className="large" htmlFor="form-control" />)

    const label = container.querySelector(':only-child')

    expect(label).toHaveClass('large')

    expect(label).toHaveClass('ams-form-label')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLLabelElement>()

    const { container } = render(<FormLabel htmlFor="form-control" ref={ref} />)

    const div = container.querySelector(':only-child')

    expect(ref.current).toBe(div)
  })
})

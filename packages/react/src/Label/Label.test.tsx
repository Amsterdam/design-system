/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { Label } from './Label'
import '@testing-library/jest-dom'

describe('Label', () => {
  it('renders an HTML label element', () => {
    const { container } = render(<Label htmlFor="form-control" />)

    const label = container.querySelector('label:only-child')

    expect(label).toBeInTheDocument()
    expect(label).toBeVisible()
  })

  it('renders an HTML label element with for attribute', () => {
    const { container } = render(<Label htmlFor="form-control" />)

    const label = container.querySelector('label[for="form-control"]:only-child')

    expect(label).toBeInTheDocument()
  })

  it('renders a design system BEM class name', () => {
    const { container } = render(<Label htmlFor="form-control" />)

    const label = container.querySelector(':only-child')

    expect(label).toHaveClass('ams-label')
  })

  it('renders rich text content', () => {
    const { container } = render(
      <Label htmlFor="form-control">
        <strong>Current</strong> password
      </Label>,
    )

    const label = container.querySelector(':only-child')

    const richText = label?.querySelector('strong')

    expect(richText).toBeInTheDocument()
  })

  it('can be associated with an HTML form input', () => {
    render(
      <>
        <Label htmlFor="email">Email</Label>
        <input id="email" type="email" />
      </>,
    )

    const textbox = screen.getByRole('textbox', {
      name: 'Email',
    })

    expect(textbox).toBeInTheDocument()
    expect(textbox).toBeVisible()
  })

  it('can be hidden', () => {
    const { container } = render(<Label hidden htmlFor="form-control" />)

    const label = container.querySelector(':only-child')

    expect(label).not.toBeVisible()
  })

  it('renders an extra class name', () => {
    const { container } = render(<Label className="extra" htmlFor="form-control" />)

    const label = container.querySelector(':only-child')

    expect(label).toHaveClass('ams-label extra')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLLabelElement>()

    const { container } = render(<Label htmlFor="form-control" ref={ref} />)

    const div = container.querySelector(':only-child')

    expect(ref.current).toBe(div)
  })

  it('renders the provided hint text after the label', () => {
    const { container } = render(
      <Label hint="hint text" htmlFor="form-control">
        Label
      </Label>,
    )

    const label = container.querySelector('label:only-child')

    expect(label).toHaveTextContent('Label (hint text)')
  })

  it('renders the default hint text after the label', () => {
    const { container } = render(
      <Label htmlFor="form-control" optional={true}>
        Label
      </Label>,
    )

    const label = container.querySelector('label:only-child')

    expect(label).toHaveTextContent('Label (niet verplicht)')
  })

  it('renders the provided hint text after the label when `optional` is set to `false`', () => {
    const { container } = render(
      <Label hint="not required" htmlFor="form-control" optional={true}>
        Label
      </Label>,
    )

    const label = container.querySelector('label:only-child')

    expect(label).toHaveTextContent('Label (not required)')
  })

  it('renders the provided hint text after the label while `optional` is set to `false`', () => {
    const { container } = render(
      <Label hint="required" htmlFor="form-control" optional={false}>
        Label
      </Label>,
    )

    const label = container.querySelector('label:only-child')

    expect(label).toHaveTextContent('Label (required)')
  })
})

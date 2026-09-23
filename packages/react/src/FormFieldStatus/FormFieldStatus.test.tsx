/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { describe, expect, it } from 'vitest'

import { FormFieldStatus } from './FormFieldStatus'

describe('FormFieldStatus', () => {
  it('renders', () => {
    render(<FormFieldStatus />)

    const component = screen.getByRole('status')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    render(<FormFieldStatus />)

    const component = screen.getByRole('status')

    expect(component).toHaveClass('ams-form-field-status')
  })

  it('renders an extra class name', () => {
    render(<FormFieldStatus className="extra" />)

    const component = screen.getByRole('status')

    expect(component).toHaveClass('ams-form-field-status extra')
  })

  it('renders free status text passed as children', () => {
    render(<FormFieldStatus>Je wachtwoord is sterk genoeg.</FormFieldStatus>)

    const component = screen.getByRole('status')

    expect(component).toHaveTextContent('Je wachtwoord is sterk genoeg.')
  })

  it('renders one live region for the parts composed inside it', () => {
    render(
      <FormFieldStatus>
        <FormFieldStatus.CharacterCount length={7} maxLength={10} />
      </FormFieldStatus>,
    )

    const components = screen.getAllByRole('status')

    expect(components).toHaveLength(1)
    expect(components[0]).toHaveTextContent('7 van 10 tekens')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLDivElement>()

    render(<FormFieldStatus ref={ref} />)

    const component = screen.getByRole('status')

    expect(ref.current).toBe(component)
  })

  it('passes additional props', () => {
    render(<FormFieldStatus data-test="data-test" id="id" lang="nl" />)

    const component = screen.getByRole('status')

    expect(component).toHaveAttribute('id', 'id')
    expect(component).toHaveAttribute('lang', 'nl')
    expect(component).toHaveAttribute('data-test', 'data-test')
  })
})

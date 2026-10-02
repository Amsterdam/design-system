/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { describe, expect, it } from 'vitest'

import { FormFieldStatusCharacterCount } from './FormFieldStatusCharacterCount'

describe('FormFieldStatus.CharacterCount', () => {
  it('renders', () => {
    const { container } = render(<FormFieldStatusCharacterCount length={7} maxLength={10} />)

    const component = container.querySelector(':only-child')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    const { container } = render(<FormFieldStatusCharacterCount length={7} maxLength={10} />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-form-field-status__character-count')
  })

  it('renders an extra class name', () => {
    const { container } = render(<FormFieldStatusCharacterCount className="extra" length={7} maxLength={10} />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-form-field-status__character-count extra')
  })

  it('carries no live region of its own', () => {
    render(<FormFieldStatusCharacterCount length={7} maxLength={10} />)

    expect(screen.queryByRole('status')).not.toBeInTheDocument()
  })

  it('renders the Dutch count text by default', () => {
    const { container } = render(<FormFieldStatusCharacterCount length={7} maxLength={10} />)

    expect(container).toHaveTextContent('7 van 10 tekens')
  })

  it('reports no excess within the limit', () => {
    const { container } = render(<FormFieldStatusCharacterCount length={7} maxLength={10} />)

    expect(container.querySelector('.ams-form-field-status__error')).not.toBeInTheDocument()
  })

  it('reports no excess at the limit', () => {
    const { container } = render(<FormFieldStatusCharacterCount length={10} maxLength={10} />)

    expect(container).toHaveTextContent('10 van 10 tekens')
    expect(container.querySelector('.ams-form-field-status__error')).not.toBeInTheDocument()
  })

  it('keeps the count and reports the excess above the limit', () => {
    const { container } = render(<FormFieldStatusCharacterCount length={15} maxLength={10} />)

    expect(container).toHaveTextContent('15 van 10 tekens')
    expect(container.querySelector('.ams-form-field-status__error')).toHaveTextContent('5 tekens te veel')
  })

  it('reports a single character over the limit in the singular', () => {
    const { container } = render(<FormFieldStatusCharacterCount length={11} maxLength={10} />)

    expect(container.querySelector('.ams-form-field-status__error')).toHaveTextContent('1 teken te veel')
  })

  it('hides the warning icon from assistive technologies', () => {
    const { container } = render(<FormFieldStatusCharacterCount length={15} maxLength={10} />)

    expect(container.querySelector('svg')).toHaveAttribute('aria-hidden', 'true')
  })

  it('renders custom text through formatText', () => {
    const { container } = render(
      <FormFieldStatusCharacterCount
        formatText={(length, maxLength) => `${length} of ${maxLength} characters`}
        length={7}
        maxLength={10}
      />,
    )

    expect(container).toHaveTextContent('7 of 10 characters')
  })

  it('renders custom text through formatOverLimitText', () => {
    const { container } = render(
      <FormFieldStatusCharacterCount
        formatOverLimitText={(charactersOverLimit) => `${charactersOverLimit} characters too many`}
        length={15}
        maxLength={10}
      />,
    )

    expect(container.querySelector('.ams-form-field-status__error')).toHaveTextContent('5 characters too many')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLDivElement>()

    const { container } = render(<FormFieldStatusCharacterCount length={7} maxLength={10} ref={ref} />)

    const component = container.querySelector(':only-child')

    expect(ref.current).toBe(component)
  })

  it('passes additional props', () => {
    const { container } = render(
      <FormFieldStatusCharacterCount data-test="data-test" id="id" length={7} maxLength={10} />,
    )

    const component = container.querySelector(':only-child')

    expect(component).toHaveAttribute('id', 'id')
    expect(component).toHaveAttribute('data-test', 'data-test')
  })
})

import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { FormErrorList } from './FormErrorList'
import '@testing-library/jest-dom'

describe('Form error list', () => {
  const testErrors = [
    { id: '#', label: 'Vul een geldige datum in (bijvoorbeeld 6 januari 2030).' },
    { id: '#', label: 'De geldigheidsdatum van uw paspoort moet in de toekomst liggen.' },
  ]

  it('renders', () => {
    render(<FormErrorList errors={testErrors} />)

    const component = screen.getByRole('alert')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('does not render when there are no errors', () => {})

  it('renders a design system BEM class name', () => {
    render(<FormErrorList errors={testErrors} />)

    const component = screen.getByRole('alert')

    expect(component).toHaveClass('ams-form-error-list')
  })

  it('renders an additional class name', () => {
    render(<FormErrorList errors={testErrors} className="extra" />)

    const component = screen.getByRole('alert')

    expect(component).toHaveClass('ams-form-error-list extra')
  })

  it('renders a list item and link for every error', () => {})

  it('renders a custom heading', () => {})

  it('renders the correct heading level', () => {})

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLDivElement>()

    render(<FormErrorList errors={testErrors} ref={ref} />)

    const component = screen.getByRole('alert')

    expect(ref.current).toBe(component)
  })
})

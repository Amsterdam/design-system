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

  it('does not render when there are no errors', () => {
    render(<FormErrorList errors={[]} />)

    const component = screen.queryByRole('alert')

    expect(component).not.toBeInTheDocument()
  })

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

  it('renders a list item and link for every error', () => {
    render(<FormErrorList errors={testErrors} />)

    const listitems = screen.getAllByRole('listitem')
    const links = screen.getAllByRole('link')

    expect(listitems.length).toBe(2)
    expect(links.length).toBe(2)
  })

  it('renders a link with the correct name and href for every error', () => {
    render(<FormErrorList errors={testErrors} />)

    const link1 = screen.getByRole('link', { name: testErrors[0].label })
    const link2 = screen.getByRole('link', { name: testErrors[1].label })

    expect(link1).toHaveAttribute('href', testErrors[0].id)
    expect(link2).toHaveAttribute('href', testErrors[1].id)
  })

  it('renders a custom heading', () => {
    render(<FormErrorList errors={testErrors} heading="Test heading" />)

    const component = screen.getByRole('heading', { name: 'Test heading' })

    expect(component).toBeInTheDocument()
  })

  it('renders the correct heading level', () => {
    render(<FormErrorList errors={testErrors} headingLevel={4} />)

    const component = screen.getByRole('heading', { level: 4 })

    expect(component).toBeInTheDocument()
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLDivElement>()

    render(<FormErrorList errors={testErrors} ref={ref} />)

    const component = screen.getByRole('alert')

    expect(ref.current).toBe(component)
  })
})

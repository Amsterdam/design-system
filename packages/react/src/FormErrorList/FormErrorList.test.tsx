import { render, screen, waitFor } from '@testing-library/react'
import { createRef } from 'react'
import { FormErrorList } from './FormErrorList'
import '@testing-library/jest-dom'

describe('Form error list', () => {
  const testErrors = [
    { id: '#', label: 'Vul een geldige datum in (bijvoorbeeld 6 januari 2030).' },
    { id: '#', label: 'De geldigheidsdatum van uw paspoort moet in de toekomst liggen.' },
  ]

  it('renders', () => {
    const { container } = render(<FormErrorList errors={testErrors} />)

    const component = container.querySelector(':only-child')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('does not render when there are no errors', () => {
    const { container } = render(<FormErrorList errors={[]} />)

    const component = container.querySelector(':only-child')

    expect(component).not.toBeInTheDocument()
  })

  it('renders a design system BEM class name', () => {
    const { container } = render(<FormErrorList errors={testErrors} />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-form-error-list')
  })

  it('renders an additional class name', () => {
    const { container } = render(<FormErrorList errors={testErrors} className="extra" />)

    const component = container.querySelector(':only-child')

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

  const docTitle = 'Document title'
  const singleTestError = [{ id: '#', label: 'De geldigheidsdatum van uw paspoort moet in de toekomst liggen.' }]

  describe('prepends the document title with the error count', () => {
    it('single error', async () => {
      document.title = docTitle

      render(<FormErrorList errors={singleTestError} />)

      await waitFor(() => expect(document.title).toBe(`(1 invoerfout) ${docTitle}`))
    })

    it('multiple errors', async () => {
      document.title = docTitle

      render(<FormErrorList errors={testErrors} />)

      await waitFor(() => expect(document.title).toBe(`(2 invoerfouten) ${docTitle}`))
    })
  })

  describe('renders a custom document title label', () => {
    const label = { plural: 'errors', singular: 'error' }

    it('no errors', async () => {
      document.title = docTitle

      render(<FormErrorList errors={[]} />)

      await waitFor(() => expect(document.title).toBe(docTitle))
    })

    it('single error', async () => {
      document.title = docTitle

      render(<FormErrorList errors={singleTestError} errorCountLabel={label} />)

      await waitFor(() => expect(document.title).toBe(`(1 error) ${docTitle}`))
    })

    it('multiple errors', async () => {
      document.title = docTitle

      render(<FormErrorList errors={testErrors} errorCountLabel={label} />)

      await waitFor(() => expect(document.title).toBe(`(2 errors) ${docTitle}`))
    })
  })

  it('has focus on render', async () => {
    const { container } = render(<FormErrorList errors={testErrors} />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveFocus()
  })

  it('can disable automatic focus', async () => {
    const { container } = render(<FormErrorList errors={testErrors} focusOnRender={false} />)

    const component = container.querySelector(':only-child')

    expect(component).not.toHaveFocus()
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLDivElement>()

    const { container } = render(<FormErrorList errors={testErrors} ref={ref} />)

    const component = container.querySelector(':only-child')

    expect(ref.current).toBe(component)
  })
})

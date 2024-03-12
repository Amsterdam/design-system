import { fireEvent, render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { Accordion } from './Accordion'
import '@testing-library/jest-dom'

describe('Accordion section', () => {
  const testLabel = 'Test title'
  const testContent = 'Test content'

  it('renders an accordion section', () => {
    const { container } = render(<Accordion.Section label={testLabel}>{testContent}</Accordion.Section>)

    const accordionSection = container.querySelector('.ams-accordion__section')

    expect(accordionSection).toBeInTheDocument()
    expect(accordionSection).toBeVisible()
  })

  it('renders the accordion section BEM class names', () => {
    const { container } = render(<Accordion.Section label={testLabel}>{testContent}</Accordion.Section>)

    const heading = screen.getByRole('heading', {
      name: testLabel,
    })
    const button = screen.getByRole('button', {
      name: testLabel,
    })
    const section = container.querySelector('.ams-accordion__panel')

    expect(heading).toHaveClass('ams-accordion__header')
    expect(button).toHaveClass('ams-accordion__button')
    expect(section).toBeInTheDocument()
  })

  it('adds and removes --expanded class when the button is clicked', () => {
    const { getByText } = render(<Accordion.Section label={testLabel}>{testContent}</Accordion.Section>)

    const button = screen.getByRole('button', {
      name: testLabel,
    })
    const sectionContent = getByText(testContent)

    expect(sectionContent).not.toHaveClass('ams-accordion__panel--expanded')
    fireEvent.click(button)
    expect(sectionContent).toHaveClass('ams-accordion__panel--expanded')
    fireEvent.click(button)
    expect(sectionContent).not.toHaveClass('ams-accordion__panel--expanded')
  })

  it('adds --expanded class when expanded prop is true', () => {
    const { getByText } = render(
      <Accordion.Section label={testLabel} expanded>
        {testContent}
      </Accordion.Section>,
    )

    const sectionContent = getByText(testContent)

    expect(sectionContent).toHaveClass('ams-accordion__panel--expanded')
  })

  it('renders a section HTML tag by defaultt', () => {
    render(
      <Accordion headingLevel={1}>
        <Accordion.Section label={testLabel}>{testContent}</Accordion.Section>
      </Accordion>,
    )

    const sectionQuery = screen.queryByRole('region')

    expect(sectionQuery).toBeInTheDocument()
  })

  it('does not render a section HTML tag when the section prop is false', () => {
    render(
      <Accordion headingLevel={1} section={false}>
        <Accordion.Section label={testLabel}>{testContent}</Accordion.Section>
      </Accordion>,
    )

    const sectionQuery = screen.queryByRole('region')

    expect(sectionQuery).not.toBeInTheDocument()
  })

  it('renders an accessible heading', () => {
    render(
      <Accordion headingLevel={3}>
        <Accordion.Section label={testLabel}>{testContent}</Accordion.Section>
      </Accordion>,
    )

    const heading = screen.getByRole('heading', {
      name: testLabel,
      level: 3,
    })

    expect(heading).toBeInTheDocument()
    expect(heading).toBeVisible()
  })

  it('renders an icon', () => {
    render(<Accordion.Section label={testLabel}>{testContent}</Accordion.Section>)

    const button = screen.getByRole('button', {
      name: testLabel,
    })
    const icon = button ? button.querySelector('svg:only-child') : null

    expect(icon).toBeInTheDocument()
  })

  it('renders an additional class name', () => {
    const { container } = render(
      <Accordion.Section label={testLabel} className="test">
        {testContent}
      </Accordion.Section>,
    )

    const accordionSection = container.querySelector('.ams-accordion__section')

    expect(accordionSection).toHaveClass('test')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLDivElement>()

    const { container } = render(
      <Accordion.Section label={testLabel} ref={ref}>
        {testContent}
      </Accordion.Section>,
    )

    const accordionSection = container.querySelector('.ams-accordion__section')

    expect(ref.current).toBe(accordionSection)
  })
})

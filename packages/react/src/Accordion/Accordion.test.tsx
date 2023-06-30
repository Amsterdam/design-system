import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { AccordionSection } from './AccordionSection'
import '@testing-library/jest-dom'

describe('Accordion', () => {
  const testTitle = 'Test title'
  const testContent = 'Test content'

  it('renders HTML details and summary elements', () => {
    render(
      <AccordionSection label={testTitle} headingLevel={1}>
        {testContent}
      </AccordionSection>,
    )

    const details = screen.getByRole('group')
    const summary = details.querySelector('summary')

    expect(details).toBeInTheDocument()
    expect(summary).toBeInTheDocument()
    expect(summary).toBeVisible()
  })

  it('renders the  design system BEM class names', () => {
    render(
      <AccordionSection label={testTitle} headingLevel={1}>
        {testContent}
      </AccordionSection>,
    )

    const details = screen.getByRole('group')
    const summary = details.querySelector('summary')
    const content = details.querySelector('div')

    expect(details).toHaveClass('amsterdam-details')
    expect(summary).toHaveClass('amsterdam-details__summary')
    expect(content).toHaveClass('amsterdam-details__content')
  })

  it('renders an accessible heading', () => {
    render(
      <AccordionSection label={testTitle} headingLevel={3}>
        {testContent}
      </AccordionSection>,
    )

    const heading = screen.getByRole('heading', {
      name: testTitle,
      level: 3,
    })

    expect(heading).toBeInTheDocument()
    expect(heading).toBeVisible()
  })

  it('renders an icon', () => {
    render(
      <AccordionSection label={testTitle} headingLevel={1}>
        {testContent}
      </AccordionSection>,
    )

    const details = screen.getByRole('group')
    const summary = details.querySelector('summary')
    const icon = summary ? summary.querySelector('svg:only-child') : null

    expect(icon).toBeInTheDocument()
  })

  it('can have a additional class name', () => {
    render(
      <AccordionSection label={testTitle} headingLevel={1} className="test">
        {testContent}
      </AccordionSection>,
    )

    const details = screen.getByRole('group')

    expect(details).toHaveClass('test')
    expect(details).toHaveClass('amsterdam-details')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLDivElement>()

    render(
      <AccordionSection label={testTitle} headingLevel={1} ref={ref}>
        {testContent}
      </AccordionSection>,
    )

    const details = screen.getByRole('group')

    expect(ref.current).toBe(details)
  })
})

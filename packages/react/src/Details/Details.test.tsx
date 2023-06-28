import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { Details } from './Details'
import '@testing-library/jest-dom'

describe('Details', () => {
  const testTitle = 'Test title'
  const testContent = 'Test content'

  it('renders HTML details and summary elements', () => {
    render(<Details summary={testTitle}>{testContent}</Details>)

    const details = screen.getByRole('group')
    const summary = details.querySelector('summary')

    expect(details).toBeInTheDocument()
    expect(summary).toBeInTheDocument()
    expect(summary).toBeVisible()
  })

  it('renders the  design system BEM class names', () => {
    render(<Details summary={testTitle}>{testContent}</Details>)

    const details = screen.getByRole('group')
    const summary = details.querySelector('summary')
    const content = details.querySelector('div')

    expect(details).toHaveClass('amsterdam-details')
    expect(summary).toHaveClass('amsterdam-details__summary')
    expect(content).toHaveClass('amsterdam-details__content')
  })

  it('renders an accessible heading', () => {
    render(
      <Details summary={testTitle} headingLevel={3}>
        {testContent}
      </Details>,
    )

    const heading = screen.getByRole('heading', {
      name: testTitle,
      level: 3,
    })

    expect(heading).toBeInTheDocument()
    expect(heading).toBeVisible()
  })

  it('renders an icon', () => {
    render(<Details summary={testTitle}>{testContent}</Details>)

    const details = screen.getByRole('group')
    const summary = details.querySelector('summary')
    const icon = summary ? summary.querySelector('svg:only-child') : null

    expect(icon).toBeInTheDocument()
  })

  it('can have a additional class name', () => {
    render(
      <Details summary={testTitle} className="test">
        {testContent}
      </Details>,
    )

    const details = screen.getByRole('group')

    expect(details).toHaveClass('test')
    expect(details).toHaveClass('amsterdam-details')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLDetailsElement>()

    render(
      <Details summary={testTitle} ref={ref}>
        {testContent}
      </Details>,
    )

    const details = screen.getByRole('group')

    expect(ref.current).toBe(details)
  })
})

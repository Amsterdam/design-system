/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { render, screen } from '@testing-library/react'
import { createRef } from 'react'

import { ProgressList } from './ProgressList'
import '@testing-library/jest-dom'

describe('Progress List', () => {
  it('renders', () => {
    const { container } = render(<ProgressList headingLevel={3} />)

    const component = container.querySelector(':only-child')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    const { container } = render(<ProgressList headingLevel={3} />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-progress-list')
  })

  it('renders the allowed levels correctly', () => {
    render(
      <>
        <ProgressList headingLevel={2}>
          <ProgressList.Step heading="Heading 2"></ProgressList.Step>
        </ProgressList>
        <ProgressList headingLevel={3}>
          <ProgressList.Step heading="Heading 3"></ProgressList.Step>
        </ProgressList>
        <ProgressList headingLevel={4}>
          <ProgressList.Step heading="Heading 4" />
        </ProgressList>
      </>,
    )

    const h2 = screen.getByRole('heading', { level: 2, name: 'Heading 2' })
    const h3 = screen.getByRole('heading', { level: 3, name: 'Heading 3' })
    const h4 = screen.getByRole('heading', { level: 4, name: 'Heading 4' })

    expect(h2).toBeInTheDocument()
    expect(h3).toBeInTheDocument()
    expect(h4).toBeInTheDocument()
  })

  it('renders an extra class name', () => {
    const { container } = render(<ProgressList className="extra" headingLevel={3} />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-progress-list extra')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLOListElement>()

    const { container } = render(<ProgressList headingLevel={3} ref={ref} />)

    const component = container.querySelector(':only-child')

    expect(ref.current).toBe(component)
  })
})

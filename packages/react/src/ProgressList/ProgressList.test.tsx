/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { render, screen, within } from '@testing-library/react'
import { createRef } from 'react'

import { ProgressList } from './ProgressList'
import '@testing-library/jest-dom'

describe('Progress List', () => {
  it('renders', () => {
    render(<ProgressList headingLevel={3} />)

    const component = screen.getByRole('list')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    render(<ProgressList headingLevel={3} />)

    const component = screen.getByRole('list')

    expect(component).toHaveClass('ams-progress-list')
  })

  it('applies the correct heading level modifier class', () => {
    render(<ProgressList headingLevel={4} />)

    const component = screen.getByRole('list')

    expect(component).toHaveClass('ams-progress-list--heading-4')
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
    render(<ProgressList className="extra" headingLevel={3} />)

    const component = screen.getByRole('list')

    expect(component).toHaveClass('ams-progress-list extra')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLOListElement>()

    render(<ProgressList headingLevel={3} ref={ref} />)

    const component = screen.getByRole('list')

    expect(ref.current).toBe(component)
  })

  it('supports composition using subcomponents', () => {
    render(
      <ProgressList headingLevel={3}>
        <ProgressList.Step hasSubSteps heading="Step">
          <ProgressList.SubSteps>
            <ProgressList.SubStep>Substep</ProgressList.SubStep>
          </ProgressList.SubSteps>
        </ProgressList.Step>
      </ProgressList>,
    )

    const [mainList, subStepsList] = screen.getAllByRole('list')

    expect(mainList).toHaveClass('ams-progress-list')
    expect(subStepsList).toHaveClass('ams-progress-list-substeps')

    // Main step is the only list item directly under the main list.
    const [mainStep] = within(mainList).getAllByRole('listitem')

    expect(mainStep).toHaveClass('ams-progress-list__step ams-progress-list__step--has-substeps')

    // Substeps are listitems under the substeps list.
    const [subStep] = within(subStepsList).getAllByRole('listitem')

    expect(subStep).toHaveClass('ams-progress-list-substeps__step')
  })
})

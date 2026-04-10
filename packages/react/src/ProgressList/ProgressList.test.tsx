/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { createRef } from 'react'
import { describe, expect, it } from 'vitest'

import { ProgressList, progressListHeadingLevels } from './ProgressList'

describe('ProgressList', () => {
  it('renders', () => {
    render(<ProgressList headingLevel={3} />)

    const list = screen.getByRole('list')

    expect(list).toBeInTheDocument()
    expect(list).toBeVisible()
    expect(list.tagName).toBe('OL')
  })

  it('renders a design system BEM class name', () => {
    render(<ProgressList headingLevel={3} />)

    const list = screen.getByRole('list')

    expect(list).toHaveClass('ams-progress-list')
  })

  progressListHeadingLevels.forEach((level) => {
    it(`adds the class for heading level ${level}`, () => {
      render(<ProgressList headingLevel={level} />)

      const list = screen.getByRole('list')

      expect(list).toHaveClass(`ams-progress-list--heading-${level}`)
    })

    it(`renders the heading with level ${level}`, () => {
      render(
        <ProgressList headingLevel={level}>
          <ProgressList.Step heading={`Heading ${level}`} />
        </ProgressList>,
      )

      const heading = screen.getByRole('heading', { level, name: `Heading ${level}` })

      expect(heading).toBeInTheDocument()
    })
  })

  it('renders an extra class name', () => {
    render(<ProgressList className="extra" headingLevel={3} />)

    const list = screen.getByRole('list')

    expect(list).toHaveClass('ams-progress-list extra')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLOListElement>()

    render(<ProgressList headingLevel={3} ref={ref} />)

    const list = screen.getByRole('list')

    expect(ref.current).toBe(list)
  })

  it('supports composition using subcomponents', () => {
    render(
      <ProgressList headingLevel={3}>
        <ProgressList.Step hasSubsteps heading="Step">
          <ProgressList.Substeps>
            <ProgressList.Substep>Substep</ProgressList.Substep>
          </ProgressList.Substeps>
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

  it('sets focus on step buttons when using arrow keys', async () => {
    const user = userEvent.setup()

    render(
      <ProgressList headingLevel={3}>
        <ProgressList.Step heading="one">Content</ProgressList.Step>
        <ProgressList.Step heading="two">Content</ProgressList.Step>
        <ProgressList.Step heading="three">Content</ProgressList.Step>
      </ProgressList>,
    )

    const firstButton = screen.getByRole('button', { name: /one/ })
    const thirdButton = screen.getByRole('button', { name: /three/ })

    await user.click(firstButton)

    expect(firstButton).toHaveFocus()

    await user.keyboard('{ArrowDown}')
    await user.keyboard('{ArrowDown}')

    expect(thirdButton).toHaveFocus()
    expect(firstButton).not.toHaveFocus()

    // Rotating: wraps from last to first
    await user.keyboard('{ArrowDown}')

    expect(firstButton).toHaveFocus()
  })

  it('passes additional props', () => {
    render(<ProgressList aria-hidden="false" data-test="data-test" headingLevel={2} id="id" />)

    const component = screen.getByRole('list')

    expect(component).toHaveAttribute('aria-hidden', 'false')
    expect(component).toHaveAttribute('id', 'id')
    expect(component).toHaveAttribute('data-test', 'data-test')
  })
})

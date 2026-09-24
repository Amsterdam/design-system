/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { describe, expect, it } from 'vitest'

import { DataList, dataListOrientations, dataListTermsWidths } from './DataList'

describe('DataList', () => {
  it('renders', () => {
    const { container } = render(<DataList />)

    const component = container.querySelector(':only-child')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    const { container } = render(<DataList />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-data-list')
  })

  it('renders an extra class name', () => {
    const { container } = render(<DataList className="extra" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-data-list ams-data-list--horizontal extra')
  })

  it('renders a description list element', () => {
    const { container } = render(<DataList />)

    const component = container.querySelector(':only-child')

    expect(component?.tagName).toBe('DL')
  })

  it('renders the class name for the horizontal orientation by default', () => {
    const { container } = render(<DataList />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-data-list--horizontal')
  })

  dataListOrientations.map((orientation) =>
    it(`renders the class name for the ‘${orientation}’ orientation`, () => {
      const { container } = render(<DataList orientation={orientation} />)

      const component = container.querySelector(':only-child')

      expect(component).toHaveClass(`ams-data-list--${orientation}`)
    }),
  )

  dataListTermsWidths.map((width) =>
    it(`renders the class name for the ‘${width}’ terms column width`, () => {
      const { container } = render(<DataList termsWidth={width} />)

      const component = container.querySelector(':only-child')

      expect(component).toHaveClass(`ams-data-list--${width}`)
    }),
  )

  it('renders its items, labels, values and actions', () => {
    render(
      <DataList>
        <DataList.Item>
          <DataList.Label>Geboortedatum</DataList.Label>
          <DataList.Value>1 januari 1990</DataList.Value>
          <DataList.Actions>
            <a href="#">Wijzigen</a>
          </DataList.Actions>
        </DataList.Item>
      </DataList>,
    )

    expect(screen.getByRole('term')).toHaveTextContent('Geboortedatum')
    expect(screen.getByText('1 januari 1990')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Wijzigen' })).toBeInTheDocument()
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLDListElement>()

    const { container } = render(<DataList ref={ref} />)

    const component = container.querySelector(':only-child')

    expect(ref.current).toBe(component)
  })

  it('passes additional props', () => {
    const { container } = render(<DataList aria-hidden="false" data-test="data-test" id="id" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveAttribute('aria-hidden', 'false')
    expect(component).toHaveAttribute('id', 'id')
    expect(component).toHaveAttribute('data-test', 'data-test')
  })
})

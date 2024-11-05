import { render } from '@testing-library/react'
import { createRef } from 'react'
import { DescriptionList, descriptionListTermsWidths } from './DescriptionList'
import '@testing-library/jest-dom'

describe('Description List', () => {
  it('renders', () => {
    const { container } = render(<DescriptionList />)

    const component = container.querySelector(':only-child')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    const { container } = render(<DescriptionList />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-description-list')
  })

  it('renders an additional class name', () => {
    const { container } = render(<DescriptionList className="extra" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-description-list extra')
  })

  descriptionListTermsWidths.map((width) =>
    it(`renders the class name for the ‘${width}’ terms column width`, () => {
      const { container } = render(<DescriptionList termsWidth={width} />)

      const component = container.querySelector(':only-child')

      expect(component).toHaveClass(`ams-description-list--terms-width-${width}`)
    }),
  )

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLDListElement>()

    const { container } = render(<DescriptionList ref={ref} />)

    const component = container.querySelector(':only-child')

    expect(ref.current).toBe(component)
  })

  it('renders the right inverse color class', () => {
    const { container } = render(<DescriptionList inverseColor />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-description-list--inverse-color')
  })
})

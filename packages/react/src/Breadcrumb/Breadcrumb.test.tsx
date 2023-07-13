import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { Breadcrumb } from './Breadcrumb'
import '@testing-library/jest-dom'

describe('Breadcrumb', () => {
  it('renders Breadcrumb component with children', () => {
    const breadcrumbItems = [
      { label: 'Item 1', href: '/item-1' },
      { label: 'Item 2', href: '/item-2' },
      { label: 'Item 3', href: '/item-3' },
    ]

    const { container } = render(
      <Breadcrumb>
        {breadcrumbItems.map((item, index) => (
          <Breadcrumb.Item key={index} href={item.href}>
            {item.label}
          </Breadcrumb.Item>
        ))}
      </Breadcrumb>,
    )

    const breadcrumb = screen.getByRole('navigation')
    const breadcrumbs = container.querySelectorAll('.amsterdam-breadcrumb-item')

    expect(breadcrumb).toBeInTheDocument()
    expect(breadcrumbs.length).toBe(3)
  })

  it('is able to pass a React ref', () => {
    const ref = createRef<HTMLElement>()

    const { container } = render(
      <Breadcrumb ref={ref}>
        <Breadcrumb.Item href="/item-1">Valid Item</Breadcrumb.Item>
      </Breadcrumb>,
    )

    const breadcrumb = container.querySelector(':only-child')

    expect(ref.current).toBe(breadcrumb)
  })
})

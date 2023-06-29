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
    const breadcrumbs = container.querySelectorAll('.amsterdam-breadcrumb-list li')

    expect(breadcrumb).toBeInTheDocument()
    expect(breadcrumbs.length).toBe(3)
  })

  it('should omit invalid children and logs warning', () => {
    const warnSpy = jest.spyOn(console, 'warn').mockImplementation(() => {})

    const { container } = render(
      <Breadcrumb>
        <Breadcrumb.Item href="/item-1">Valid Item</Breadcrumb.Item>
        <div>Invalid Item</div>
        <Breadcrumb.Item href="/item-2">Another Valid Item</Breadcrumb.Item>
      </Breadcrumb>,
    )

    const breadcrumbs = container.querySelectorAll('.amsterdam-breadcrumbs-list li')

    expect(warnSpy).toHaveBeenCalledTimes(1)
    expect(warnSpy).toHaveBeenCalledWith('Breadcrumb: div is not a valid child')
    expect(breadcrumbs.length).toBe(2)
  })

  it('limits the number of breadcrumb items to 8 when 10 items are provided', () => {
    const items = Array.from({ length: 10 }, (_, index) => ({
      label: `Item ${index + 1}`,
      href: `/item-${index + 1}`,
    }))

    const { container } = render(
      <Breadcrumb>
        {items.map(({ label, href }, index) => {
          return (
            <Breadcrumb.Item key={index} href={href}>
              {label}
            </Breadcrumb.Item>
          )
        })}
      </Breadcrumb>,
    )

    const breadcrumbItems = container.querySelectorAll('.amsterdam-breadcrumb-list li')

    expect(breadcrumbItems.length).toBe(8)
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

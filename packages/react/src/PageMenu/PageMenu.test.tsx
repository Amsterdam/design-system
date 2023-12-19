import { LoginIcon } from '@amsterdam/design-system-react-icons'
import { render } from '@testing-library/react'
import { createRef } from 'react'
import { PageMenu } from './PageMenu'
import '@testing-library/jest-dom'

describe('Page menu', () => {
  it('renders a page menu with children', () => {
    const { container } = render(
      <PageMenu>
        <PageMenu.Link href="#">English</PageMenu.Link>
        <PageMenu.Link href="#" icon={LoginIcon}>
          Inloggen Mijn Amsterdam
        </PageMenu.Link>
      </PageMenu>,
    )
    const component = container.querySelector(':only-child')
    const children = container.querySelectorAll('li')
    const icons = container.querySelectorAll('svg')
    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
    expect(children.length).toBe(3)
    expect(icons.length).toBe(2)
  })

  it('renders a design system BEM class name', () => {
    const { container } = render(<PageMenu />)
    const component = container.querySelector(':only-child')
    expect(component).toHaveClass('amsterdam-page-menu')
  })

  it('renders a class name for end alignment', () => {
    const { container } = render(<PageMenu alignEnd />)
    const component = container.querySelector(':only-child')
    expect(component).toHaveClass('amsterdam-page-menu--align-end')
  })

  it('is able to pass a React ref', () => {
    const ref = createRef<HTMLElement>()
    const { container } = render(
      <PageMenu ref={ref}>
        <PageMenu.Link href="#">English</PageMenu.Link>
      </PageMenu>,
    )
    const component = container.querySelector(':only-child')
    expect(ref.current).toBe(component)
  })

  it('renders an additional class name', () => {
    const { container } = render(<PageMenu className="intro" />)
    const component = container.querySelector(':only-child')
    expect(component).toHaveClass('intro')
    expect(component).toHaveClass('amsterdam-page-menu')
  })
})

import { Login, Menu } from '@amsterdam/design-system-react-icons'
import { render } from '@testing-library/react'
import { createRef } from 'react'
import { PageMenu } from './PageMenu'
import '@testing-library/jest-dom'
import { Icon } from '../Icon'

describe('page menu', () => {
  it('renders a page menu with children', () => {
    const { container } = render(
      <PageMenu>
        <PageMenu.Link href="#">English</PageMenu.Link>
        <PageMenu.Link href="#">
          Inloggen Mijn Amsterdam <Icon svg={Login} size="level-7" />
        </PageMenu.Link>
        <PageMenu.Button>
          Alle onderwerpen <Icon svg={Menu} size="level-7" />
        </PageMenu.Button>
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
})

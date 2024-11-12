import { CloseIcon } from '@amsterdam/design-system-react-icons'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { createRef } from 'react'
import { Button } from './Button'

describe('Button', () => {
  it('renders an element with role button', () => {
    render(<Button>Click me!</Button>)

    const button = screen.getByRole('button', {
      name: 'Click me!',
    })

    expect(button).toBeInTheDocument()
    expect(button).toBeVisible()
  })

  it('renders an additional class name', () => {
    render(<Button className="extra">Click me!</Button>)

    const button = screen.getByRole('button', {
      name: 'Click me!',
    })

    expect(button).toHaveClass('ams-button extra')
  })

  it('renders a default button with variant primary', () => {
    render(<Button>primary</Button>)

    const button = screen.getByRole('button', {
      name: 'primary',
    })

    expect(button).toBeInTheDocument()
    expect(button).toHaveAttribute('type', 'button')
    expect(button).toHaveClass('ams-button--primary')
  })

  it('renders a button with a specified variant', () => {
    render(
      <>
        <Button variant="primary">primary</Button>
        <Button variant="secondary">secondary</Button>
        <Button variant="tertiary">tertiary</Button>
      </>,
    )

    const buttonPrimary = screen.getByRole('button', {
      name: 'primary',
    })

    const buttonSecondary = screen.getByRole('button', {
      name: 'secondary',
    })

    const buttonTertiary = screen.getByRole('button', {
      name: 'tertiary',
    })

    expect(buttonPrimary).toBeInTheDocument()
    expect(buttonPrimary).toHaveClass('ams-button--primary')
    expect(buttonSecondary).toBeInTheDocument()
    expect(buttonSecondary).toHaveClass('ams-button--secondary')
    expect(buttonTertiary).toBeInTheDocument()
    expect(buttonTertiary).toHaveClass('ams-button--tertiary')
  })

  it('renders a disabled button with a specified variant', () => {
    render(
      <>
        <Button disabled variant="primary">
          primary
        </Button>
        <Button disabled variant="secondary">
          secondary
        </Button>
        <Button disabled variant="tertiary">
          tertiary
        </Button>
      </>,
    )

    const buttonPrimary = screen.getByRole('button', {
      name: 'primary',
    })

    const buttonSecondary = screen.getByRole('button', {
      name: 'secondary',
    })

    const buttonTertiary = screen.getByRole('button', {
      name: 'tertiary',
    })

    expect(buttonPrimary).toBeInTheDocument()
    expect(buttonPrimary).toBeDisabled()
    expect(buttonSecondary).toBeInTheDocument()
    expect(buttonSecondary).toBeDisabled()
    expect(buttonTertiary).toBeInTheDocument()
    expect(buttonTertiary).toBeDisabled()
  })

  it('is able to pass a React ref', () => {
    const ref = createRef<HTMLButtonElement>()

    const { container } = render(<Button ref={ref}>Click me!</Button>)

    const button = container.querySelector(':only-child')

    expect(ref.current).toBe(button)
  })

  it('renders a button with an icon at the end', () => {
    render(
      <Button icon={CloseIcon}>
        <span>Sluiten</span>
      </Button>,
    )

    const button = screen.getByRole('button', {
      name: 'Sluiten',
    })
    const icon = button.querySelector('.ams-icon:last-child')

    expect(button).toBeInTheDocument()
    expect(icon).toBeInTheDocument()
  })

  it('renders a button with an icon before the label', () => {
    render(
      <Button icon={CloseIcon} iconBefore>
        <span>Sluiten</span>
      </Button>,
    )

    const button = screen.getByRole('button', {
      name: 'Sluiten',
    })
    const icon = button.querySelector('.ams-icon:first-child')

    expect(button).toBeInTheDocument()
    expect(icon).toBeInTheDocument()
  })

  it('renders a button with an icon only', () => {
    render(
      <Button icon={CloseIcon} iconOnly variant="tertiary">
        Sluiten
      </Button>,
    )

    const button = screen.getByRole('button', {
      name: 'Sluiten',
    })
    const icon = button.querySelector('.ams-icon')
    const label = button.querySelector('.ams-visually-hidden')

    expect(button).toBeInTheDocument()
    expect(icon).toBeInTheDocument()
    expect(label).toBeInTheDocument()
  })
})

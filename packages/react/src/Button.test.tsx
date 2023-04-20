import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Button } from './Button'

describe('Button', () => {
  it('renders a button with role element', () => {
    render(<Button>Click me!</Button>)

    const button = screen.getByRole('button', {
      name: 'Click me!',
    })

    expect(button).toBeInTheDocument()
    expect(button).toBeVisible()
  })

  it('renders a default button with variant primary', () => {
    render(<Button>primary</Button>)

    const button = screen.getByRole('button', {
      name: 'primary',
    })

    expect(button).toBeInTheDocument()
    expect(button).toHaveAttribute('type', 'button')
    expect(button).toHaveClass('utrecht-button--primary-action')
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
    expect(buttonPrimary).toHaveClass('utrecht-button--primary-action')
    expect(buttonSecondary).toBeInTheDocument()
    expect(buttonSecondary).toHaveClass('utrecht-button--secondary-action')
    expect(buttonTertiary).toBeInTheDocument()
    expect(buttonTertiary).toHaveClass('utrecht-button--subtle')
  })

  it('renders a disbabled button with a specified variant', () => {
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
    expect(buttonPrimary).toHaveClass('utrecht-button--disabled utrecht-button--primary-action')
    expect(buttonPrimary).toHaveAttribute('aria-disabled', 'true')

    expect(buttonSecondary).toBeInTheDocument()
    expect(buttonSecondary).toHaveClass('utrecht-button--disabled utrecht-button--secondary-action')
    expect(buttonSecondary).toHaveAttribute('aria-disabled', 'true')

    expect(buttonTertiary).toBeInTheDocument()
    expect(buttonTertiary).toHaveClass('utrecht-button--disabled utrecht-button--subtle')
    expect(buttonTertiary).toHaveAttribute('aria-disabled', 'true')
  })
})

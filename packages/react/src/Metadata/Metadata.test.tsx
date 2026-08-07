/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { describe, expect, it } from 'vitest'

import { Metadata } from './Metadata'

describe('Metadata', () => {
  it('renders an HTML p element', () => {
    render(<Metadata />)

    const component = screen.getByRole('paragraph')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    render(<Metadata />)

    const component = screen.getByRole('paragraph')

    expect(component).toHaveClass('ams-metadata')
  })

  it('renders an extra class name', () => {
    render(<Metadata className="extra" />)

    const component = screen.getByRole('paragraph')

    expect(component).toHaveClass('ams-metadata extra')
  })

  it('is a regular metadata line without specifying props', () => {
    render(<Metadata />)

    const component = screen.getByRole('paragraph')

    expect(component).not.toHaveClass('ams-metadata--small')
    expect(component).not.toHaveClass('ams-metadata--inverse')
  })

  it('renders the small size class', () => {
    render(<Metadata size="small" />)

    const component = screen.getByRole('paragraph')

    expect(component).toHaveClass('ams-metadata--small')
  })

  it('renders the class name for inverse color', () => {
    render(<Metadata color="inverse" />)

    const component = screen.getByRole('paragraph')

    expect(component).toHaveClass('ams-metadata--inverse')
  })

  it('renders its items', () => {
    render(
      <Metadata>
        <Metadata.Item>
          <time dateTime="2026-01-01">1 januari 2026</time>
        </Metadata.Item>
        <Metadata.Item>Belastingen, Wonen, WOZ</Metadata.Item>
      </Metadata>,
    )

    const component = screen.getByRole('paragraph')

    expect(component.querySelectorAll('.ams-metadata__item')).toHaveLength(2)
    expect(screen.getByText('1 januari 2026')).toBeInTheDocument()
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLParagraphElement>()

    render(<Metadata ref={ref} />)

    const component = screen.getByRole('paragraph')

    expect(ref.current).toBe(component)
  })

  it('passes additional props', () => {
    render(<Metadata aria-hidden={false} data-test="data-test" id="id" />)

    const component = screen.getByRole('paragraph')

    expect(component).toHaveAttribute('aria-hidden', 'false')
    expect(component).toHaveAttribute('data-test', 'data-test')
    expect(component).toHaveAttribute('id', 'id')
  })
})

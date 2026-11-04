/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

import { FileList } from './FileList'

describe('FileList', () => {
  let warn: ReturnType<typeof vi.spyOn>

  beforeEach(() => {
    warn = vi.spyOn(console, 'warn').mockImplementation(() => {})
  })

  afterEach(() => {
    warn.mockRestore()
  })

  it('renders', () => {
    render(<FileList />)

    const component = screen.getByRole('list')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    render(<FileList />)

    const component = screen.getByRole('list')

    expect(component).toHaveClass('ams-file-list')
  })

  it('renders an extra class name', () => {
    render(<FileList className="extra" />)

    const component = screen.getByRole('list')

    expect(component).toHaveClass('ams-file-list extra')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLUListElement>()

    render(<FileList ref={ref} />)

    const component = screen.getByRole('list')

    expect(ref.current).toBe(component)
  })

  it('passes additional props', () => {
    render(<FileList aria-hidden="false" data-test="data-test" id="id" />)

    const component = screen.getByRole('list')

    expect(component).toHaveAttribute('aria-hidden', 'false')
    expect(component).toHaveAttribute('id', 'id')
    expect(component).toHaveAttribute('data-test', 'data-test')
  })

  it('warns that File List has been replaced', () => {
    render(<FileList />)

    expect(warn).toHaveBeenCalledTimes(1)
    expect(warn).toHaveBeenCalledWith(expect.stringContaining('@deprecated'))
    expect(warn).toHaveBeenCalledWith(
      expect.stringContaining('Wrap File Cards in an Unordered List without markers instead.'),
    )
  })

  it('does not warn again on rerender', () => {
    const { rerender } = render(<FileList />)

    warn.mockClear()
    rerender(<FileList className="extra" />)

    expect(warn).not.toHaveBeenCalled()
  })
})

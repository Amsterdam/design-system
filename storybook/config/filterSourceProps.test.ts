/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { describe, expect, it } from 'vitest'

import { filterSourceProps } from './filterSourceProps'

describe('filterSourceProps', () => {
  it('drops a prop that has no value', () => {
    expect(filterSourceProps(undefined, 'icon')).toBe(false)
  })

  it('drops a Boolean flag that is off by default', () => {
    expect(filterSourceProps(false, 'checked')).toBe(false)
    expect(filterSourceProps(false, 'disabled')).toBe(false)
    expect(filterSourceProps(false, 'indeterminate')).toBe(false)
    expect(filterSourceProps(false, 'invalid')).toBe(false)
  })

  it('keeps a Boolean flag that is on', () => {
    expect(filterSourceProps(true, 'disabled')).toBe(true)
  })

  it('keeps `false` on a prop that is on by default', () => {
    expect(filterSourceProps(false, 'markers')).toBe(true)
    expect(filterSourceProps(false, 'focusOnRender')).toBe(true)
  })

  it('keeps `false` on a prop the browser decides', () => {
    expect(filterSourceProps(false, 'spellCheck')).toBe(true)
  })

  it('drops an event handler', () => {
    expect(filterSourceProps(() => {}, 'onChange')).toBe(false)
    expect(filterSourceProps(() => {}, 'onClick')).toBe(false)
  })

  it('keeps a function that is not an event handler', () => {
    expect(filterSourceProps(() => {}, 'linkComponent')).toBe(true)
  })

  it('keeps a prop whose name merely starts with ‘on’', () => {
    expect(filterSourceProps(() => {}, 'once')).toBe(true)
  })

  it('keeps the values a story sets on purpose', () => {
    expect(filterSourceProps('secondary', 'variant')).toBe(true)
    expect(filterSourceProps(2, 'headingLevel')).toBe(true)
    expect(filterSourceProps('', 'label')).toBe(true)
  })
})

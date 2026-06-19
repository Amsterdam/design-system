/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { ChevronDownIcon } from '@amsterdam/design-system-react-icons'
import { describe, expect, it } from 'vitest'

import { buildComponentProps } from './buildComponentProps'

const baseParams = {
  args: { label: 'Click' },
  hasIcon: null,
  propName: 'color',
  size: undefined,
  sizePropName: 'size',
  state: 'default',
  variant: 'primary',
}

describe('buildComponentProps', () => {
  it('spreads args and sets the variant on the target prop', () => {
    expect(buildComponentProps(baseParams)).toMatchObject({ color: 'primary', label: 'Click' })
  })

  it('adds the hover class when state is hovered', () => {
    expect(buildComponentProps({ ...baseParams, state: 'hovered' }).className).toBe('hover')
  })

  it('sets the disabled flag when state is disabled', () => {
    expect(buildComponentProps({ ...baseParams, state: 'disabled' })).toMatchObject({ disabled: true })
  })

  it('applies the inverse background helper for the inverse variant', () => {
    expect(buildComponentProps({ ...baseParams, variant: 'inverse' }).className).toBe('_ams-page-background--dark')
  })

  it('does not apply the inverse background helper when disabled', () => {
    expect(buildComponentProps({ ...baseParams, state: 'disabled', variant: 'inverse' }).className).toBe('')
  })

  it('routes the size value via the size prop and keeps it separate from the variant prop', () => {
    const result = buildComponentProps({
      ...baseParams,
      propName: 'color',
      size: 'large',
      sizePropName: 'size',
      variant: 'primary',
    })
    expect(result).toMatchObject({ color: 'primary', size: 'large' })
  })

  it('does not assign the variant to the size prop when they coincide', () => {
    const result = buildComponentProps({
      ...baseParams,
      propName: 'size',
      size: 'large',
      sizePropName: 'size',
      variant: 'large',
    })
    expect(result).toEqual({
      ...baseParams.args,
      className: '',
      size: 'large',
    })
  })

  it('spreads the icon fixture when present', () => {
    const result = buildComponentProps({
      ...baseParams,
      hasIcon: { icon: ChevronDownIcon },
      propName: 'iconBefore',
      variant: true,
    })
    expect(result).toMatchObject({ icon: ChevronDownIcon, iconBefore: true })
  })

  it('omits accessibleName and accessibleNameId when the flags are not set', () => {
    const result = buildComponentProps(baseParams)
    expect(result).not.toHaveProperty('accessibleName')
    expect(result).not.toHaveProperty('accessibleNameId')
  })

  it('injects a unique accessibleName derived from the variant when the flag is set', () => {
    const result = buildComponentProps({ ...baseParams, acceptsAccessibleName: true })
    expect(result).toMatchObject({ accessibleName: 'none-color-primary-default' })
  })

  it('injects a unique accessibleNameId derived from the variant when the flag is set', () => {
    const result = buildComponentProps({ ...baseParams, acceptsAccessibleNameId: true })
    expect(result).toMatchObject({ accessibleNameId: 'variant-none-color-primary-default' })
  })
})

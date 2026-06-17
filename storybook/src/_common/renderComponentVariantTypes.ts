/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { IconProps } from '@amsterdam/design-system-react'
import type { Meta } from '@storybook/react-vite'

export type VariantValue = string | number | boolean | IconProps['svg']

export type PropWithValues = {
  hasIcon: { icon: IconProps['svg'] } | null
  name: string
  values: VariantValue[]
}

export type renderComponentVariantsParams = {
  args: Meta['args']
  layout?: 'flex' | 'grid'
  variants?: string[]
}

export type BuildComponentPropsParams = {
  acceptsAccessibleName: boolean
  acceptsAccessibleNameId: boolean
  args: Meta['args']
  hasIcon?: { icon: IconProps['svg'] } | null
  propName: string
  size?: string | undefined
  sizePropName: string
  state: string
  variant: VariantValue
}

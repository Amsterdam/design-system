import type { Meta } from '@storybook/react-vite'
import type { JSX, ReactNode, SVGProps } from 'react'

export type renderComponentVariantsParams = {
  args: Meta['args'] // Storybook args applied to every instance
  children?: ReactNode // Optional children passed into the component
  layout?: 'flex' | 'grid' // The component to generate variants for
  variants?: string[] // Extra "states" (e.g. disabled, hovered)
}

export type PropType = {
  defaultValue?: { value: string }
  description?: string
  name: string
  required?: boolean
  type?: {
    name: string
    value: {
      value: string
    }[]
  }
}

export type DocgenInfo = {
  props?: Record<string, PropType>
}

export type PropWithValues = {
  name: string
  propType: string | undefined
  values: any
}

export type PropsWithValues = {
  hasIcon?: {
    icon: (props: SVGProps<SVGSVGElement>) => JSX.Element
  } | null
  name: string
  values: boolean[] | any
}

export type BuildComponentPropsParams = {
  args: Record<string, any> | undefined
  children?: ReactNode
  hasIcon?: { icon: any } | null
  propName: string
  size: string | undefined
  sizePropName: string | string[]
  state: string
  variant: string
}

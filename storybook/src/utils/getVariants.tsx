import type { Meta } from '@storybook/react-vite'

import { ChevronDownIcon } from '@amsterdam/design-system-react-icons/src'
import React from 'react'

type GetVariantsParams = {
  args: Meta['args']
  component: React.ElementType
  variants: string[]
}

type PropType = {
  name: string
  type?: {
    name: string
    value: {
      value: string
    }[]
  }
}

type DocgenInfo = {
  props?: Record<
    string,
    {
      defaultValue?: { value: string }
      description?: string
      required?: boolean
      type?: { name: string }
    }
  >
}

function getDocgenInfo(component: React.ElementType): DocgenInfo | null {
  for (const [key, value] of Object.entries(component)) {
    if (key === '__docgenInfo') {
      return value
    }
  }

  return null
}

export const getVariants = ({ component, args, variants = ['default', 'hovered'] }: GetVariantsParams) => {
  const docInfo = getDocgenInfo(component)
  const props = docInfo?.props ?? {}

  function getValues(prop: PropType) {
    if (!prop.type) return undefined

    switch (prop.type.name) {
      case 'boolean':
        return [true, false]
      case 'heading':
        return ['Kapers aan de poort, kanonskogels op de Dam: de aanval op Amsterdam']
      default:
        return prop.type.value?.map((variant) => variant.value.replace(/"/g, ''))
    }
  }

  const propsAndValues = Object.values(props as Record<string, PropType>).map((prop) => ({
    name: prop.name,
    propType: prop.type?.name,
    values: getValues(prop),
  }))

  const completePropsWithValues = propsAndValues.map(({ name, propType, values }) => {
    const hasIcon = { icon: ChevronDownIcon }
    const propDefaults = new Map([
      ['color', { hasIcon: null, name: 'color', values: [...(values ?? []), 'default'] }],
      ['icon', { hasIcon: null, name: 'icon', values: [ChevronDownIcon] }],
      ['iconBefore', { hasIcon, name: 'iconBefore', values: [true] }],
      ['iconOnly', { hasIcon, name: 'iconOnly', values: [true] }],
      [
        'imageSrc',
        {
          hasIcon: null,
          name: 'imageSrc',
          values: [
            'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Okonjima_Lioness.jpg/500px-Okonjima_Lioness.jpg',
          ],
        },
      ],
    ])

    const staticDefault = propDefaults.get(name)
    if (staticDefault) return staticDefault

    if (propType === 'number') {
      return { hasIcon: null, name, values: [42] }
    }

    if (propType === 'string' || propType === 'string | number') {
      return { hasIcon: null, name, values: ['14 kades en bruggen hersteld in 2023'] }
    }

    return { hasIcon: null, name, values }
  })

  const sizes = {
    sizeName: completePropsWithValues.find((prop) => prop.name === 'size')?.name || [],
    sizes: completePropsWithValues.find((prop) => prop.name === 'size')?.values || [],
  }

  const sizeArray = sizes.sizes && sizes.sizes.length > 0 ? sizes.sizes : [undefined]

  if (completePropsWithValues.length === 0) {
    const elements = variants.map((state) => (
      <div key={state}>
        {React.createElement(component, {
          ...args,
          ...(state === 'disabled' ? { [state]: true } : {}),
          className: state === 'hovered' ? 'hover' : undefined,
        })}
      </div>
    ))

    return <div>{elements}</div>
  }

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
      {completePropsWithValues
        .filter(({ name }) => name !== sizes.sizeName)
        .flatMap(({ hasIcon, name, values }) => {
          return sizeArray.flatMap((size) =>
            variants.flatMap((state) =>
              (values ?? []).flatMap((variant) => {
                const key = `${size}${name}${variant}${state}`
                return (
                  <div key={key}>
                    {React.createElement(component, {
                      ...args,
                      ...((state === 'disabled' && { [state]: true }) || {}),
                      ...(hasIcon ?? {}),
                      ...((typeof sizes.sizeName === 'string' && { [sizes.sizeName]: size }) || {}),
                      className: state === 'hovered' ? 'hover' : undefined,
                      style: variant === 'inverse' ? { backgroundColor: 'var(--ams-color-highlight-azure)' } : {},
                      ...((name !== sizes.sizeName && { [name]: variant }) || {}),
                    })}
                  </div>
                )
              }),
            ),
          )
        })}
    </div>
  )
}

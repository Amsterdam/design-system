import type { Meta } from '@storybook/react-vite'
import type { ElementType, ReactNode } from 'react'

import { ChevronDownIcon } from '@amsterdam/design-system-react-icons/src'
import { createElement } from 'react'

type renderComponentVariantsParams = {
  args: Meta['args'] // Storybook args applied to every instance
  children?: ReactNode // Optional children passed into the component
  layout?: 'flex' | 'grid' // The component to generate variants for
  variants?: string[] // Extra "states" (e.g. disabled, hovered)
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

/**
 * Reads React Docgen info from the component.
 * Storybook uses docgen to infer props from components.
 * This function scans for a special "__docgenInfo" property
 * and returns its props definition.
 */
function getDocgenInfo(component: ElementType): DocgenInfo | null {
  for (const [key, value] of Object.entries(component)) {
    if (key === '__docgenInfo') {
      return value
    }
  }

  return null
}

/**
 * Main function: generates all possible combinations ("variants")
 * of a component's props + states (hovered, disabled, etc.).
 *
 * This helps avoid writing a Storybook story for every prop combination,
 * while still allowing Chromatic to capture screenshots for each.
 */
export const renderComponentVariants = (
  component: ElementType,
  { args, children, layout = 'flex', variants = [] }: renderComponentVariantsParams,
) => {
  // 1. Extract props from docgen metadata
  const docInfo = getDocgenInfo(component)
  const props = docInfo?.props ?? {}

  // Always include a "default" variant
  variants?.push('default')

  /**
   * Maps prop types to possible values.
   * This is heuristic-based and incomplete, but covers common prop types.
   */
  function getValues(prop: PropType) {
    if (!prop.type) return undefined

    switch (prop.type.name) {
      case 'boolean':
        return [true, false] // Generate both true/false cases
      case 'heading':
        return ['Kapers aan de poort, kanonskogels op de Dam: de aanval op Amsterdam']
      default:
        // Handles union types (e.g. "color" | "inverse")
        return prop.type.value?.map((variant) => variant.value.replace(/"/g, ''))
    }
  }

  // Build a list of props and their possible values
  const propsAndValues = Object.values(props as Record<string, PropType>).map((prop) => ({
    name: prop.name,
    propType: prop.type?.name,
    values: getValues(prop),
  }))

  /**
   * Add special handling for some props that need specific defaults.
   * For example, "iconOnly" needs an icon present, so we inject one.
   */
  const completePropsWithValues = propsAndValues.map(({ name, propType, values }) => {
    const hasIcon = { icon: ChevronDownIcon }

    // Central mapping of special-case props → default test values
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
          values: ['https://picsum.photos/id/64/128/128'],
        },
        {
          hasIcon: null,
          name: 'imageSrc',
          values: ['https://picsum.photos/id/64/128/64'],
        },
        {
          hasIcon: null,
          name: 'imageSrc',
          values: ['https://picsum.photos/id/64/16/16'],
        },
      ],
    ])

    // If prop has a static default defined above, use it
    const staticDefault = propDefaults.get(name)
    if (staticDefault) return staticDefault

    // Handle common primitive types with example values
    if (propType === 'number') {
      return { hasIcon: null, name, values: [42] }
    }

    if (propType === 'string' || propType === 'string | number') {
      return { hasIcon: null, name, values: ['14 kades en bruggen hersteld in 2023'] }
    }

    // Fall back to whatever docgen gave us
    return { hasIcon: null, name, values }
  })

  // Extract size-related props (special handling, often a theme scale)
  const sizes = {
    sizeName: completePropsWithValues.find((prop) => prop.name === 'size')?.name || [],
    sizes: completePropsWithValues.find((prop) => prop.name === 'size')?.values || [],
  }

  // If no size values are defined, use [undefined] so map still runs
  const sizeArray = sizes.sizes && sizes.sizes.length > 0 ? sizes.sizes : [undefined]

  /**
   * Case 1: Component has no props with values.
   * Just render one version for each variant (default, hovered, disabled, etc.).
   */
  if (completePropsWithValues.length === 0) {
    const elements = variants.map((state) => (
      <div key={state}>
        {createElement(component, {
          ...args,
          ...(state === 'disabled' ? { [state]: true } : {}),
          className: state === 'hovered' ? 'hover' : undefined,
        })}
      </div>
    ))

    return <div>{elements}</div>
  }

  /**
   * Case 2: Component has props with multiple values.
   * Render a grid/flex layout containing all combinations of:
   * - size (if present)
   * - prop values (color, icon, etc.)
   * - state (hovered, disabled, etc.)
   */
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--ams-space-s)' }}>
      {completePropsWithValues
        // Skip the "size" prop here, we handle it separately via sizeArray
        .filter(({ name }) => name !== sizes.sizeName)
        .flatMap(({ hasIcon, name, values }) => {
          return sizeArray.flatMap((size) =>
            variants.flatMap((state) =>
              (values ?? []).flatMap((variant) => {
                const key = `${size}${name}${variant}${state}`

                return (
                  <div
                    key={key}
                    style={
                      layout === 'flex'
                        ? undefined
                        : {
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                            minHeight: '100px',
                          }
                    }
                  >
                    {createElement(component, {
                      ...args,
                      ...(children ? { children } : {}),
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

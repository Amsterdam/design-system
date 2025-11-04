import type { ElementType, JSX, SVGProps } from 'react'

import { ChevronDownIcon } from '@amsterdam/design-system-react-icons'

import type {
  BuildComponentPropsParams,
  CompletePropsWithValues,
  DocgenInfo,
  PropType,
  PropWithValues,
} from './componentVariantTypes'

/**
 * Reads React Docgen info from the component.
 * Storybook uses docgen to infer props from components.
 * This function scans for a special "__docgenInfo" property
 * and returns its props definition.
 */
export function getDocgenInfo(component: ElementType): DocgenInfo | null {
  for (const [key, value] of Object.entries(component)) {
    if (key === '__docgenInfo') {
      return value
    }
  }

  return null
}

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
export function extractPropsWithValues(props: DocgenInfo['props']): PropWithValues[] {
  if (!props) return []

  return Object.values(props).map((prop) => ({
    name: prop.name,
    propType: prop.type?.name,
    values: getValues(prop) ?? [],
  }))
}

/**
 * Enriches props with default test values for special cases and common types.
 *
 * Adds specific defaults for props like icon, color, imageSrc, etc.
 * Also provides fallback values for common primitive types (string, number).
 */
export function completePropsWithDefaults(propsAndValues: PropWithValues[]) {
  return propsAndValues.map(({ name, propType, values }) => {
    const hasIcon = { icon: ChevronDownIcon }

    // Central mapping of special-case props → default test values
    const propDefaults = new Map([
      ['color', { hasIcon: null, name: 'color', values: [...(values as string[]), 'default'] }],
      ['icon', { hasIcon: null, name: 'icon', values: [ChevronDownIcon] }],
      ['iconBefore', { hasIcon, name: 'iconBefore', values: [true] }],
      ['iconOnly', { hasIcon, name: 'iconOnly', values: [true] }],
      [
        'imageSrc',
        {
          hasIcon: null,
          name: 'imageSrc',
          values: ['https://picsum.photos/id/122/1280/720'],
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
}

/**
 * Extracts a specific prop and its values from the completed props array.
 * If the prop doesn't exist or has no values, returns a default array with [undefined]
 * so that subsequent .map() operations still execute at least once.
 *
 * @param completePropsWithValues - Array of enriched props
 * @param propName - Name of the prop to extract
 * @returns Object with propName and values array
 */
export function extractPropValues(completePropsWithValues: CompletePropsWithValues, propName: string) {
  const prop = completePropsWithValues.find((p) => p.name === propName)

  return {
    propName: prop?.name || propName,
    values: (prop?.values && prop.values.length > 0 ? prop.values : [undefined]) as (
      | string
      | boolean
      | ((props: SVGProps<SVGSVGElement>) => JSX.Element)
      | undefined
    )[],
  }
}

/**
 * Creates props object for a component based on state, size, variant, etc.
 * Handles special cases like disabled state, hover class, inverse backgrounds.
 */
export function buildComponentProps({
  args,
  hasIcon,
  propName,
  size,
  sizePropName,
  state,
  variant,
}: BuildComponentPropsParams) {
  return {
    ...args,
    ...(state === 'disabled' && { [state]: true }),
    ...(hasIcon ?? {}),
    ...(typeof sizePropName === 'string' && { [sizePropName]: size }),
    className: state === 'hovered' ? 'hover' : undefined,
    style:
      typeof variant === 'string' && variant === 'inverse' && state !== 'disabled'
        ? { backgroundColor: 'var(--ams-color-highlight-azure)' }
        : {},
    ...(propName !== sizePropName && { [propName]: variant }),
  }
}

/**
 * Generates a unique key for component variants
 */
export function generateVariantKey(size: string, propName: string, variant: string, state: string) {
  return `${size}${propName}${variant}${state}`
}

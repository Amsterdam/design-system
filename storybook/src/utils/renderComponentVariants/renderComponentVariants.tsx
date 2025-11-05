/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { ElementType } from 'react'

import { createElement } from 'react'

import type { renderComponentVariantsParams } from './componentVariantTypes'

import {
  buildComponentProps,
  completePropsWithDefaults,
  extractPropsWithValues,
  extractPropValues,
  getDocgenInfo,
} from './componentVariantUtils'

/**
 * Main function: generates all possible combinations ("variants")
 * of a component's props + states (hovered, disabled, etc.).
 *
 * This helps avoid writing a Storybook story for every prop combination,
 * while still allowing Chromatic to capture screenshots for each.
 */
export const renderComponentVariants = (
  component: ElementType,
  { args, layout = 'flex', variants = [] }: renderComponentVariantsParams,
) => {
  // Extract props from docgen metadata
  const props = getDocgenInfo(component)?.props

  // Always include a "default" variant
  const allVariants = [...(variants || []), 'default']

  // Build a list of props and their possible values
  const propsAndValues = extractPropsWithValues(props)

  // Fill the props with example data
  const completePropsWithValues = completePropsWithDefaults(propsAndValues)

  // Extract sizes, so we can run over them separately, we we want to test the combination of the props with sizes
  const sizes = extractPropValues(completePropsWithValues, 'size')

  /**
   * Case 1: Component has no props with values.
   * Just render one version for each variant (default, hovered, disabled, etc.).
   */
  if (completePropsWithValues.length === 0) {
    const elements = allVariants.map((state) => (
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
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--ams-space-l)' }}>
      {completePropsWithValues
        // Skip the "size" prop here, we handle it separately via sizeArray
        .filter(({ name }) => name !== sizes.propName)
        .flatMap(({ hasIcon, name, values }) => {
          return sizes.values.map((size) =>
            allVariants.flatMap((state) =>
              (values ?? []).flatMap((variant) => {
                const key = `${size ?? 'none'}-${name}-${String(variant)}-${state}`

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
                    {createElement(
                      component,
                      buildComponentProps({
                        args,
                        hasIcon,
                        propName: name,
                        size: typeof size === 'string' ? size : undefined,
                        sizePropName: sizes.propName,
                        state,
                        variant,
                      }),
                    )}
                  </div>
                )
              }),
            ),
          )
        })}
    </div>
  )
}

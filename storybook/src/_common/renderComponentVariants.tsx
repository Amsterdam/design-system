/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { StoryContext } from '@storybook/react-vite'
import type { ElementType } from 'react'

import { createElement } from 'react'

import type { PropWithValues, renderComponentVariantsParams, VariantValue } from './renderComponentVariantTypes'

import { buildComponentProps } from './buildComponentProps'
import { extractVariantsFromArgTypes } from './extractVariantsFromArgTypes'

const extractSize = (propsWithValues: PropWithValues[]): { propName: string; values: (string | undefined)[] } => {
  const sizeProp = propsWithValues.find((prop) => prop.name === 'size')
  if (!sizeProp || sizeProp.values.length === 0) {
    return { propName: 'size', values: [undefined] }
  }
  return {
    propName: 'size',
    values: sizeProp.values.map((value) => (typeof value === 'string' ? value : undefined)),
  }
}

/**
 * Renders all combinations of a component's prop values × variant states
 * (hovered, disabled, ...). Used by *.test.stories.tsx for Chromatic
 * visual diffing.
 *
 * Prop values come from `context.argTypes` — Storybook's normalized
 * manifest, populated by whichever docgen analyzer is configured.
 */
export const renderComponentVariants = (
  component: ElementType,
  { args, layout = 'flex', variants = [] }: renderComponentVariantsParams,
  context: StoryContext,
) => {
  const propsWithValues = extractVariantsFromArgTypes(context.argTypes)
  const allVariants = [...variants, 'default']
  const sizes = extractSize(propsWithValues)
  const acceptsAccessibleName = 'accessibleName' in context.argTypes
  const acceptsAccessibleNameId = 'accessibleNameId' in context.argTypes

  if (propsWithValues.length === 0) {
    return (
      <div>
        {allVariants.map((state) => (
          <div key={state}>
            {createElement(component, {
              ...args,
              ...(state === 'disabled' ? { disabled: true } : {}),
              ...(acceptsAccessibleName && { accessibleName: state }),
              ...(acceptsAccessibleNameId && { accessibleNameId: `variant-${state}` }),
              className: state === 'hovered' ? 'hover' : undefined,
            })}
          </div>
        ))}
      </div>
    )
  }

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--ams-space-l)' }}>
      {propsWithValues
        .filter(({ name }) => name !== sizes.propName)
        .flatMap(({ hasIcon, name, values }) =>
          sizes.values.flatMap((size) =>
            allVariants.flatMap((state) =>
              values.map((variant: VariantValue) => {
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
                        acceptsAccessibleName,
                        acceptsAccessibleNameId,
                        args,
                        hasIcon,
                        propName: name,
                        size,
                        sizePropName: sizes.propName,
                        state,
                        variant,
                      }),
                    )}
                  </div>
                )
              }),
            ),
          ),
        )}
    </div>
  )
}

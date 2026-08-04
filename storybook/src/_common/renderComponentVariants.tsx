/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { StoryContext } from '@storybook/react-vite'
import type { CSSProperties, ElementType } from 'react'

import { createElement } from 'react'

import type { renderComponentVariantsParams } from './renderComponentVariantTypes'

import { buildComponentProps, variantKeyFor } from './buildComponentProps'
import { buildVariantMatrix, SIZE_PROP_NAME } from './buildVariantMatrix'

const gridCell: CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
  minHeight: '100px',
}

const propAxisRow: CSSProperties = { display: 'flex', flexWrap: 'wrap', gap: 'var(--ams-space-l)' }

/**
 * Renders a component in every configuration worth a snapshot: its prop values in
 * every size, in every state (hovered, disabled, ...). Used by *.test.stories.tsx
 * for Chromatic visual diffing.
 *
 * Prop values come from `context.argTypes` — Storybook's normalized
 * manifest, populated by whichever docgen analyzer is configured.
 * buildVariantMatrix turns those into the cells to render, and owns which
 * combinations those are. A component with nothing to vary yields its states
 * alone, which stack instead of flowing in a row because each takes the full width.
 */
export const renderComponentVariants = (
  component: ElementType,
  { args, layout = 'flex', variants = [] }: renderComponentVariantsParams,
  context: StoryContext,
) => {
  const matrix = buildVariantMatrix(context.argTypes, { args, variants })
  const acceptsAccessibleName = 'accessibleName' in context.argTypes
  const acceptsAccessibleNameId = 'accessibleNameId' in context.argTypes
  const hasPropAxis = matrix.some(({ propName }) => propName)

  return (
    <div style={hasPropAxis ? propAxisRow : undefined}>
      {matrix.map((entry) => (
        <div key={variantKeyFor(entry)} style={layout === 'flex' ? undefined : gridCell}>
          {createElement(
            component,
            buildComponentProps({
              ...entry,
              acceptsAccessibleName,
              acceptsAccessibleNameId,
              args,
              sizePropName: SIZE_PROP_NAME,
            }),
          )}
        </div>
      ))}
    </div>
  )
}

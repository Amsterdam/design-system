/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

import { clsx } from 'clsx'
import { forwardRef } from 'react'

type HintAndOptionalProps = {
  /** Show a custom hint text. */
  readonly hint?: string
  readonly inFieldSet?: boolean // Setting a description here will show it for the Label and FieldSet components in Storybook, which we do not want.
  /** Appends the text '(niet verplicht)' to the label or legend if no hint is provided. Use when the associated inputs are optional. */
  readonly optional?: boolean
}

const getHintText = ({ hint, optional }: HintAndOptionalProps) => {
  if (hint) {
    return hint
  } else if (optional) {
    return 'niet verplicht'
  }

  return null
}

export type HintProps = Readonly<HintAndOptionalProps> & Readonly<PropsWithChildren<HTMLAttributes<HTMLElement>>>

/**
 * Optional hint text or an 'optional' indicator associated with a form field.
 *
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-forms-label--docs Label docs at Amsterdam Design System}
 */
export const Hint = forwardRef(
  ({ className, hint, inFieldSet, optional, ...restProps }: HintProps, ref: ForwardedRef<HTMLElement>) => {
    const hintText = getHintText({ hint, optional })

    return (
      hintText && (
        <span {...restProps} className={clsx('ams-hint', inFieldSet && 'ams-hint--in-fieldset', className)} ref={ref}>
          ({hintText})
        </span>
      )
    )
  },
)

Hint.displayName = 'Hint'

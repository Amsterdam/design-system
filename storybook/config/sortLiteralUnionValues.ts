/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { ArgTypesEnhancer, StrictInputType } from 'storybook/internal/types'

const compareNumbers = (a: unknown, b: unknown) => Number(a) - Number(b)

const isNumeric = (value: unknown): boolean =>
  (typeof value === 'number' || (typeof value === 'string' && value.trim() !== '')) && !Number.isNaN(Number(value))

const unquote = (value: string) => value.replace(/"/g, '')

/** Reorders the values of an `a | b | c` type text, numerically or following the control’s options. */
const sortUnionText = (text: string, options?: readonly unknown[]) => {
  if (!text.includes(' | ')) {
    return text
  }

  const parts = text.split(' | ')

  if (parts.every(isNumeric)) {
    return [...parts].sort(compareNumbers).join(' | ')
  }

  const optionValues = options?.filter((option) => option !== undefined).map(String)

  if (optionValues && parts.every((part) => optionValues.includes(unquote(part)))) {
    return [...parts].sort((a, b) => optionValues.indexOf(unquote(a)) - optionValues.indexOf(unquote(b))).join(' | ')
  }

  return text
}

const sortArgType = (argType: StrictInputType): StrictInputType => {
  const sorted = { ...argType }

  if (Array.isArray(sorted.options) && sorted.options.length > 0 && sorted.options.every(isNumeric)) {
    sorted.options = [...sorted.options].sort(compareNumbers)
  }

  if (
    typeof sorted.type === 'object' &&
    sorted.type?.name === 'enum' &&
    Array.isArray(sorted.type.value) &&
    sorted.type.value.every(isNumeric)
  ) {
    sorted.type = { ...sorted.type, value: [...sorted.type.value].sort(compareNumbers) }
  }

  const { detail, summary } = sorted.table?.type ?? {}

  if (typeof summary === 'string' || typeof detail === 'string') {
    sorted.table = {
      ...sorted.table,
      type: {
        ...sorted.table?.type,
        ...(typeof summary === 'string' && { summary: sortUnionText(summary, sorted.options) }),
        ...(typeof detail === 'string' && { detail: sortUnionText(detail, sorted.options) }),
      },
    }
  }

  return sorted
}

/**
 * TypeScript interns the members of literal union types in the order it first encounters them
 * anywhere in the program, so docgen may describe a prop typed `1 | 2 | 3 | 4` as `3 | 1 | 2 | 4`.
 * Restore a natural order everywhere the controls tables show these values: numerically for
 * numeric unions, and following the control’s options for unions whose values are all offered.
 */
export const sortLiteralUnionValues: ArgTypesEnhancer = ({ argTypes }) =>
  Object.fromEntries(Object.entries(argTypes).map(([name, argType]) => [name, sortArgType(argType)]))

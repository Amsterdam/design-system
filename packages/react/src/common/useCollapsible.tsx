/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { useEffect, useRef, useState } from 'react'

type UseCollapsibleProps = {
  /**
   * The uncontrolled initial value. Read only when the component mounts, so later changes are ignored.
   * Overridden by `value` when the component is controlled.
   */
  defaultValue?: boolean
  /** The value to fall back to when neither `value` nor `defaultValue` is provided. */
  fallback?: boolean
  /**
   * Whether the collapsible behaviour is active at all. When `false`, the state is inert:
   * `value` no longer affects the returned state and `toggle` does nothing. Defaults to `true`.
   */
  gate?: boolean
  /** Fired on every toggle with the next value. Fires in both controlled and uncontrolled modes. */
  onToggle?: (next: boolean) => void
  /** The controlled value. When provided (and `gate` is `true`), the component is controlled. */
  value?: boolean
}

/**
 * Drives the shared controlled/uncontrolled behaviour of a collapsible component.
 *
 * Pass `value` to control the component from a parent; leave it undefined to let the component
 * hold its own state, seeded once by `defaultValue` (or `fallback`). `onToggle` always fires with
 * the next value, so a controlled parent can update `value` and an uncontrolled consumer can observe
 * changes. The internal state is only mutated when uncontrolled, so the two modes never fight.
 *
 * @returns A tuple of the current value, a toggle function, and whether the component is controlled.
 */
export const useCollapsible = ({
  defaultValue,
  fallback = false,
  gate = true,
  onToggle,
  value,
}: UseCollapsibleProps): readonly [boolean, () => void, boolean] => {
  const isControlled = gate && value !== undefined
  const [internalValue, setInternalValue] = useState(defaultValue ?? fallback)
  const current = isControlled ? (value as boolean) : internalValue

  // Warn once when the component flips between controlled and uncontrolled, mirroring React’s own
  // guardrail for form inputs. Track the presence of `value` rather than `isControlled` so a change
  // in `gate` alone (which the consumer does not choose per render) never trips the warning.
  const isValueProvided = value !== undefined
  const wasValueProvidedRef = useRef(isValueProvided)
  useEffect(() => {
    if (wasValueProvidedRef.current !== isValueProvided) {
      console.warn(
        `A collapsible component is changing from ${
          wasValueProvidedRef.current ? 'controlled to uncontrolled' : 'uncontrolled to controlled'
        }. Decide for its lifetime: pass a value for controlled, or leave it undefined for uncontrolled.`,
      )
      wasValueProvidedRef.current = isValueProvided
    }
  }, [isValueProvided])

  const toggle = () => {
    if (!gate) return

    const next = !current
    // Only mutate internal state when uncontrolled; a controlled parent owns the value.
    if (!isControlled) setInternalValue(next)
    onToggle?.(next)
  }

  return [current, toggle, isControlled] as const
}

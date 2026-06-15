/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

/**
 * Replaces the global Date constructor with a Proxy that returns a fixed date
 * when called with no arguments. Returns a cleanup function that restores the real Date.
 * Use in a story's `beforeEach` to keep Chromatic snapshots stable across days.
 */
export const mockDate = (date: Date): (() => void) => {
  const RealDate = Date

  const fixedMs = date.getTime()

  const MockDate = new Proxy(RealDate, {
    apply: () => new RealDate(fixedMs).toString(),
    construct: (_target, args) => (args.length === 0 ? new RealDate(fixedMs) : Reflect.construct(RealDate, args)),
    get: (target, prop) => (prop === 'now' ? () => fixedMs : target[prop as keyof typeof RealDate]),
  })

  Object.defineProperty(globalThis, 'Date', { configurable: true, value: MockDate, writable: true })

  return () => {
    Object.defineProperty(globalThis, 'Date', { configurable: true, value: RealDate, writable: true })
  }
}

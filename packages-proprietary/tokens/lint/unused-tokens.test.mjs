/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { describe, expect, it } from 'vitest'

import {
  collectLoopValues,
  findUnusedTokens,
  getLiteralPrefix,
  isCoveredByNarrowed,
  readBuiltTokens,
  readReferences,
} from './unused-tokens.mjs'

describe('readBuiltTokens', () => {
  it('reads the tokens a built file declares', () => {
    const { defined } = readBuiltTokens(':root { --ams-a-color: #fff; --ams-b-color: #000; }')

    expect([...defined]).toEqual(['--ams-a-color', '--ams-b-color'])
  })

  it('reads a token that another token refers to, which outputReferences puts in the built value', () => {
    const { referenced } = readBuiltTokens(':root { --ams-b-color: var(--ams-a-color); }')

    expect([...referenced]).toEqual(['--ams-a-color'])
  })

  it('ignores a custom property outside the token namespace', () => {
    const { defined } = readBuiltTokens(':root { --other-color: #fff; }')

    expect(defined.size).toBe(0)
  })

  it('reads a declaration whose value holds a semicolon, as a data URI does', () => {
    const css = `:root { --ams-a-background-image: url("data:image/svg+xml;utf8,<svg/>"); --ams-b-color: #000; }`

    expect([...readBuiltTokens(css).defined]).toEqual(['--ams-a-background-image', '--ams-b-color'])
  })

  it('reads the tokens declared under every selector, since each build output uses its own', () => {
    const { defined } = readBuiltTokens(':root { --ams-a-color: #fff; } .ams-theme { --ams-b-color: #000; }')

    expect([...defined]).toEqual(['--ams-a-color', '--ams-b-color'])
  })
})

describe('collectLoopValues', () => {
  it('collects the values of a quoted list', () => {
    expect(collectLoopValues('@each $size in ("xs", "s", "m") {}').get('size')).toEqual(new Set(['m', 's', 'xs']))
  })

  it('collects the values of an unquoted list', () => {
    expect(collectLoopValues('@each $size in (xs, s) {}').get('size')).toEqual(new Set(['s', 'xs']))
  })

  it('collects the values of every loop that shares a variable, so no reference is missed', () => {
    const source = '@each $size in ("xs") {} @each $size in ("xl") {}'

    expect(collectLoopValues(source).get('size')).toEqual(new Set(['xl', 'xs']))
  })

  it('returns nothing for a stylesheet without a loop', () => {
    expect(collectLoopValues('.a { gap: var(--ams-space-m); }').size).toBe(0)
  })
})

describe('readReferences', () => {
  it('reads a plain reference', () => {
    expect([...readReferences('.a { gap: var(--ams-space-m); }').names]).toEqual(['--ams-space-m'])
  })

  it('reads a reference nested in a fallback', () => {
    const { names } = readReferences('.a { gap: var(--ams-space-m, var(--ams-space-s)); }')

    expect([...names]).toEqual(['--ams-space-m', '--ams-space-s'])
  })

  it('reads a reference from a TypeScript file, since Storybook sets tokens inline', () => {
    const { names } = readReferences(`const style = { blockSize: 'var(--ams-logo-block-size)' }`)

    expect([...names]).toEqual(['--ams-logo-block-size'])
  })

  it('expands an interpolated reference over the values of its loop', () => {
    const source = '@each $size in ("small", "large") { .a--#{$size} { gap: var(--ams-column-gap-#{$size}); } }'

    expect([...readReferences(source).names]).toEqual(['--ams-column-gap-small', '--ams-column-gap-large'])
  })

  it('expands an interpolation that is followed by more of the name', () => {
    const source = '@each $size in ("s", "m") { .a { gap: var(--ams-space-#{$size}-inline); } }'

    expect([...readReferences(source).names]).toEqual(['--ams-space-s-inline', '--ams-space-m-inline'])
  })

  it('does not count a declaration as a reference, since it sets a token rather than consuming it', () => {
    expect(readReferences('.ams-icon { --ams-line-height: 1.5; }').names.size).toBe(0)
  })

  it('narrows an interpolation whose loop it cannot find, rather than dropping the reference', () => {
    const { names, narrowed } = readReferences('.a { gap: var(--ams-space-#{$unknown}); }')

    expect(names.size).toBe(0)
    expect(narrowed).toEqual(['--ams-space-#{$unknown}'])
  })

  it('treats a name interpolated from the start as opaque, since it could be any token', () => {
    const { narrowed, opaque } = readReferences('.a { gap: var(--#{$name}); }')

    expect(narrowed).toEqual([])
    expect(opaque).toEqual(['--#{$name}'])
  })

  it('treats a name interpolated within the namespace as opaque, since it could be any token', () => {
    expect(readReferences('.a { gap: var(--ams-#{$name}); }').opaque).toEqual(['--ams-#{$name}'])
  })

  it('ignores a composed name that cannot become a token, since it reaches nothing here', () => {
    const { narrowed, opaque } = readReferences('.a { gap: var(--other-#{$name}); }')

    expect(narrowed).toEqual([])
    expect(opaque).toEqual([])
  })

  it('ignores a reference to a custom property outside the namespace', () => {
    expect(readReferences('.a { gap: var(--utrecht-space-m); }').names.size).toBe(0)
  })
})

describe('getLiteralPrefix', () => {
  it('returns the part before the interpolation', () => {
    expect(getLiteralPrefix('--ams-space-#{$size}')).toBe('--ams-space-')
  })

  it('returns the whole name when it holds no interpolation', () => {
    expect(getLiteralPrefix('--ams-space-m')).toBe('--ams-space-m')
  })
})

describe('isCoveredByNarrowed', () => {
  it('covers a token that shares the prefix of a narrowed reference', () => {
    expect(isCoveredByNarrowed('--ams-space-m', ['--ams-space-#{$size}'])).toBe(true)
  })

  it('does not cover a token outside that prefix', () => {
    expect(isCoveredByNarrowed('--ams-color-primary', ['--ams-space-#{$size}'])).toBe(false)
  })
})

describe('findUnusedTokens', () => {
  /**
   * Builds the argument of findUnusedTokens from plain lists.
   *
   * @param {object} options - The lists to convert.
   * @param {string[]} [options.allowlisted] - The tokens allowed to go unused.
   * @param {string[]} [options.defined] - The tokens the build declares.
   * @param {string[]} [options.narrowed] - The references that could not be expanded.
   * @param {string[]} [options.referenced] - The tokens something refers to.
   * @returns {object} The argument of findUnusedTokens.
   */
  function sets({ allowlisted = [], defined = [], narrowed = [], referenced = [] }) {
    return { allowlisted: new Set(allowlisted), defined: new Set(defined), narrowed, referenced: new Set(referenced) }
  }

  it('reports a token nothing refers to', () => {
    const { unused } = findUnusedTokens(sets({ defined: ['--ams-a', '--ams-b'], referenced: ['--ams-a'] }))

    expect(unused).toEqual(['--ams-b'])
  })

  it('accepts a token that only another token refers to', () => {
    const { unused } = findUnusedTokens(sets({ defined: ['--ams-a'], referenced: ['--ams-a'] }))

    expect(unused).toEqual([])
  })

  it('accepts a token an allowlist entry covers', () => {
    const { unused } = findUnusedTokens(sets({ allowlisted: ['--ams-b'], defined: ['--ams-a', '--ams-b'] }))

    expect(unused).toEqual(['--ams-a'])
  })

  it('accepts a token a narrowed reference may reach, rather than reporting it falsely', () => {
    const { unused } = findUnusedTokens(sets({ defined: ['--ams-space-m'], narrowed: ['--ams-space-#{$size}'] }))

    expect(unused).toEqual([])
  })

  it('reports an allowlist entry for a token that no longer exists', () => {
    const options = sets({ allowlisted: ['--ams-gone'], defined: ['--ams-a'], referenced: ['--ams-a'] })

    expect(findUnusedTokens(options).stale).toEqual(['--ams-gone'])
  })

  it('reports an allowlist entry for a token that is consumed after all', () => {
    const { stale } = findUnusedTokens(
      sets({ allowlisted: ['--ams-a'], defined: ['--ams-a'], referenced: ['--ams-a'] }),
    )

    expect(stale).toEqual(['--ams-a'])
  })

  it('sorts what it reports, so the output does not depend on file order', () => {
    const { unused } = findUnusedTokens(sets({ defined: ['--ams-c', '--ams-a', '--ams-b'] }))

    expect(unused).toEqual(['--ams-a', '--ams-b', '--ams-c'])
  })
})

/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { mkdtempSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import stylelint from 'stylelint'
import { beforeAll, describe, expect, it } from 'vitest'

import plugins from './index.mjs'

const TOKENS = `
:root {
  --ams-alias-font-size: var(--ams-unsafe-font-size);
  --ams-cycle-a-font-size: var(--ams-cycle-b-font-size);
  --ams-cycle-b-font-size: var(--ams-cycle-a-font-size);
  --ams-safe-font-size: clamp(1rem, 5vw, 2rem);
  --ams-static-font-size: clamp(1rem, 2rem, 4rem);
  --ams-unsafe-font-size: clamp(1rem, 5vw, 4rem);
  --ams-bare-font-family: 'Amsterdam Sans';
  --ams-generic-first-font-family: sans-serif, 'Amsterdam Sans';
  --ams-inherit-font-family: inherit;
  --ams-safe-font-family: 'Amsterdam Sans', Arial, sans-serif;
}
`

let tokensPath

beforeAll(() => {
  tokensPath = join(mkdtempSync(join(tmpdir(), 'ams-stylelint-')), 'tokens.css')

  writeFileSync(tokensPath, TOKENS)
})

/**
 * Lints a snippet with a single rule of this plugin enabled.
 *
 * @param {string} ruleName - The rule to enable.
 * @param {string} code - The CSS to lint.
 * @param {object} [options] - Extra secondary options for the rule.
 * @returns {Promise<string[]>} The warning texts.
 */
async function lint(ruleName, code, options = {}) {
  const { results } = await stylelint.lint({
    code,
    config: {
      plugins,
      rules: { [ruleName]: [true, { importFrom: [tokensPath], ...options }] },
    },
  })

  return results[0].warnings.map((warning) => warning.text)
}

describe('ams/no-unsafe-clamp-font-size', () => {
  const ruleName = 'ams/no-unsafe-clamp-font-size'

  it('rejects a clamp written straight into the declaration', async () => {
    expect(await lint(ruleName, '.a { font-size: clamp(1rem, 5vw, 4rem); }')).toHaveLength(1)
  })

  it('rejects a clamp reached through a token, which is what a plain value check misses', async () => {
    const warnings = await lint(ruleName, '.a { font-size: var(--ams-unsafe-font-size); }')

    expect(warnings).toHaveLength(1)
    expect(warnings[0]).toContain('--ams-unsafe-font-size')
    expect(warnings[0]).toContain('4×')
  })

  it('rejects a clamp reached through a chain of tokens', async () => {
    expect(await lint(ruleName, '.a { font-size: var(--ams-alias-font-size); }')).toHaveLength(1)
  })

  it('rejects a clamp reached through the fallback of an undefined token', async () => {
    expect(await lint(ruleName, '.a { font-size: var(--ams-absent, clamp(1rem, 5vw, 8rem)); }')).toHaveLength(1)
  })

  it('accepts a ratio within the maximum', async () => {
    expect(await lint(ruleName, '.a { font-size: var(--ams-safe-font-size); }')).toHaveLength(0)
  })

  it('accepts a clamp that does not scale with the viewport, since zooming still resizes it', async () => {
    expect(await lint(ruleName, '.a { font-size: var(--ams-static-font-size); }')).toHaveLength(0)
  })

  it('accepts a token it cannot resolve rather than guessing', async () => {
    expect(await lint(ruleName, '.a { font-size: var(--ams-absent); }')).toHaveLength(0)
  })

  it('accepts a reference cycle without hanging', async () => {
    expect(await lint(ruleName, '.a { font-size: var(--ams-cycle-a-font-size); }')).toHaveLength(0)
  })

  it('honours a stricter maxRatio', async () => {
    expect(await lint(ruleName, '.a { font-size: var(--ams-safe-font-size); }', { maxRatio: 1.5 })).toHaveLength(1)
  })

  it('reports the file it could not read instead of passing silently', async () => {
    const { results } = await stylelint.lint({
      code: '.a { font-size: var(--ams-unsafe-font-size); }',
      config: {
        plugins,
        rules: { [ruleName]: [true, { importFrom: ['./does-not-exist.css'] }] },
      },
    })

    expect(results[0].invalidOptionWarnings.map((warning) => warning.text).join()).toContain('does-not-exist.css')
  })
})

describe('ams/require-system-font-fallback', () => {
  const ruleName = 'ams/require-system-font-fallback'

  it('rejects a token whose stack has no generic family', async () => {
    const warnings = await lint(ruleName, '.a { font-family: var(--ams-bare-font-family); }')

    expect(warnings).toHaveLength(1)
    expect(warnings[0]).toContain('--ams-bare-font-family')
  })

  it('rejects a stack written straight into the declaration', async () => {
    expect(await lint(ruleName, `.a { font-family: 'Amsterdam Sans'; }`)).toHaveLength(1)
  })

  it('rejects a generic family that is not last, since the families after it never apply', async () => {
    expect(await lint(ruleName, '.a { font-family: var(--ams-generic-first-font-family); }')).toHaveLength(1)
  })

  it('accepts a stack that ends in a generic family', async () => {
    expect(await lint(ruleName, '.a { font-family: var(--ams-safe-font-family); }')).toHaveLength(0)
  })

  it('accepts a global keyword, which is not a stack', async () => {
    expect(await lint(ruleName, '.a { font-family: var(--ams-inherit-font-family); }')).toHaveLength(0)
  })

  it('accepts the font-family descriptor of an @font-face, which names the font being defined', async () => {
    const code = `@font-face { font-family: 'Amsterdam Sans'; src: url(a.woff2) format('woff2'); }`

    expect(await lint(ruleName, code)).toHaveLength(0)
  })
})

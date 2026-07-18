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
  --ams-alias-grid-template-columns: var(--ams-bare-grid-template-columns);
  --ams-bare-grid-template-columns: 1fr 4fr;
  --ams-repeat-grid-template-columns: repeat(7, 1fr);
  --ams-safe-grid-template-columns: minmax(0, 1fr) minmax(0, 4fr);
  --ams-alias-border-width: var(--ams-fixed-border-width);
  --ams-fixed-border-width: 1px;
  --ams-quoted-px-content: '10px';
  --ams-safe-inline-size: 1rem;
  --ams-marker-list-style-type: '\\2022';
  --ams-none-list-style-type: none;
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

describe('ams/require-grid-minmax', () => {
  const ruleName = 'ams/require-grid-minmax'

  it('rejects a bare fr track reached through a token, which is what a plain value check misses', async () => {
    const warnings = await lint(ruleName, '.a { grid-template-columns: var(--ams-bare-grid-template-columns); }')

    expect(warnings).toHaveLength(1)
    expect(warnings[0]).toContain('--ams-bare-grid-template-columns')
  })

  it('rejects a bare fr track reached through a chain of tokens', async () => {
    expect(await lint(ruleName, '.a { grid-template-columns: var(--ams-alias-grid-template-columns); }')).toHaveLength(
      1,
    )
  })

  it('rejects a bare fr track inside a repeat()', async () => {
    expect(await lint(ruleName, '.a { grid-template-columns: var(--ams-repeat-grid-template-columns); }')).toHaveLength(
      1,
    )
  })

  it('accepts a literal fr track beside a token, which defensive-css/require-grid-minmax judges', async () => {
    expect(await lint(ruleName, '.a { grid-template-rows: var(--ams-safe-inline-size) 1fr; }')).toHaveLength(0)
  })

  it('accepts tracks wrapped in minmax()', async () => {
    expect(await lint(ruleName, '.a { grid-template-columns: var(--ams-safe-grid-template-columns); }')).toHaveLength(0)
  })

  it('accepts a literal track list, which defensive-css/require-grid-minmax judges', async () => {
    expect(await lint(ruleName, '.a { grid-template-columns: 1fr 4fr; }')).toHaveLength(0)
  })

  it('accepts a token it cannot resolve rather than guessing', async () => {
    expect(await lint(ruleName, '.a { grid-template-columns: var(--ams-absent); }')).toHaveLength(0)
  })
})

describe('ams/no-fixed-sizes', () => {
  const ruleName = 'ams/no-fixed-sizes'

  it('rejects a pixel length reached through a token, which is what a plain value check misses', async () => {
    const warnings = await lint(ruleName, '.a { border-inline-width: var(--ams-fixed-border-width); }')

    expect(warnings).toHaveLength(1)
    expect(warnings[0]).toContain('--ams-fixed-border-width')
    expect(warnings[0]).toContain('border-inline-width')
  })

  it('rejects a pixel length reached through a chain of tokens', async () => {
    expect(await lint(ruleName, '.a { border-inline-width: var(--ams-alias-border-width); }')).toHaveLength(1)
  })

  it('rejects a pixel length in a shorthand beside other tokens', async () => {
    expect(
      await lint(ruleName, '.a { border-inline: var(--ams-fixed-border-width) solid currentColor; }'),
    ).toHaveLength(1)
  })

  it('accepts a token that resolves to a relative unit', async () => {
    expect(await lint(ruleName, '.a { inline-size: var(--ams-safe-inline-size); }')).toHaveLength(0)
  })

  it('accepts a literal pixel length, which defensive-css/no-fixed-sizes judges', async () => {
    expect(await lint(ruleName, '.a { inline-size: 1px; }')).toHaveLength(0)
  })

  it('accepts a literal pixel length beside a token, which defensive-css/no-fixed-sizes judges', async () => {
    expect(await lint(ruleName, '.a { outline: 1px dashed var(--ams-safe-inline-size); }')).toHaveLength(0)
  })

  it('accepts a pixel length inside a quoted string', async () => {
    expect(await lint(ruleName, '.a { inline-size: var(--ams-quoted-px-content); }')).toHaveLength(0)
  })

  it('accepts a property outside the size list', async () => {
    expect(await lint(ruleName, '.a { content: var(--ams-quoted-px-content); }')).toHaveLength(0)
  })

  it('honours an explicit property list', async () => {
    const code = '.a { border-inline-width: var(--ams-fixed-border-width); }'

    expect(await lint(ruleName, code, { properties: ['inline-size'] })).toHaveLength(0)
  })
})

describe('ams/no-list-style-none', () => {
  const ruleName = 'ams/no-list-style-none'

  it('rejects a token that resolves to none, which is what a plain value check misses', async () => {
    const warnings = await lint(ruleName, 'ul { list-style-type: var(--ams-none-list-style-type); }')

    expect(warnings).toHaveLength(1)
    expect(warnings[0]).toContain('--ams-none-list-style-type')
  })

  it('rejects the list-style shorthand resolving to none', async () => {
    expect(await lint(ruleName, 'ul { list-style: var(--ams-none-list-style-type); }')).toHaveLength(1)
  })

  it('accepts a token that resolves to a marker', async () => {
    expect(await lint(ruleName, 'ul { list-style-type: var(--ams-marker-list-style-type); }')).toHaveLength(0)
  })

  it('accepts a literal none, which defensive-css/no-list-style-none judges', async () => {
    expect(await lint(ruleName, 'ul { list-style-type: none; }')).toHaveLength(0)
  })

  it('accepts a token it cannot resolve rather than guessing', async () => {
    expect(await lint(ruleName, 'ul { list-style-type: var(--ams-absent); }')).toHaveLength(0)
  })
})

/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { globSync, readFileSync } from 'node:fs'
import { relative } from 'node:path'
import process from 'node:process'
import { fileURLToPath } from 'node:url'

import { findUnusedTokens, readBuiltTokens, readReferences } from './unused-tokens.mjs'

const repositoryRoot = fileURLToPath(new URL('../../../', import.meta.url))

const BUILT_TOKENS_PATTERN = 'packages-proprietary/tokens/dist/*.css'

/* The places a token can legitimately be consumed from. Documentation outside these directories
 * mentions token names in prose, which is not a use, so it is deliberately left out.
 */
const CONSUMER_PATTERNS = ['packages/*/src/**/*', 'storybook/config/**/*', 'storybook/src/**/*']

const ALLOWLIST_PATH = new URL('allowlist.json', import.meta.url)

/**
 * Reads every file a set of patterns matches, skipping the ones that are not text.
 *
 * @param {string[]} patterns - The glob patterns, relative to the repository root.
 * @returns {Array<{ path: string, source: string }>} The files and their contents.
 */
function readFiles(patterns) {
  const files = []

  for (const path of globSync(patterns, {
    cwd: repositoryRoot,
    exclude: ['**/node_modules/**'],
    withFileTypes: true,
  })) {
    if (!path.isFile()) {
      continue
    }

    const absolutePath = `${path.parentPath}/${path.name}`

    try {
      files.push({ path: relative(repositoryRoot, absolutePath), source: readFileSync(absolutePath, 'utf8') })
    } catch {
      /* A file that cannot be read as text holds no token reference. */
    }
  }

  return files
}

/**
 * Prints a heading followed by an indented list.
 *
 * @param {string} heading - The line to print above the list.
 * @param {string[]} lines - The lines to list.
 * @returns {void}
 */
function report(heading, lines) {
  console.log(`\n${heading}\n`)

  for (const line of lines) {
    console.log(`  ${line}`)
  }
}

const builtFiles = readFiles([BUILT_TOKENS_PATTERN])

if (builtFiles.length === 0) {
  console.error(
    `Could not read "${BUILT_TOKENS_PATTERN}", so tokens were not checked. ` +
      'Run `pnpm --filter @amsterdam/design-system-tokens run build` to generate it.',
  )

  process.exit(1)
}

const defined = new Set()
const referenced = new Set()

for (const { source } of builtFiles) {
  const tokens = readBuiltTokens(source)

  for (const token of tokens.defined) {
    defined.add(token)
  }

  for (const token of tokens.referenced) {
    referenced.add(token)
  }
}

const narrowed = []
const narrowedSites = []
const opaqueSites = []

for (const { path, source } of readFiles(CONSUMER_PATTERNS)) {
  const references = readReferences(source)

  for (const token of references.names) {
    referenced.add(token)
  }

  for (const reference of references.narrowed) {
    narrowed.push(reference)
    narrowedSites.push(`${reference} in ${path}`)
  }

  for (const reference of references.opaque) {
    opaqueSites.push(`${reference} in ${path}`)
  }
}

const allowlist = JSON.parse(readFileSync(ALLOWLIST_PATH, 'utf8'))
const { stale, unused } = findUnusedTokens({
  allowlisted: new Set(Object.keys(allowlist)),
  defined,
  narrowed,
  referenced,
})

console.log(
  `Checked ${defined.size} tokens from ${builtFiles.length} built files against ${referenced.size} references.`,
)

if (narrowedSites.length > 0) {
  report(
    `${narrowedSites.length} reference(s) could not be expanded, ` +
      'so every token sharing their prefix was left unreported:',
    narrowedSites.sort(),
  )
}

if (opaqueSites.length > 0) {
  report(
    `${opaqueSites.length} reference(s) compose a name that could be any token, ` +
      'so nothing can be reported with confidence. Teach this check to resolve them:',
    opaqueSites.sort(),
  )
}

if (stale.length > 0) {
  report(`${stale.length} allowlist entry(s) no longer apply, so remove them from allowlist.json:`, stale)
}

if (unused.length > 0) {
  report(
    `${unused.length} token(s) are defined but nothing refers to them. ` +
      'Consume each one, remove it, or record why it stays in allowlist.json:',
    unused,
  )
}

if (opaqueSites.length > 0 || stale.length > 0 || unused.length > 0) {
  process.exit(1)
}

console.log('\nEvery token is consumed.')

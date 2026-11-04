/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { execFileSync } from 'node:child_process'
import { parseArgs } from 'node:util'

export function parseDate(value) {
  const date = new Date(`${value}T00:00:00Z`)
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value) || Number.isNaN(date.getTime()) || date.toISOString().slice(0, 10) !== value) {
    throw new Error(`Invalid date: ${value}; use YYYY-MM-DD`)
  }
  return date
}

export function minimumRemovalDate(publication) {
  const date = parseDate(publication)
  const day = date.getUTCDate()
  date.setUTCDate(1)
  date.setUTCMonth(date.getUTCMonth() + 6)
  const lastDay = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth() + 1, 0)).getUTCDate()
  date.setUTCDate(Math.min(day, lastDay))
  return date.toISOString().slice(0, 10)
}

function splitScssSelectors(header) {
  const selectors = []
  let start = 0
  let depth = 0

  for (let index = 0; index < header.length; index++) {
    if (header[index] === '(' || header[index] === '[') depth++
    if (header[index] === ')' || header[index] === ']') depth--
    if (header[index] === ',' && depth === 0) {
      selectors.push(header.slice(start, index).trim())
      start = index + 1
    }
  }

  selectors.push(header.slice(start).trim())
  return selectors.filter((selector) => selector.startsWith('.'))
}

function enclosingScssSelectors(source, index) {
  const blocks = []
  let segmentStart = 0
  let quote = ''
  let escaped = false
  let blockComment = false
  let lineComment = false

  for (let cursor = 0; cursor < index; cursor++) {
    const character = source[cursor]
    const next = source[cursor + 1]

    if (blockComment) {
      if (character === '*' && next === '/') {
        blockComment = false
        cursor++
      }
      continue
    }
    if (lineComment) {
      if (character === '\n') lineComment = false
      continue
    }
    if (quote) {
      if (escaped) escaped = false
      else if (character === '\\') escaped = true
      else if (character === quote) quote = ''
      continue
    }
    if (character === '/' && next === '*') {
      blockComment = true
      cursor++
      continue
    }
    if (character === '/' && next === '/' && source[cursor - 1] !== ':') {
      lineComment = true
      cursor++
      continue
    }
    if (character === '"' || character === "'") {
      quote = character
      continue
    }

    if (character === '{') {
      blocks.push(source.slice(segmentStart, cursor).trim())
      segmentStart = cursor + 1
    } else if (character === '}') {
      blocks.pop()
      segmentStart = cursor + 1
    } else if (character === ';') {
      segmentStart = cursor + 1
    }
  }

  for (const header of blocks.reverse()) {
    if (header && !header.startsWith('@')) return splitScssSelectors(header)
  }

  return []
}

export function extractMarkers(file, source) {
  const markers = []
  if (file.endsWith('.json')) {
    function visit(value, path = []) {
      if (!value || typeof value !== 'object') return
      if (value.$deprecated) markers.push({ name: path.join('.'), text: String(value.$deprecated) })
      for (const [key, child] of Object.entries(value)) {
        if (!key.startsWith('$')) visit(child, [...path, key])
      }
    }
    visit(JSON.parse(source))
  } else {
    for (const match of source.matchAll(/@deprecated\b([\s\S]*?)\*\//g)) {
      const lineStart = source.lastIndexOf('\n', match.index) + 1
      const before = source.slice(lineStart, match.index)
      const after = source.slice(match.index + match[0].length)
      const rawText = match[1].replace(/\n\s*\*\s?/g, ' ').trim()
      const tagStart = file.endsWith('.scss') ? -1 : rawText.search(/(?:^|\s)@[\w-]+\b|\{@[\w-]+\b/)
      const text = (tagStart < 0 ? rawText : rawText.slice(0, tagStart)).trim()
      const isScss = file.endsWith('.scss')
      const scssSelectors = isScss ? enclosingScssSelectors(source, match.index) : []
      const propertyName = before.match(/--[\w-]+/)?.[0] || (isScss && after.match(/^\s*(--[\w-]+)\s*:/)?.[1])
      const codeName =
        !isScss &&
        (after.match(/^\s*default\s+as\s+(\w+)/)?.[1] ||
          after.match(/^\s*(?:export\s+)?(?:const|function|class|type|interface)\s+(\w+)/)?.[1] ||
          after.match(/^\s*(?:readonly\s+)?(\w+)\??\s*:/)?.[1])
      const fallbackName =
        text.match(/`([^`]+)`/)?.[1] ||
        (isScss && after.match(/\.[\w-]+/)?.[0]) ||
        file
          .split('/')
          .at(-1)
          .replace(/\.[^.]+$/, '')
      const names = (propertyName && [propertyName]) ||
        (codeName && [codeName]) ||
        (scssSelectors.length > 0 && scssSelectors) || [fallbackName]
      markers.push(...names.map((name) => ({ name, text })))
    }
  }
  return markers
}

export function dateWarnings(text, publication, isNew) {
  const date = text.match(/\d{4}-\d{2}-\d{2}/)?.[0]
  if (!date) return ['No removal date']
  parseDate(date)
  if (date < publication) return [`Expired: ${date}`]
  if (isNew && date < minimumRemovalDate(publication)) return [`Less than six months: ${date}`]
  return []
}

function git(...args) {
  return execFileSync('git', args, { encoding: 'utf8', maxBuffer: 32 * 1024 * 1024 })
}

function readMarkers(ref) {
  let matches
  try {
    matches = git(
      'grep',
      '-F',
      '-l',
      '-z',
      '-e',
      '@deprecated',
      '-e',
      '$deprecated',
      ref,
      '--',
      'packages',
      'packages-proprietary',
    )
  } catch (error) {
    if (error.status === 1) return []
    throw error
  }
  const files = matches
    .split('\0')
    .filter(Boolean)
    .map((file) => file.slice(ref.length + 1))
    .filter((file) => /\/src\/.*\.(json|[cm]?[jt]sx?|scss)$/.test(file))
  return files.flatMap((file) => {
    const source = git('show', `${ref}:${file}`)
    if (!source.includes('@deprecated') && !source.includes('$deprecated')) return []
    return extractMarkers(file, source).map((marker) => ({ ...marker, file }))
  })
}

function packageName(file) {
  return file.split('/')[1] || file
}

function summary(marker, prefix = '') {
  const date = marker.text.match(/\d{4}-\d{2}-\d{2}/)?.[0] || 'no removal date'
  const replacement = marker.text.match(/\bUse\s+(.+?)\s+instead\b/i)?.[1]?.trim()
  const replacementNames = replacement?.replace(/['‘’“”"]/g, '`')
  const formattedReplacement =
    replacementNames && /^`?[\w$.-]+`?(?:\s+(?:and|or)\s+`?[\w$.-]+`?)*$/.test(replacementNames)
      ? replacementNames.replace(/`?([\w$.-]+)`?/g, (match, name) =>
          ['and', 'or'].includes(name) ? name : `\`${name}\``,
        )
      : replacement
  const description = marker.text
    .replace(/\s*(?:The \S+ component )?(?:will be )?removed on or after\s+\d{4}-\d{2}-\d{2}\.?/i, '')
    .replace(date, '')
    .trim()
    .replace(/[.;]\s*$/, '')
  return `${date.padEnd(15)}  ${prefix}\`${marker.name}\` → ${formattedReplacement || description || '(bare marker)'}`
}

function groupByPackage(records) {
  const groups = new Map()
  for (const record of records) {
    const name = packageName(record.file)
    if (!groups.has(name)) groups.set(name, [])
    groups.get(name).push(record)
  }
  return groups
}

function warningLabels(warnings) {
  return warnings
    .filter((warning) => warning !== 'No removal date')
    .map((warning) => warning.replace(/:\s+\d{4}-\d{2}-\d{2}$/, ''))
}

function formattedRecord(record, verbose, indent = '  ', note = '', prefix = '') {
  return `${indent}- ${summary(record, prefix)}${note}${verbose ? `\n${indent}  - \`${record.file}\`` : ''}`
}

function isUndatedCss(record) {
  return record.file.endsWith('.scss') && record.warnings.includes('No removal date')
}

function undatedCssSummary(records, verbose, indent) {
  const lines = []
  for (const [name, entries] of groupByPackage(records)) {
    lines.push(`${indent}- ${name}: ${entries.length} markers without a removal date`)
    if (verbose) lines.push(...entries.map((record) => formattedRecord(record, true, `${indent}  `)))
  }
  return lines
}

export function report(
  previous,
  current,
  publication,
  { includeExpired = false, since = 'previous release', verbose = false } = {},
) {
  const existing = new Set(previous.map(({ file, name }) => `${file}:${name}`))
  const records = current.map((marker) => {
    const isNew = !existing.has(`${marker.file}:${marker.name}`)
    const warnings = dateWarnings(marker.text, publication, isNew)
    return { ...marker, isNew, warnings }
  })
  const newRecords = records.filter(({ isNew }) => isNew)
  const fixes = records.filter(({ isNew, warnings }) => isNew && warnings.length > 0)
  const expired = records.filter(
    ({ isNew, warnings }) => !isNew && warnings.some((warning) => warning.startsWith('Expired')),
  )
  const sections = [
    `# Deprecations\n\nSince ${since}, published ${publication}; earliest allowed removal: ${minimumRemovalDate(publication)}.`,
  ]

  if (fixes.length > 0) {
    const lines = fixes
      .filter((record) => !isUndatedCss(record))
      .map((record) => {
        const labels = warningLabels(record.warnings)
        return formattedRecord(
          record,
          verbose,
          '',
          labels.length > 0 ? ` (${labels.join('; ')})` : '',
          `${packageName(record.file)}: `,
        )
      })
    lines.push(...undatedCssSummary(fixes.filter(isUndatedCss), verbose, ''))
    sections.push(`## FIX BEFORE RELEASING\n\n${lines.join('\n')}`)
  }

  if (newRecords.length > 0) {
    sections.push(
      `## NEW, per package\n\n${[...groupByPackage(newRecords)]
        .map(([name, entries]) => {
          const undatedCss = entries.filter(isUndatedCss)
          const listed = entries
            .filter((record) => !isUndatedCss(record))
            .map((record) => formattedRecord(record, verbose))
          if (undatedCss.length > 0) {
            listed.push(...undatedCssSummary(undatedCss, verbose, '  '))
          }
          return `- ${name}\n${listed.join('\n')}`
        })
        .join('\n')}`,
    )
  } else {
    sections.push('No new deprecations.')
  }

  if (expired.length > 0) {
    sections.push(
      `## EXPIRED, from earlier releases: ${expired.length} ${expired.length === 1 ? 'entry' : 'entries'} (--expired to list them)`,
    )
    if (includeExpired) {
      sections.push(
        expired
          .map((record) => {
            const labels = warningLabels(record.warnings)
            return formattedRecord(
              record,
              verbose,
              '',
              labels.length > 0 ? ` (${labels.join('; ')})` : '',
              `${packageName(record.file)}: `,
            )
          })
          .join('\n'),
      )
    }
  }

  return sections.join('\n\n')
}

if (import.meta.main) {
  try {
    const { positionals, values } = parseArgs({
      allowPositionals: true,
      options: {
        expired: { type: 'boolean' },
        'publication-date': { type: 'string' },
        to: { default: 'HEAD', type: 'string' },
        verbose: { type: 'boolean' },
      },
    })
    if (positionals.length !== 1 || !values['publication-date']) {
      throw new Error(
        'Usage: pnpm run deprecations <previous-release-commit> --to <ref> --publication-date YYYY-MM-DD [--expired] [--verbose]',
      )
    }
    parseDate(values['publication-date'])
    console.log(
      report(readMarkers(positionals[0]), readMarkers(values.to), values['publication-date'], {
        includeExpired: values.expired,
        since: positionals[0],
        verbose: values.verbose,
      }),
    )
  } catch (error) {
    console.error(error.message)
    process.exitCode = 1
  }
}

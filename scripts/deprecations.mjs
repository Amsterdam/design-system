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
      const text = match[1].replace(/\n\s*\*\s?/g, ' ').trim()
      const name =
        before.match(/--[\w-]+/)?.[0] ||
        (!file.endsWith('.scss') &&
          (after.match(/^\s*(?:export\s+)?(?:const|function|class|type|interface)\s+(\w+)/)?.[1] ||
            after.match(/^\s*(?:readonly\s+)?(\w+)\??\s*:/)?.[1])) ||
        text.match(/`([^`]+)`/)?.[1] ||
        (file.endsWith('.scss') && after.match(/\.[\w-]+/)?.[0]) ||
        file
          .split('/')
          .at(-1)
          .replace(/\.[^.]+$/, '')
      markers.push({ name, text })
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

function summary(marker) {
  const date = marker.text.match(/\d{4}-\d{2}-\d{2}/)?.[0] || 'no removal date'
  const replacement = marker.text
    .match(/\bUse\s+(.+?)\s+instead\b/i)?.[1]
    ?.trim()
    .replace(/[`'‘’“”]/g, '')
  const description = marker.text
    .replace(/\s*(?:will be )?removed on or after\s+\d{4}-\d{2}-\d{2}\.?/i, '')
    .replace(date, '')
    .trim()
    .replace(/[.;]\s*$/, '')
  return `${marker.name} → ${replacement || description || '(bare marker)'}    ${date}`
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

function formattedRecord(record, verbose, indent = '    ', note = '', pathIndent = indent) {
  return `${indent}${summary(record)}${note}${verbose ? `\n${pathIndent}${record.file}` : ''}`
}

function isUndatedCss(record) {
  return record.file.endsWith('.scss') && record.warnings.includes('No removal date')
}

function undatedCssSummary(records, verbose, indent) {
  const lines = []
  for (const [name, entries] of groupByPackage(records)) {
    lines.push(`${indent}${name}: ${entries.length} markers without a removal date`)
    if (verbose) lines.push(...entries.map((record) => formattedRecord(record, true, `${indent}  `, '', `${indent}  `)))
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
    `Deprecations\n  since ${since}, published ${publication}\n  earliest allowed removal: ${minimumRemovalDate(publication)}`,
  ]

  if (fixes.length > 0) {
    const lines = fixes
      .filter((record) => !isUndatedCss(record))
      .map((record) => {
        const labels = warningLabels(record.warnings)
        return formattedRecord(
          record,
          verbose,
          `  ${packageName(record.file)}: `,
          labels.length > 0 ? ` (${labels.join('; ')})` : '',
          '    ',
        )
      })
    lines.push(...undatedCssSummary(fixes.filter(isUndatedCss), verbose, '  '))
    sections.push(`FIX BEFORE RELEASING\n${lines.join('\n')}`)
  }

  if (newRecords.length > 0) {
    sections.push(
      `NEW, per package\n${[...groupByPackage(newRecords)]
        .map(([name, entries]) => {
          const undatedCss = entries.filter(isUndatedCss)
          const listed = entries
            .filter((record) => !isUndatedCss(record))
            .map((record) => formattedRecord(record, verbose))
          if (undatedCss.length > 0) {
            listed.push(...undatedCssSummary(undatedCss, verbose, '    '))
          }
          return `  ${name}\n${listed.join('\n')}`
        })
        .join('\n')}`,
    )
  } else {
    sections.push('No new deprecations.')
  }

  if (expired.length > 0) {
    sections.push(
      `EXPIRED, from earlier releases: ${expired.length} ${expired.length === 1 ? 'entry' : 'entries'} (--expired to list them)`,
    )
    if (includeExpired) {
      sections.push(
        expired
          .map((record) => {
            const labels = warningLabels(record.warnings)
            return formattedRecord(
              record,
              verbose,
              `  ${packageName(record.file)}: `,
              labels.length > 0 ? ` (${labels.join('; ')})` : '',
              '    ',
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

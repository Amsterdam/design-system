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

export function report(previous, current, publication) {
  const existing = new Set(previous.map(({ file, name }) => `${file}:${name}`))
  const groups = new Map()
  for (const marker of current) {
    const isNew = !existing.has(`${marker.file}:${marker.name}`)
    const warnings = dateWarnings(marker.text, publication, isNew)
    if (!isNew && !warnings.some((warning) => warning.startsWith('Expired'))) continue
    const packagePath = marker.file.split('/').slice(0, 2).join('/')
    if (!groups.has(packagePath)) groups.set(packagePath, [])
    groups
      .get(packagePath)
      .push(
        `- ${isNew ? 'NEW' : 'EXISTING'} ${marker.name}: ${marker.text || '(bare marker)'}${warnings.length ? ` [${warnings.join('; ')}]` : ''}\n  ${marker.file}`,
      )
  }
  return (
    [...groups].map(([name, entries]) => `## ${name}\n\n${entries.join('\n')}`).join('\n\n') ||
    'No new deprecations or expired removal dates.'
  )
}

if (import.meta.main) {
  try {
    const { positionals, values } = parseArgs({
      allowPositionals: true,
      options: {
        'publication-date': { type: 'string' },
        to: { default: 'HEAD', type: 'string' },
      },
    })
    if (positionals.length !== 1 || !values['publication-date']) {
      throw new Error('Usage: pnpm run deprecations <previous-tag> --to <ref> --publication-date YYYY-MM-DD')
    }
    parseDate(values['publication-date'])
    console.log(report(readMarkers(positionals[0]), readMarkers(values.to), values['publication-date']))
  } catch (error) {
    console.error(error.message)
    process.exitCode = 1
  }
}

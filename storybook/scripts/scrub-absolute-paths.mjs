/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

// Built Storybook output embeds absolute paths from the build machine: react-docgen
// records source file names, and the serialized config in project.json contains the
// docgen include globs. Rewrite them to repo-relative paths so published builds do
// not disclose the directory layout of the machine they were built on and have the
// same content regardless of where they were built.

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const storybookRoot = path.resolve(__dirname, '..')
const repoRoot = path.resolve(storybookRoot, '..')
const distDir = path.join(storybookRoot, 'dist')

const textExtensions = new Set(['.css', '.html', '.js', '.json', '.map', '.mjs', '.txt'])

// Ordered longest prefix first: the workspace packages resolve through the storybook
// node_modules symlinks, and 'design-system-react' is a prefix of
// 'design-system-react-icons', so the icons entry must come before the react entry.
const replacements = [
  [path.join(storybookRoot, 'node_modules', '@amsterdam', 'design-system-react-icons'), 'packages-proprietary/react-icons'],
  [path.join(storybookRoot, 'node_modules', '@amsterdam', 'design-system-react'), 'packages/react'],
  [`${repoRoot}${path.sep}`, ''],
  [repoRoot, '.'],
]

const scrubFile = (filePath) => {
  const source = fs.readFileSync(filePath, 'utf8')
  let result = source

  for (const [from, to] of replacements) {
    result = result.replaceAll(from, to)
  }

  if (result === source) {
    return false
  }

  fs.writeFileSync(filePath, result)

  return true
}

const walk = (dir) => {
  let changed = 0

  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const entryPath = path.join(dir, entry.name)

    if (entry.isDirectory()) {
      changed += walk(entryPath)
    } else if (textExtensions.has(path.extname(entry.name)) && scrubFile(entryPath)) {
      changed += 1
    }
  }

  return changed
}

if (!fs.existsSync(distDir)) {
  console.error(`No build output at ${distDir} – run the build first.`)
  process.exit(1)
}

const changed = walk(distDir)

console.log(`Scrubbed absolute paths from ${changed} file(s) in dist/.`)

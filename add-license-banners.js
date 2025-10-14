/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import fs from 'fs'
import path from 'path'

const LICENSES = {
  css: `/**\n * @license EUPL-1.2+\n * Copyright Gemeente Amsterdam\n */\n\n`,
  md: `<!-- @license CC0-1.0 -->\n\n`,
  scss: `/**\n * @license EUPL-1.2+\n * Copyright Gemeente Amsterdam\n */\n\n`,
  ts: `/**\n * @license EUPL-1.2+\n * Copyright Gemeente Amsterdam\n */\n\n`,
}

const BANNER_REGEX = {
  css: /^\/\*\*[\s\S]*?@license EUPL-1\.2\+[\s\S]*?\*\//,
  md: /^<!--\s*@license CC0-1\.0\s*-->/,
  scss: /^\/\*\*[\s\S]*?@license EUPL-1\.2\+[\s\S]*?\*\//,
  ts: /^\/\*\*[\s\S]*?@license EUPL-1\.2\+[\s\S]*?\*\//,
}

function processFile(file, ext) {
  const content = fs.readFileSync(file, 'utf8')
  if (!BANNER_REGEX[ext].test(content)) {
    fs.writeFileSync(file, LICENSES[ext] + content, 'utf8')
    console.log(`Added license to: ${file}`)
  }
}

function walk(dir) {
  fs.readdirSync(dir).forEach((f) => {
    const filePath = path.join(dir, f)
    if (fs.statSync(filePath).isDirectory()) {
      walk(filePath)
    } else {
      const ext = path.extname(f).slice(1)
      if (LICENSES[ext]) processFile(filePath, ext)
    }
  })
}

/* eslint-disable-next-line no-undef */
walk(process.cwd())

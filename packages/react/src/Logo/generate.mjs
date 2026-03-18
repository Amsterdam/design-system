/**
 * Generates Logo*.tsx components from the SVG source files in the assets package.
 * Run with: npm run generate-logos
 */

import { transform } from '@svgr/core'
import { mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from 'fs'
import { basename, dirname, resolve } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

const ASSETS_DIR = resolve(__dirname, '../../../../packages-proprietary/assets/logo')
const OUT_DIR = resolve(__dirname, './brands')

// museum_weesp.svg is a duplicate of museum-weesp.svg with an underscore instead of a hyphen
const EXCLUDE = new Set(['museum_weesp.svg'])

const LICENSE_HEADER = `/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */`

function toPascalCase(str) {
  return str.replace(/(^|-)([a-z])/g, (_, __, c) => c.toUpperCase())
}

// SVGR's tpl only accepts Babel AST nodes in interpolations, not plain strings.
// The displayName assignment is therefore added via post-processing instead.
function logoTemplate({ componentName, jsx }, { tpl }) {
  return tpl`
    import type { ForwardedRef, SVGProps } from 'react'
    import { forwardRef } from 'react'

    const ${componentName} = forwardRef((props: SVGProps<SVGSVGElement>, ref: ForwardedRef<SVGSVGElement>) => (
      ${jsx}
    ))

    export default ${componentName}
  `
}

// Clear and recreate output directory
rmSync(OUT_DIR, { force: true, recursive: true })
mkdirSync(OUT_DIR, { recursive: true })

const svgFiles = readdirSync(ASSETS_DIR)
  .filter((file) => file.endsWith('.svg') && !EXCLUDE.has(file))
  .sort()

const componentNames = []

for (const file of svgFiles) {
  const svgName = basename(file, '.svg')
  const componentName = toPascalCase(svgName) + 'Logo'
  const svgContent = readFileSync(resolve(ASSETS_DIR, file), 'utf8')

  let code = await transform(
    svgContent,
    {
      plugins: ['@svgr/plugin-svgo', '@svgr/plugin-jsx'],
      ref: true,
      svgoConfig: {
        plugins: [
          {
            name: 'preset-default',
          },
          {
            // Remove fill="none" from the root svg element; the paths have their own explicit fills
            name: 'removeAttrs',
            params: { attrs: 'svg:fill' },
          },
        ],
      },
      svgProps: {
        className: 'ams-logo',
        focusable: 'false',
        // Height for when CSS does not load, gets overridden when it does
        height: '2.5rem',
        role: 'img',
      },
      template: logoTemplate,
      typescript: true,
    },
    { componentName },
  )

  // tpl cannot interpolate plain strings, so the displayName assignment is injected here
  code = code.replace(
    `export default ${componentName}`,
    `${componentName}.displayName = '${componentName}'\n\nexport default ${componentName}`,
  )

  writeFileSync(resolve(OUT_DIR, `${componentName}.tsx`), `${LICENSE_HEADER}\n\n${code}`)
  console.log(`Generated ${componentName}.tsx`)
  componentNames.push(componentName)
}

// Generate index.ts
const indexContent = [
  LICENSE_HEADER,
  '',
  ...componentNames.map((name) => `export { default as ${name} } from './${name}'`),
  '',
].join('\n')

writeFileSync(resolve(OUT_DIR, 'index.ts'), indexContent)
console.log('Generated index.ts')

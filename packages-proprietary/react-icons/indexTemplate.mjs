import path from 'path'

import { deprecatedAliases } from './deprecations.mjs'

const licenseHeader = `/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */`

export function indexTemplate(filePaths) {
  const exportEntries = filePaths.map(({ path: filePath }) => {
    const basename = path.basename(filePath, path.extname(filePath))
    const exportName = /^\d/.test(basename) ? `Svg${basename}` : basename

    // The name of the React component for each icon ends with `Icon`
    return `export { default as ${exportName}Icon } from './${basename}'`
  })

  // Re-export deprecated alias names (e.g. the misspelled `LinkedinIcon`) with
  // an `@deprecated` JSDoc comment, configured in `deprecations.mjs`.
  const aliasEntries = Object.entries(deprecatedAliases).map(
    ([aliasName, { comment, icon }]) =>
      `export {\n  /** @deprecated ${comment} */\n  default as ${aliasName},\n} from './${icon}'`,
  )

  return [licenseHeader, '', ...exportEntries, ...aliasEntries].join('\n')
}

import path from 'path'

export function logoIndexTemplate(filePaths) {
  const exports = filePaths.map(({ path: filePath }) => {
    const name = path.basename(filePath, path.extname(filePath))
    return `export { default as ${name} } from './${name}'`
  })
  return ['/**', ' * @license EUPL-1.2+', ' * Copyright Gemeente Amsterdam', ' */', '', ...exports, ''].join('\n')
}

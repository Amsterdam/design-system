import { deprecatedIconComment } from './deprecations.mjs'
import { directionalIcons } from './directional-icons.mjs'
import { indexTemplate } from './indexTemplate.mjs'

// Matches SVGR’s default output, but adds the `@deprecated` JSDoc comment for
// icons listed in `deprecations.mjs` so it is reapplied on each run.
function template(variables, { tpl }) {
  const iconName = variables.componentName.replace(/^Svg/, '')
  const attributes = variables.jsx.openingElement.attributes
  const directionalAttributeIndex = attributes.findIndex(
    (attribute) => attribute.type === 'JSXAttribute' && attribute.name.name === 'data-directional',
  )

  if (!directionalIcons.has(iconName) && directionalAttributeIndex !== -1) {
    attributes.splice(directionalAttributeIndex, 1)
  } else if (directionalIcons.has(iconName) && directionalAttributeIndex === -1) {
    const propsIndex = attributes.findIndex((attribute) => attribute.type === 'JSXSpreadAttribute')

    attributes.splice(propsIndex === -1 ? attributes.length : propsIndex, 0, {
      name: { name: 'data-directional', type: 'JSXIdentifier' },
      type: 'JSXAttribute',
      value: { type: 'StringLiteral', value: 'true' },
    })
  }

  const statements = tpl`
${variables.imports};
${variables.interfaces};
const ${variables.componentName} = (${variables.props}) => ${variables.jsx};
${variables.exports};
`
  const comment = deprecatedIconComment(iconName)
  const component = statements.find((statement) => statement.type === 'VariableDeclaration')

  if (comment && component) {
    // Two-line gap in the synthetic loc keeps a blank line above the comment.
    const value = comment.slice(2, -2)

    component.loc = { start: { column: 0, line: 1 }, end: { column: 0, line: 1 } }
    component.trailingComments = [
      {
        loc: { start: { column: 0, line: 3 }, end: { column: 0, line: 2 + value.split('\n').length } },
        type: 'CommentBlock',
        value,
      },
    ]
  }

  return statements
}

export default {
  indexTemplate,
  jsxRuntime: 'automatic',
  outDir: 'src',
  svgoConfig: './svgo.config.mjs',
  svgProps: {
    'aria-hidden': 'true',
    focusable: 'false',
  },
  template,
  typescript: true,
}

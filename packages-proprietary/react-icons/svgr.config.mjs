import { deprecatedIconComment } from './deprecations.mjs'
import { indexTemplate } from './indexTemplate.mjs'

// Matches SVGR’s default output, but adds the `@deprecated` JSDoc comment for
// icons listed in `deprecations.mjs` so it is reapplied on each run.
function template(variables, { tpl }) {
  const statements = tpl`
${variables.imports};
${variables.interfaces};
const ${variables.componentName} = (${variables.props}) => ${variables.jsx};
${variables.exports};
`
  const comment = deprecatedIconComment(variables.componentName.replace(/^Svg/, ''))
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

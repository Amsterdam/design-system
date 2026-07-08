/**
 * Inserts a line at its sorted position in the list that follows the ‘Append here’ marker.
 * This keeps generated index files in the order that our lint rules require.
 */
const insertLineSorted = (contents, line) => {
  const lines = contents.split('\n')

  if (lines.includes(line)) {
    return contents
  }

  const markerIndex = lines.indexOf('/* Append here */')

  if (markerIndex === -1) {
    throw new Error('Marker /* Append here */ not found')
  }

  let index = markerIndex + 1

  while (index < lines.length && lines[index] !== '' && lines[index].toLowerCase() < line.toLowerCase()) {
    index += 1
  }

  lines.splice(index, 0, line)

  return lines.join('\n')
}

export default function (plop) {
  // component generator
  plop.setGenerator('component', {
    actions: [
      {
        path: 'packages-proprietary/tokens/src/components/ams/{{kebabCase name}}.tokens.json',
        templateFile: 'plop-templates/tokens.json.hbs',
        type: 'add',
      },
      {
        path: 'packages/css/src/components/{{kebabCase name}}/{{kebabCase name}}.scss',
        templateFile: 'plop-templates/style.scss.hbs',
        type: 'add',
      },
      {
        path: 'packages/css/src/components/index.scss',
        transform: (contents, answers) =>
          insertLineSorted(contents, plop.renderString(`@use "{{kebabCase name}}/{{kebabCase name}}";`, answers)),
        type: 'modify',
      },
      {
        path: 'packages/react/src/{{pascalCase name}}/{{pascalCase name}}.tsx',
        templateFile: 'plop-templates/react.tsx.hbs',
        type: 'add',
      },
      {
        path: 'packages/react/src/{{pascalCase name}}/{{pascalCase name}}.test.tsx',
        templateFile: 'plop-templates/react.test.tsx.hbs',
        type: 'add',
      },
      {
        path: 'packages/react/src/{{pascalCase name}}/index.ts',
        templateFile: 'plop-templates/react.index.ts.hbs',
        type: 'add',
      },
      {
        path: 'packages/react/src/index.ts',
        transform: (contents, answers) =>
          insertLineSorted(contents, plop.renderString(`export * from './{{pascalCase name}}'`, answers)),
        type: 'modify',
      },
      {
        data: { curlyBefore: '{' },
        path: 'storybook/src/components/{{pascalCase name}}/{{pascalCase name}}.docs.mdx',
        templateFile: 'plop-templates/storybook.docs.mdx.hbs',
        type: 'add',
      },
      {
        path: 'storybook/src/components/{{pascalCase name}}/{{pascalCase name}}.stories.tsx',
        templateFile: 'plop-templates/storybook.stories.tsx.hbs',
        type: 'add',
      },
      {
        path: 'storybook/src/components/{{pascalCase name}}/{{pascalCase name}}.test.stories.tsx',
        templateFile: 'plop-templates/storybook.test.stories.tsx.hbs',
        type: 'add',
      },
    ],
    description: 'scaffolding for new component',
    prompts: [
      {
        message: "component's name",
        name: 'name',
        type: 'input',
      },
      {
        message: 'one-sentence description (rendered in the docs page and IDE tooltips)',
        name: 'description',
        type: 'input',
      },
      {
        default: 'span',
        message: 'Tag name: ',
        name: 'tag',
        type: 'input',
      },
      {
        default: 'HTMLAttributes',
        message: 'DOM API Attributes: ',
        name: 'attributes',
        type: 'input',
      },
      {
        default: 'HTMLElement',
        message: 'DOM API Type: ',
        name: 'type',
        type: 'input',
      },
      {
        message: 'Aria Role: ',
        name: 'role',
        type: 'input',
      },
    ],
  })
}

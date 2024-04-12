export default function (plop) {
  // component generator
  plop.setGenerator('component', {
    description: 'scaffolding for new component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: "component's name",
      },
      {
        type: 'input',
        name: 'tag',
        message: 'Tag name: ',
        default: 'span',
      },
      {
        type: 'input',
        name: 'attributes',
        message: 'DOM API Attributes: ',
        default: 'HTMLAttributes',
      },
      {
        type: 'input',
        name: 'type',
        message: 'DOM API Type: ',
        default: 'HTMLElement',
      },
      {
        type: 'input',
        name: 'role',
        message: 'Aria Role: ',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'proprietary/tokens/src/components/ams/{{kebabCase name}}.tokens.json',
        templateFile: 'plop-templates/tokens.json.hbs',
      },
      {
        type: 'add',
        path: 'packages/css/src/components/{{kebabCase name}}/{{kebabCase name}}.scss',
        templateFile: 'plop-templates/style.scss.hbs',
      },
      {
        type: 'add',
        path: 'packages/css/src/components/{{kebabCase name}}/README.md',
        templateFile: 'plop-templates/style.docs.md.hbs',
      },
      {
        type: 'append',
        path: 'packages/css/src/components/index.scss',
        pattern: `/* Append here */`,
        template: `@import "./{{kebabCase name}}/{{kebabCase name}}";`,
      },
      {
        type: 'add',
        path: 'packages/react/src/{{pascalCase name}}/{{pascalCase name}}.tsx',
        templateFile: 'plop-templates/react.tsx.hbs',
      },
      {
        type: 'add',
        path: 'packages/react/src/{{pascalCase name}}/{{pascalCase name}}.test.tsx',
        templateFile: 'plop-templates/react.test.tsx.hbs',
      },
      {
        type: 'add',
        path: 'packages/react/src/{{pascalCase name}}/README.md',
        templateFile: 'plop-templates/react.docs.md.hbs',
      },
      {
        type: 'add',
        path: 'packages/react/src/{{pascalCase name}}/index.ts',
        templateFile: 'plop-templates/react.index.ts.hbs',
      },
      {
        type: 'append',
        path: 'packages/react/src/index.ts',
        pattern: `/* Append here */`,
        template: `export * from './{{pascalCase name}}'`,
      },
      {
        type: 'add',
        data: { curlyBefore: '{' },
        path: 'storybook/src/components/{{pascalCase name}}/{{pascalCase name}}.docs.mdx',
        templateFile: 'plop-templates/storybook.docs.mdx.hbs',
      },
      {
        type: 'add',
        path: 'storybook/src/components/{{pascalCase name}}/{{pascalCase name}}.stories.tsx',
        templateFile: 'plop-templates/storybook.stories.tsx.hbs',
      },
    ],
  })
}

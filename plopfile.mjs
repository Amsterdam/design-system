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
        path: 'packages/css/src/components/{{kebabCase name}}/README.md',
        templateFile: 'plop-templates/style.docs.md.hbs',
        type: 'add',
      },
      {
        path: 'packages/css/src/components/index.scss',
        pattern: `/* Append here */`,
        template: `@use "{{kebabCase name}}/{{kebabCase name}}";`,
        type: 'append',
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
        path: 'packages/react/src/{{pascalCase name}}/README.md',
        templateFile: 'plop-templates/react.docs.md.hbs',
        type: 'add',
      },
      {
        path: 'packages/react/src/{{pascalCase name}}/index.ts',
        templateFile: 'plop-templates/react.index.ts.hbs',
        type: 'add',
      },
      {
        path: 'packages/react/src/index.ts',
        pattern: `/* Append here */`,
        template: `export * from './{{pascalCase name}}'`,
        type: 'append',
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

import { defineCustomElements } from '@amsterdam/web-components-stencil';
import defaultsDeep from 'lodash.defaultsdeep';
import prettierBabel from 'prettier/parser-babel';
import prettier from 'prettier/standalone';
import * as ReactDOMServer from 'react-dom/server';

import '@amsterdam/design-tokens/dist/index.css';
import '@amsterdam/font/src/index.css';
import './preview.css';

defineCustomElements();

export const decorators = [
  // Enable `utrecht-document` component as backdrop
  // Enable `utrecht-theme` to configure the design tokens
  // Ensure old html templates will be rendered as react component
  (Story, storyContext) => {
    // Hack to make current args for a story available in the transformSource of the docs addon
    storyContext.parameters.args = storyContext.args;

    return (
      <div className="amsterdam-theme">
        <Story />
      </div>
    );
  },
];

// Configure @storybook/addon-docs
const addonDocs = {
  docs: {
    // Show code by default.
    // Stories without concise code snippets can hide the code at Story level.
    source: {
      state: 'open',
    },
    transformSource: (src, storyContext) => {
      // Ensure valid HTML in the Preview source
      if (storyContext.component) {
        return prettier.format(
          ReactDOMServer.renderToStaticMarkup(storyContext.component(storyContext.parameters.args)),
          { parser: 'babel', plugins: [prettierBabel] },
        );
      }
      return src;
    },
  },
};

// Configure @etchteam/storybook-addon-status
const addonStatus = {
  status: {
    statuses: {
      PRODUCTION: {
        background: '#088008',
        color: '#ffffff',
        description:
          'Used in production in a variety of situations, well tested, stable APIs, mostly patches and minor releases.',
      },
      BETA: {
        background: '#3065ee',
        color: '#ffffff',
        description:
          'Used in production in a specific situation, evolving APIs based on feedback, breaking changes are still likely.',
      },
      ALPHA: {
        background: '#e0bc2e',
        color: '#000000',
        description:
          'Used in prototypes and in projects that are still in development, breaking changes occur frequently and are not communicated.',
      },
      'WORK IN PROGRESS': {
        background: '#cc0000',
        color: '#ffffff',
        description:
          'Do not use in production. Does not follow semantic versioning and any published packages are for internal use only.',
      },
    },
  },
};

const previewTabs = {
  'storybookjs/notes/panel': { title: 'Documentation' },
  'storybook/docs/panel': { title: 'API' },
  canvas: { title: 'Design Tokens' },
};

export const parameters = defaultsDeep(
  {
    controls: { expanded: false },
    // Make the "Docs" tab the default, instead of the "Canvas" tab
    viewMode: 'docs',
    options: {
      panelPosition: 'right',
    },
  },
  previewTabs,
  addonStatus,
  addonDocs,
);

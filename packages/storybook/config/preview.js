import '@amsterdam/design-tokens/dist/index.css';
import '@amsterdam/font/src/index.scss';

import { defineCustomElements } from '@amsterdam/web-components-stencil';

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

export const parameters = {
  controls: { expanded: false },
  previewTabs,
  addonStatus,
  options: {
    panelPosition: 'right',
  },
};

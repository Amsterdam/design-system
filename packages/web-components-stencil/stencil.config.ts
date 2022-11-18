import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'example',
  srcDir: '../../components/',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements-bundle',
    },
    reactOutputTarget({
      componentCorePackage: '@amsterdam/web-components-stencil',
      proxiesFile: '../web-components-react/src/components.ts',
    }),
  ],
  plugins: [sass()],
};

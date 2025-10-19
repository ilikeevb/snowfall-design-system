import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';

export const config: Config = {
  namespace: 'stencil-library',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
      copy: [
        { src: 'assets', dest: 'assets' },
      ],
    },
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'auto-define-custom-elements',
      externalRuntime: false,
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
      copy: [
        { src: 'assets', dest: 'assets' },
      ],
    },
    reactOutputTarget({
      // Relative path to where the React components will be generated
      outDir: '../react-library/lib/components/stencil-generated/',
    }),
    { type: 'dist-custom-elements' },
  ],
  testing: {
    browserHeadless: "shell",
  },
};

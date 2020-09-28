import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'lila',
  taskQueue: 'async',
  buildEs5: false,
  globalStyle: 'src/style/lila.scss',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'docs-readme',
      footer: '*Built with love❤️!*',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
    {
      type: 'dist-custom-elements-bundle'
    }
  ],
  plugins: [
    sass({
      injectGlobalPaths: ['src/style/base.scss'],
    }),
  ]
};

import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import scss from 'rollup-plugin-scss';
import { writeFileSync } from 'fs'
export const config: Config = {
  namespace: 'lila',
  taskQueue: 'async',
  buildEs5: false,
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
  ],
  plugins: [
    sass({
      injectGlobalPaths: ['src/style/base.scss'],
    }),
  ],
  rollupPlugins: {
    after: [
      scss({
        output: function (styles) {
          writeFileSync('www/build/lila.css', styles)
        },
      })
    ]
  }
};



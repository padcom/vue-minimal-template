import { defineConfig } from 'vite'
import svg from 'vite-svg-loader'
import vue from '@vitejs/plugin-vue'
import eslint from 'vite-plugin-eslint'
import autoprefixer from 'autoprefixer'

import pkg from './package.json'

/**
 * Compose an object of package.json fields for definition of `import.meta.env.XXX` constants
 */
function getPkgDefines() {
  return Object.keys(pkg)
    .filter(key => typeof pkg[key] !== 'function')
    .map(key => ({ [`import.meta.env.PACKAGE_${key.toUpperCase()}`]: JSON.stringify(pkg[key]) }))
    .reduce((acc, entry) => ({ ...acc, ...entry }), {})
}

export default defineConfig({
  define: {
    ...getPkgDefines(),
  },
  plugins: [
    svg({
      defaultImport: 'component',
    }),
    vue({
      template: {
        compilerOptions: {
          isCustomElement: tag => tag.includes('-'),
        },
      },
    }),
    eslint({
      lintOnStart: false,
    }),
  ],
  css: {
    postcss: {
      plugins: [
        autoprefixer(),
      ],
    },
  },
})

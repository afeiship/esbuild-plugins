# esbuild-plugin-iife
> Esbuild iife fix plugin.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
yarn add @jswork/esbuild-plugin-iife
```

## usage
```js
import { defineConfig } from 'tsup';
import tsupBanner from '@jswork/tsup-banner';
import iifeEsbuildPlugin from '@jswork/esbuild-plugin-iife';

export default defineConfig({
  entry: ['src/index.ts'],
  clean: true,
  format: ['cjs', 'esm', 'iife'],
  tsconfig: './tsconfig.json',
  dts: true,
  splitting: true,
  sourcemap: true,
  cjsInterop: true,
  // external: ['react', 'react-dom'],
  banner: {
    js: tsupBanner()
  },
  esbuildPlugins: [iifeEsbuildPlugin({ globalName: 'sayHi' })],
  outExtension({ format }) {
    return {
      js: `.${format}.js`
    };
  }
});
```

## license
Code released under [the MIT license](https://github.com/afeiship/esbuild-plugin-iife-sync-version/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/esbuild-plugin-iife-sync-version
[version-url]: https://npmjs.org/package/@jswork/esbuild-plugin-iife-sync-version

[license-image]: https://img.shields.io/npm/l/@jswork/esbuild-plugin-iife-sync-version
[license-url]: https://github.com/afeiship/esbuild-plugin-iife-sync-version/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/esbuild-plugin-iife-sync-version
[size-url]: https://github.com/afeiship/esbuild-plugin-iife-sync-version/blob/master/dist/esbuild-plugin-iife-sync-version.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/esbuild-plugin-iife-sync-version
[download-url]: https://www.npmjs.com/package/@jswork/esbuild-plugin-iife-sync-version

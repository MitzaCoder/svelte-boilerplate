import babel from '@rollup/plugin-babel';
import commonPlugins from './rollup-common-plugins'

export default [
{
	input: 'src/main.ts',
	output: {
		sourcemap: true,
		format: 'esm',
		name: 'app',
		dir: 'public/build'
	},
	plugins: [...commonPlugins],
	watch: {
		clearScreen: false
	}
},
{
	input: 'src/main.ts',
	output: {
		sourcemap: true,
		format: 'iife',
		name: 'app',
		file: 'public/build/main.iife.js',

		// this is important, otherwise we get an error:
		// can't use IIFE format with dynamic imports!
		inlineDynamicImports: true,
	},
	plugins: [
		...commonPlugins,

		// for IE 11 compatibility
    babel({
      extensions: ['.js', '.mjs', '.html', '.svelte'],
      babelHelpers: 'bundled',
      exclude: ['node_modules/@babel/**', 'node_modules/core-js/**'],
      presets: [
        [
          '@babel/preset-env',
          {
            targets: '> 0.25%, not dead',
            useBuiltIns: 'usage',
            corejs: 3,
          }
        ]
      ]
    }),
	],
	watch: {
		clearScreen: false
	}
}];

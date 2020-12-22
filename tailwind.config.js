const production = !process.env.ROLLUP_WATCH;

module.exports = {
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
  plugins: [],
  purge: {
    content: [
      './src/**/*.svelte',
      // may also want to include base index.html
    ],
    enabled: production // disable purge in dev
  }
}
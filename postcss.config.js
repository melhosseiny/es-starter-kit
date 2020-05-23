module.exports = {
  plugins: {
    'autoprefixer': {},
    'postcss-preset-env': {
      stage: 2,
      features: {
        'custom-properties': { importFrom: 'app/assets/props.css' },
        'nesting-rules': true,
        'custom-media-queries': { importFrom: 'app/assets/media.css' },
        'media-query-ranges': true,
        'color-functional-notation': true,
        'color-mod-function': { importFrom: 'app/assets/props.css' }
      }
    },
    'cssnano': {
      preset: 'default'
    }
  }
}

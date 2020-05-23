# es-starter-kit

Starter kit for ECMAScript projects.

## Build

1. `npm install` to install dependencies
2. `npm run watch` to run Webpack
3. `npm start` to start the app at `localhost:8000`

You can also run `npm run build:dev` to build for development or `npm run build` to build for production.

## Supported Browsers

```
"browserslist": {
  "development": [
    "last 1 version",
    "> 1%",
    "not ie 11",
    "not dead"
  ],
  "production": [
    "last 1 version",
    "> 1%",
    "not ie 11",
    "not dead"
  ],
  "test": [
    "node 12"
  ]
}
```

## App Structure

```
src/
  assets/            --> Global assets such as custom CSS props
  app.js             --> Main app entry
dist/                --> Webpack build output
.editorconfig        --> EditorConfig settings
babel.config.js      --> Babel config
server.mjs           --> Express server
index.html           --> Root markup template
postcss.config.js    --> PostCSS config
webpack.config.*     --> Webpack config
```

## Babel config

- [preset-env](https://babeljs.io/docs/en/babel-preset-env) to automatically manage syntax transforms.
- [plugin-syntax-dynamic-import](https://babeljs.io/docs/en/babel-plugin-syntax-dynamic-import) to transform `() => import()` syntax.

## PostCSS config

- [CSS Modules](https://github.com/css-modules/css-modules) to locally scope style rules
- [autoprefixer](https://github.com/postcss/autoprefixer) to automatically add vendor prefixes
- [postcss-preset-env](https://preset-env.cssdb.org/) to use modern CSS features such as custom props, custom media queries and nesting rules
- [cssnano](https://cssnano.co/) to compress CSS

## Webpack config

### Common

- [babel-loader](https://github.com/babel/babel-loader) to transpile JavaScript files using babel
- [clean-webpack-plugin](https://github.com/johnagan/clean-webpack-plugin) to clean build folder

### Dev

- mode set to `development`
- Inline source maps
- `postcss-loader` to process CSS with PostCSS

### Prod

- mode set to `production`
- [mini-css-extract-plugin](https://github.com/webpack-contrib/mini-css-extract-plugin) to avoid flash of unstyled content

Dev/prod configs are merged with the common config using [webpack-merge](https://github.com/survivejs/webpack-merge).

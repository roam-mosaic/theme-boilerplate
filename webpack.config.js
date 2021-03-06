const path = require('path');
const webpack = require('webpack');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const glob = require('glob');
const FixStyleOnlyEntriesPlugin = require("webpack-fix-style-only-entries");
const nodeEnv = process.env.NODE_ENV || 'development';
const rootPath = path.join(__dirname);

const userstylesEntries = glob
  .sync('./scss/themes/**/main.scss')
  .reduce((obj, el) => {
    // console.log(path.parse(el));
    const themeName = path.parse(el).dir.split('/').reverse().slice(0, 1);
    obj[`themes/${themeName}`] = el;

    return obj;
  }, {});
const featureEntries = glob
  .sync('./scss/features/**/index.scss')
  .reduce((obj, el) => {
    // console.log(path.parse(el));
    const featureMatch = "features/";
    const featureDir = path.parse(el).dir;
    const featurePath = featureDir.slice(featureDir.indexOf(featureMatch) + featureMatch.length);
    const featureName = path.parse(el).name;
    obj[`features/${featurePath}/${featureName}`] = el;

    return obj;
  }, {});

module.exports = {
  stats: {
    all: false,
    builtAt: true,
    errors: true,
    hash: true,
  },
  mode: nodeEnv,

  entry: {
    ...userstylesEntries,
    ...featureEntries,
  },

  output: {
    path: path.join(rootPath, './build'),
  },

  resolve: {
    extensions: ['.scss'],
   
  },

  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        include: path.join(rootPath, 'scss'),
        use: [
          {
            loader: MiniCssExtractPlugin.loader, // It creates a CSS file
          },
          {
            loader: 'css-loader', // Takes the CSS files and returns the CSS with imports and url(...) for Webpack
            options: {
              sourceMap: true,
            },
          },
          'resolve-url-loader', // Rewrites relative paths in url() statements
          'sass-loader', // Takes the Sass/SCSS file and compiles to the CSS
        ],
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/, // for bundling fonts
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              useRelativePath: true,
            },
          },
        ],
      },
    ],
  },

  plugins: [
    // environmental variables
    new webpack.EnvironmentPlugin(['NODE_ENV']),
    // delete previous build files
    new CleanWebpackPlugin({
      verbose: true,
    }),
    // write css file(s) to build folder
    new MiniCssExtractPlugin({filename: 'css/[name].css'}),
    // remove extra JS files generated by webpack
    new FixStyleOnlyEntriesPlugin(),
  ],

  optimization: {
   minimize: false
  },
};

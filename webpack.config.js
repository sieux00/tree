var HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');
const path = require('path')

const plugins = [
    new HtmlWebpackPlugin({
        inlineSource: '.(js|css)$' // embed all javascript and css inline
    }),
    new HtmlWebpackInlineSourcePlugin()
]

const production = {
    entry: './src/index.js',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'build')
    },
    // resolve,
    // resolveLoader,
    // module: webpackModule,
    plugins: plugins,
    //   optimization,
    //   performance,
    //
}

module.exports = production;
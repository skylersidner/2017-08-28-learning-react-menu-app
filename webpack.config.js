module.exports = {
    entry: "./src/main.js",
    ouput: {
        path: "dist/assets",
        filename: "bundle.js",
        sourceMapFilename: 'bundle.map'
    },
    devtool: '#source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: ['babel-loader'],
                query: {
                    presets: ['env', 'stage-0', 'react']
                }
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            warnings: false,
            mangle: true
        })
    ]
}
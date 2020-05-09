const path = require('path')

module.exports = {
    mode: 'production',
    entry: {
        'React16Component': './src/new-components/React16Component.jsx'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ]
    },
    resolve: {
        alias: {
            'react': path.resolve(__dirname, 'node_modules/react16'),
            'react-dom': path.resolve(__dirname, 'node_modules/react-dom16')
        },
        extensions: ['*', '.js', '.jsx']
    },
    externals: {
        'react': 'umd React',
        'react-dom': 'umd ReactDOM',
    },
    output: {
        path: path.resolve(__dirname, 'dist/new'),
        libraryTarget: 'umd'
    }
};

const path = require('path')

module.exports = {
    mode: 'production',
    entry: {
        'React15Component': './src/old-components/React15Component.jsx'
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
            'react': path.resolve(__dirname, 'node_modules/react15'),
            'react-dom': path.resolve(__dirname, 'node_modules/react-dom15')
        },
        extensions: ['*', '.js', '.jsx']
    },
    externals: {
        'react': 'umd React',
        'react-dom': 'umd ReactDOM',
    },
    output: {
        path: path.resolve(__dirname, 'dist/old'),
        libraryTarget: 'umd'
    }
};

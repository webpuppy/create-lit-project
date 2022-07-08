const {
	join,
	resolve
} = require('path');
const fs = require('fs')

const filterFiles = (dir) => fs.readdirSync(dir)
.filter(x => fs.lstatSync(path.join(dir, x )).isFile())
.map(x => path.resolve(dir, x));

module.exports = {
    context: resolve(__dirname, 'src'),
    devtool: 'inline-source-map',
    entry: filterFiles(join( __dirname, 'src', 'components')),
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },
    output: {
        filename: 'main.js',
        path: resolve(__dirname, 'public')
    },
    resolve: {
        extensions: [ '.js' ]
    },
    target: 'web',
    devServer: {
        static: join(__dirname, 'public'),
        compress: true,
        port: 3000,
    },
}

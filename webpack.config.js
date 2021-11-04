
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports={
    entry:'./src/index.js',
    output:{
        filename:'[name].js',
        publicPath:"/",
        path:path.join(__dirname,'dist')
    },
    module:{
        rules:[
            {
                test:/\.css$/i,
                use:['style-loader','css-loader']
            },
        ],
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html'
        }),
    ],
    devServer: {
        static:{
            directory:path.join(__dirname,'public'),
            publicPath:'/public'
        },
        port: 8008,
        watchFiles: ['src/*.html'],
    },
    mode:'development'
}
const path = require('path');
const webpack =require("webpack")
const HtmlWebpackPlugin = require('html-webpack-plugin')
//vue-loader 模块必须手动导入插件
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  mode: 'development',
  devServer: {

    contentBase: "./src", // 托管的根目录

    hot: true, // 我要开启或关闭HMR

    open: true, // 自动打开浏览器

    port: 3000 // 设置devServer的端口号

  },
  plugins: [
      // 请确保引入vue-loader这个插件！
      new VueLoaderPlugin(),

    // 装了插件表示当前项目有资格开启HMR

    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({

      // title: '传智大法好!!!', // 如果模板中有title, 会覆盖这里的配置

      template: './src/index.html',
     
    })


  ],
  module: {
    rules: [
      {
        test: /\.css$/,
       
        use:["style-loader","css-loader"]
      },
      {
        test: /\.less$/,
       
        use:["style-loader","css-loader","less-loader"]
      },
      {
        test: /\.scss$/,
       
        use:["style-loader","css-loader","sass-loader"]
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/i,
        use: [
          {
            loader: 'url-loader',
          
          }
        ]
      },
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }

      



    ]
  },
//  使用阉割版的vue 引入方式 用render渲染 加 vue 组件 可以不用加下面的代码  他的体积比完整版的要小很多
  // resolve:{
  //   alias:{
  //     "vue$":"vue/dist/vue.js"
  //   }
  // }

}
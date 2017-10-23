var path = require('path')
var webpack = require('webpack')
/**
 版本控制
 package.json中的
 "html-webpack-plugin": "^1.6.2",
 模块是把生成的带有md5戳的文件，插入到index.html中。
 通过index.tpl模板，生成 index.html
 */
var HtmlWebpackPlugin = require('html-webpack-plugin')
// 引入独立css样式文件的插件
var ExtractTextPlugin = require('extract-text-webpack-plugin')

var buildFolder = 'dist'
var production = process.env.PRODUCTION

// 打包之前先清空buildFolder文件夹中的所有的文件
var fs = require('fs') //引入nodejs中文件系统fs
var cleanFolderPath = './'+buildFolder+'/' //要清空的文件夹的路径
var isExist = fs.existsSync(cleanFolderPath) //先判断是否存在要清空的文件夹
if (isExist) {
	var filesList = fs.readdirSync(cleanFolderPath) //获取该路径下的所有的文件
	console.log('正在清空'+buildFolder+'中的文件...')
	filesList.forEach(function(file) {
		// 删除每一个文件
		fs.unlinkSync(cleanFolderPath+file)
	})
	console.log('完成'+buildFolder+'的清空')
}

//添加了打包是压缩js和css文件之后，再次使用 npm run dev 进入开发环境的时候，会报错，因为index.html里面的路径还是压缩后的路径
// readfile
// 先把index.html里面关于style和js的hash值都删除掉，避免在使用 npm run dev 的时候，路径还是压缩后的路径
fs.readFile('index.html','utf-8',function (err, data) {
    if (err) {
        console.log("clear hash error")
    } else {
        var devhtml = data.replace(/((?:href|src)="[^"]+\.)(\w{20}\.)(js|css)/g, '$1$3')
        fs.writeFileSync('index.html',devhtml)
    }
})

//插件
var plugins = []
plugins.push(new webpack.optimize.CommonsChunkPlugin(production ? 'vendor' : 'vendor'))
plugins.push(new HtmlWebpackPlugin({
	template: './index.tpl',
	filename: '../index.html',//在根目录上生成index.html,并注入脚本
	inject: true  //这个属性必须加上，表示允许插件修改的内容，包括head与body
}))
// 独立样式 会将所有的样式文件打包成一个单独的style.css
plugins.push(new ExtractTextPlugin({
	filename: production ? 'style.[chunkhash].css' : 'style.css',
	disable: false,
    allChunks: true
}))

// 生产环境压缩
if (production) {
	plugins.push(
	new webpack.optimize.UglifyJsPlugin({
		    beautify: false,
		    comments: false,
		    compress: {
		    warnings: false,
		    drop_debugger: true,
		    drop_console: true,
		    collapse_vars: true,
		    reduce_vars: true
		}
	}))
}

module.exports = {
	entry: {
		build: './src/main.js',
		common: ['vue','vue-router']
	},
	output: {
		path: path.resolve(__dirname+'/'+buildFolder),
		/**
         publicPath路径就是你发布之后的路径，
         比如你想发布到你站点的/util/vue/build 目录下, 那么设置
         publicPath: "/util/vue/build/",
         此字段配置如果不正确，发布后资源定位不对，比如：css里面的精灵图路径错误
         */
		// publicPath: '/'+buildFolder+'/',
		// publicPath是index中引用的路径，也就是发布的时候，要把打包好的js,css等放到publicPath指定的文件夹中
		//而path是打包之后，js,css存放在本地的文件路径，要放在GitHub上，要设置成空，如下：
		publicPath: '',
		filename: production ?'[name].[chunkhash].js' : '[name].js'
	},
	module: {
		loaders: [
			{
                test: /\.js$/,
                loader: 'babel-loader',
                options: {
		            presets: ['es2015']
		        },
                include: [path.resolve(__dirname, 'src')]
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                include: [path.resolve(__dirname, 'src')]
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader',
                include: [path.resolve(__dirname, 'src')]
            },
            {
                test: /\.less$/,
                loader: 'style-loader!css-loader!less-loader',
                include: [path.resolve(__dirname, 'src')]
            },
		]
	},
	// 插件
	plugins: plugins,
	// 错误跟踪配置
	devtool: production ? '#source-map' : '#eval-source-map',
	resolve: {
		alias: {
            'src': path.resolve(__dirname, 'src'),
            'views': path.resolve(__dirname, 'src/views')
        }
	}
}
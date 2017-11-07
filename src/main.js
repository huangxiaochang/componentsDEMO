import Vue from 'vue'
import App from './app.vue'
import VueRouter from 'vue-router'
import routes from './routes'
import Component from './components'
//引入字体图标
// 以这种方式引入的时候，需要在webpack中增加.eot/.svg/.ttf/.woff的loaders的file-loader，详细的配置见webpack
// 注意要安装file-loader
import '!style-loader!css-loader!less-loader!./assets/font/iconfont.css' 

// 注册vue全局组件
Vue.use(Component)
//注册vue路由
Vue.use(VueRouter)
// 创建vue实例

// 在创建的 router 对象中，如果不配置 mode，就会使用默认的 hash 模式，该模式下会将路径格式化为 #! 开头。
var router = new VueRouter({
	// mode: 'history', // hash: 使用 URL hash 值来作路由。支持所有浏览器，包括不支持 HTML5 History Api 的浏览器。history: 依赖 HTML5 History API 和服务器配置。
 //    scrollBehavior(to, from, savePosition) {   // 前进或后退,滚动到原来的位置
 //        if (savePosition) {
 //            return savePosition
 //        } else {
 //            return {
 //                x: 0,
 //                y: 0,
 //            }
 //        }
 //    },
 	// linkExactActiveClass: 'active',//统一配置路由激活时的类名
	routes: [
		...routes
	]
})

router.beforeEach((to, from, next) => {
	// console.log(3)
	//判断是否需要登录
	if (to.matched.some(record => record.meta.auth)) {
		//如果还没有登录
		console.log('请先登录')
		// 没有登录，重定向到登录页面
		next({
			path: '/login'
		})
		// 如果已经登录
	}
	// 不需要登录
    if (to.fullPath == '/') { 
        next('/home')
    }
    else {
        next()
    }
})
// 路由导航执行顺序
// router.beforeResolve((to,from,next) => {
// 	console.log(7)
// 	next()
// })
// router.afterEach((to,from,next) => {
// 	console.log(8)
// })
new Vue({
	router,
	render: (h) => h(App)
}).$mount('#app')
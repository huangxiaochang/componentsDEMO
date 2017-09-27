import Vue from 'vue'
import App from './app.vue'
import VueRouter from 'vue-router'
import routes from './routes'
import Component from './components'

// 注册vue全局组件
Vue.use(Component)
//注册vue路由
Vue.use(VueRouter)
// 创建vue实例

// 在创建的 router 对象中，如果不配置 mode，就会使用默认的 hash 模式，该模式下会将路径格式化为 #! 开头。
var router = new VueRouter({
	//mode: 'history', // hash: 使用 URL hash 值来作路由。支持所有浏览器，包括不支持 HTML5 History Api 的浏览器。history: 依赖 HTML5 History API 和服务器配置。
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
	routes: [
		...routes
	]
})

router.beforeEach((to, from, next) => {
    if (to.fullPath == '/') {
        next('/home')
    }
    else {
        next()
    }
})

new Vue({
	router,
	render: (h) => h(App)
}).$mount('#app')
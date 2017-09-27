const Home = resolve => require(['views/home/index.vue'], resolve) // 首页
const Order = resolve => require(['views/order/index.vue'], resolve) // 订单首页

export default [
	{
		path: '/home',
		name: 'home',
		component: Home,
		meta: {
			title: '首页'
		}
	},
	{
		path: '/order',
		name: 'order',
		component: Order,
		meta: {
			title: '订单管理首页'
		}
	}
]
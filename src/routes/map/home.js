const Order = resolve => require(['views/order/index.vue'], resolve) // 订单首页

export default [
	{
		path: '/home',
		name: 'Home',
		meta: {
			title: '首页'
		}
	},
	{
		path: '/order',
		name: 'Order',
		component: Order,
		meta: {
			title: '订单首页'
		}
	}
]
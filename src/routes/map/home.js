const Home = resolve => require(['views/home/index.vue'], resolve) // 首页
const VerticalMenu = resolve => require(['views/menu/verticalMenu/index.vue'], resolve) // 垂直菜单

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
		path: '/verticalMenu',
		name: 'verticalMenu',
		component: VerticalMenu,
		meta: {
			title: '垂直菜单'
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
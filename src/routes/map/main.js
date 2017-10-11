const Home = resolve => require(['views/home/index.vue'], resolve) // 首页
const VerticalMenu = resolve => require(['views/menu/verticalMenu/index.vue'], resolve) // 垂直菜单

const Region = resolve => require(['views/region/index.vue'], resolve) // 省市区
const Calendar = resolve => require(['views/calendar/index.vue'], resolve) // 日历

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
		path: '/region',
		name: 'region',
		component: Region,
		meta: {
			title: '省市区'
		}
	},
	{
		path: '/calendar',
		name: 'calendar',
		component: Calendar,
		meta: {
			title: '日历面板'
		}
	}
]
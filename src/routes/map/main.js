const Home = resolve => require(['views/home/index.vue'], resolve) // 首页
const VerticalMenu = resolve => require(['views/menu/verticalMenu/index.vue'], resolve) // 垂直菜单

const Region = resolve => require(['views/region/index.vue'], resolve) // 省市区
const Calendar = resolve => require(['views/calendar/index.vue'], resolve) // 日历
const MonthSelect = resolve => require(['views/monthSelect/index.vue'], resolve) // 年月选择组件
const Tree = resolve => require(['views/tree/index.vue'], resolve) // 树形控件

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
	},
	{
		path: '/monthSelect',
		name: 'monthSelect',
		component: MonthSelect,
		meta: {
			title: '日历面板'
		}
	},
	{
		path: '/tree',
		name: 'tree',
		component: Tree,
		meta: {
			title: '树形组件'
		}
	}
]
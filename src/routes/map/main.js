const Home = resolve => require(['views/home/index.vue'], resolve) // 首页
const VerticalMenu = resolve => require(['views/menu/verticalMenu/index.vue'], resolve) // 垂直菜单

const Region = resolve => require(['views/region/index.vue'], resolve) // 省市区
const Calendar = resolve => require(['views/calendar/index.vue'], resolve) // 日历
const MonthSelect = resolve => require(['views/monthSelect/index.vue'], resolve) // 年月选择组件
const Tree = resolve => require(['views/tree/index.vue'], resolve) // 树形控件
const TimePack = resolve => require(['views/timePack/index.vue'], resolve) // 树形控件
const DateTimePack = resolve => require(['views/dateTimePack/index.vue'], resolve) // 日期时间选择组件
const Steps = resolve => require(['views/steps/index.vue'], resolve) // 步骤条组件
const Cascader = resolve => require(['views/cascader/index.vue'], resolve) // 级联选择组件

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
	},
	{
		path: '/timePack',
		name: 'timePack',
		component: TimePack,
		meta: {
			title: '时间选择组件'
		}
	},
	{
		path: '/dateTimePack',
		name: 'dateTimePack',
		component: DateTimePack,
		meta: {
			title: '日期时间选择组件'
		}
	},
	{
		path: '/steps',
		name: 'steps',
		component: Steps,
		meta: {
			title: '步骤条组件'
		}
	},
	{
		path: '/cascader',
		name: 'cascader',
		component: Cascader,
		meta: {
			title: '级联选择组件'
		}
	},
	// 重定向,就是路由不正确的时候，会跳转到指定的重定向的页面
	{
		path: '*',
		name: 'noFind',
		// redirect: '/home',
		redirect: (to) => {
			console.log(to,'to')
			// 可以进行条件跳转
			// if (to.path === '/timePack2') {
			// 	console.log('发生了重置定向',404)
			// 	return '/home'
			// }
			return '/home'
		},
		meta: {
			title: '出错了，找不到页面！'
		},
		// component: Home
	}
]
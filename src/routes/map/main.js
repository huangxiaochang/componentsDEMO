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
const Tabs = resolve => require(['views/tabs/index.vue'], resolve) // 标签页组件
const Loading = resolve => require(['views/loading/index.vue'], resolve) // 加载组件
const Upload = resolve => require(['views/upload/index.vue'], resolve) // 上传组件
const Download = resolve => require(['views/download/index.vue'], resolve) // 上传组件
const Pagination = resolve => require(['views/pagination/index.vue'], resolve) // 分页组件

export default [
	{
		path: '/home',
		name: 'home',
		component: Home,
		// alias: ['/index','/ind'], //路由别名
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
		},
		// beforeEnter(to,from,next) {
		// 	console.log(5)
		// 	next()
		// }
	},
	{
		path: '/region',
		// props: (route) => {
		// 	console.log(route,5)
		// 	return ({
		// 		query: route.query.q
		// 	})
		// },  //向路由组件传递props(可以为对象模式，布尔模式，函数模式),然后再组件的props: ['query'],即可拿到数据
		name: 'region',
		component: Region,
		meta: {
			title: '省市区',
			auth: true
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
	{
		path: '/tabs',
		name: 'tabs',
		component: Tabs,
		meta: {
			title: '标签页组件'
		}
	},
	{
		path: '/loading',
		name: 'loading',
		component: Loading,
		meta: {
			title: '加载组件'
		}
	},
	{
		path: '/upload',
		name: 'upload',
		component: Upload,
		meta: {
			title: '上传组件'
		}
	},
	{
		path: '/download',
		name: 'download',
		component: Download,
		meta: {
			title: '下载组件'
		}
	},
	{
		path: '/pagination',
		name: 'pagination',
		component: Pagination,
		meta: {
			title: '分页组件'
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
import verticalMenu from './verticalMenu/index.vue' //菜单
import region from './region/index.vue'  //省市区
import calendar from './calendar/index.vue'  //日历
import monthSelect from './monthSelect/index.vue'  //年月选择
import tree from './tree/index.vue'  //树形选择
import timePack from './timePack/index.vue'  //时间选择组件


const install = function(Vue) {
	Vue.component(verticalMenu.name, verticalMenu)
	Vue.component(region.name, region)
	Vue.component(calendar.name, calendar)
	Vue.component(monthSelect.name, monthSelect)
	Vue.component(tree.name, tree)
	Vue.component(timePack.name, timePack)

}
export default install
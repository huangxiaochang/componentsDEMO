import verticalMenu from './verticalMenu/index.vue' //菜单
import region from './region/index.vue'  //省市区
import calendar from './calendar/index.vue'  //日历
import monthSelect from './monthSelect/index.vue'  //年月选择
import tree from './tree/index.vue'  //树形选择
import timePack from './timePack/index.vue'  //时间选择组件
import dateTimePack from './dateTimePack/index.vue'  //日期时间选择组件
import steps from './steps/index.vue'  //步骤条
import cascader from './cascader/index.vue'  //级联选择器
import tabs from './tabs/index.vue'  //标签页
import loading from './loading/index.vue'  //loading
import upload from './upload/upload.vue'  //上传组件
import pagination from './pagination/index.vue'  //分页组件


const install = function(Vue) {
	Vue.component(verticalMenu.name, verticalMenu)
	Vue.component(region.name, region)
	Vue.component(calendar.name, calendar)
	Vue.component(monthSelect.name, monthSelect)
	Vue.component(tree.name, tree)
	Vue.component(timePack.name, timePack)
	Vue.component(dateTimePack.name, dateTimePack)
	Vue.component(steps.name, steps)
	Vue.component(cascader.name, cascader)
	Vue.component(tabs.name, tabs)
	Vue.component(loading.name, loading)
	Vue.component(upload.name, upload)
	Vue.component(pagination.name, pagination)

}
export default install
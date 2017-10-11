import verticalMenu from './verticalMenu/index.vue'
import region from './region/index.vue'
import calendar from './calendar/index.vue'

const install = function(Vue) {
	Vue.component(verticalMenu.name, verticalMenu)
	Vue.component(region.name, region)
	Vue.component(calendar.name, calendar)
}
export default install
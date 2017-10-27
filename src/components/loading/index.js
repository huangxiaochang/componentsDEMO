export default {
	name: 'PgLoading',
	props: {
		tabsList: Array,
		title: String
	},
	data() {
		return {
			active: 0
		}
	},
	mounted() {
		this.loading()
	},
	methods: {
		// 控制刻度类型的loading的样式
		loading() {
			let self = this
			setInterval(function() {
				self.active++
				if (self.active >= 11) {
					self.active = 0
				}			
			},80)
		}
	}
}
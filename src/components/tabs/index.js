export default {
	name: 'PgTabs',
	props: {
		tabsList: Array,
		active: {
			type: Number,
			default() {
				return 0
			}
		},
		type: {
			type: String,
			default() {
				return 'basic'
			}
		},
		styles: Object
	},
	data() {
		return {
			activeTab: 0
		}
	},
	mounted() {
		this.activeTab = this.active
	},
	methods: {
		// 标签页改变
		hanlderClick(item,index) {
			this.activeTab = index
			this.$emit('hanlderClick', item)
		}
	}
}
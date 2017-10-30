export default {
	name: 'PgPagination',
	props: {
		size: { 
			type: Number,
			default: 15
		},
		total: {
			type: Number,
			default: 0,
		}
	},
	data() {
		return {
			pageSize: 0,
			sizeList: [
				{
					title: '15条/页',
					value: 15
				},
				{
					title: '30条/页',
					value: 30
				},
				{
					title: '50条/页',
					value: 50
				},
				{
					title: '100条/页',
					value: 100
				}
			],
			pageCount: 0,
			activeSize: 0,
		}
	},
	watch: {
		// 页面条数改变
		pageSize() {
			console.log(this.pageSize)
			this.$emit('pageSizeChange',this.pageSize)
		}
	},
	mounted() {
		this.init()
	},
	methods: {
		// 初始化
		init() {
			// 初始化每页条数
			if (this.size <= 15) {
				this.pageSize = 15
				this.activeSize = 0
			}
			else if (this.size <= 30) {
				this.pageSize = 30
				this.activeSize = 1
			}
			else if (this.size <= 50) {
				this.pageSize = 50
				this.activeSize = 2
			}
			else {
				this.pageSize = 100
				this.activeSize = 3
			}
			// 获取页数
			let count = 0
			this.pageCount = Math.ceil(this.total/this.pageSize)
		},
		// 每页条数改变
		sizeChange(index) {
			this.activeSize = index
		},
		/*上一页*/
		prePage() {

		},
		// 上一页
		nextPage() {

		}
	}
}
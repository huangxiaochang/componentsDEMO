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
			active: 1,//当前页
			activePage: [],//动态页
			preDot: false,//向前的点
			nextDot: false,//向后的点
		}
	},
	watch: {
		// 页面条数改变
		pageSize() {
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
			}
			else if (this.size <= 30) {
				this.pageSize = 30
			}
			else if (this.size <= 50) {
				this.pageSize = 50
			}
			else {
				this.pageSize = 100
			}
			// 获取页数
			this.pageCount = Math.ceil(this.total/this.pageSize)
			//控制显示的页数
			if (this.pageCount > 6) {
				for(let i=2; i<7;i++) {
					this.activePage.push(i)
				}
				this.nextDot = true
				console.log(this.activePage)
			}
		},
		// 每页条数改变
		sizeChange(size) {
			
		},
		// 当前页的变化
		pageChange(index) {
			this.active = index
		},
		/*上一页*/
		prePage() {
			--this.active
			// 只在页面多于指定显示页数(6)、目前页是最后一页的前4页之前的页数和目前页大于前4页时，进行页面的省略操作
			if (this.active < this.pageCount - 3 && this.pageCount > 6 && this.active > 3) {
				this.nextDot = true
				this.activePage.pop()
				this.activePage.unshift(this.active-2)
				if (this.active === 4) {
					this.preDot = false
				}
			}
		},
		// 下一页
		nextPage() {
			++this.active
			// 只在页面多于指定显示页数(6)、目前页是最后一页的前4页之前的页数和目前页大于前4页时，进行页面的省略操作
			if ( this.active > 4 && this.pageCount > 6 && this.active+2 < this.pageCount) {
				this.preDot = true
				this.activePage.shift()
				this.activePage.push(this.active+2)
			}
			// 目前页是最后一页的前4页时，隐藏下一页的省略号
			if (this.active > this.pageCount - 4) {
				this.nextDot = false
			}
		},
		// 上一批活动页
		preActivePage() {
			this.active -= 5
			this.activePage = []
			// 目前页小于最后一页的前4页时，显示下一页的省略号
			if (this.active < this.pageCount - 4) {
				this.nextDot = true
			}
			else {
				this.nextDot = false
			}
			// 目前页大于最后一页的前4页时，显示下一页的省略号
			if (this.active >  4) {
				this.preDot = true
			}
			else {
				this.preDot = false
			}
			if (this.active - 2 <= 1) {
				for(let i = 2; i < 7; i++) {
					this.activePage.push(i)
				}
			}
			else {
				for(let i = this.active - 2; i < this.active + 3; i++) {
					this.activePage.push(i)
				}
			}
		},
		// 下一批活动页
		nextActivePage() {
			this.active += 5
			this.activePage = []
			// 目前页小于最后一页的前4页时，显示下一页的省略号
			if (this.active < this.pageCount - 4) {
				this.nextDot = true
			}
			else {
				this.nextDot = false
			}
			// 目前页大于最后一页的前4页时，显示下一页的省略号
			if (this.active >  4) {
				this.preDot = true
			}
			else {
				this.preDot = false
			}
			if (this.active + 3 > this.pageCount) {
				for(let i = this.pageCount - 6 ; i < this.pageCount - 1 ; i++) {
					this.activePage.push(i)
				}
			}
			else {
				for(let i = this.active - 2; i < this.active + 3; i++) {
					this.activePage.push(i)
				}
			}
		}
	}
}
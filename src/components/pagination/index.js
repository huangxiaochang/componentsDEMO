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
		},
		isShowSize: {
			type: Boolean,
			default: true
		},
		isGoTo: {
			type: Boolean,
			default: true
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
			gotoPage: 1,//前往的页数
		}
	},
	watch: {
		// 页面条数改变
		pageSize() {
			this.$emit('pageSizeChange',this.pageSize)
			// 改变页数
			this.pageCount = Math.ceil(this.total/this.pageSize)
			this.active = 1
			this.nextDot = false
			this.preDot = false
			this.activePage = []
			this.gotoPage = 1
			//控制显示的页数
			if (this.pageCount > 7) {
				for(let i=2; i < 7;i++) {
					this.activePage.push(i)
				}
				this.nextDot = true
			}
			else {
				for(let i=2; i < this.pageCount ;i++) {
					this.activePage.push(i)
				}
				this.nextDot = false
			}
		},
		// 当前页改变的时候，触发事件
		active() {
			this.$emit('pageChange', this.active)
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
			if (this.pageCount > 7) {
				for(let i=2; i < 7;i++) {
					this.activePage.push(i)
				}
				this.nextDot = true
			}
			else {
				for(let i=2; i < this.pageCount ;i++) {
					this.activePage.push(i)
				}
				this.nextDot = false
			}
		},
		// 当前页的变化
		activePageChange(index) {
			this.active = index
			this.gotoPage = 1
			// 更新当前活动页列表
			this.handlerPageChange()
		},
		// 当前页变化时，处理当前活动页列表的函数
		handlerPageChange() {
			if (this.pageCount > 7) {
				if (this.active > 4 && this.active < this.pageCount-3) {
					this.preDot = true
					this.nextDot = true
					this.activePage = []
					for(let i=this.active-2; i < this.active+3 ;i++) {
						this.activePage.push(i)
					}
				}
				else if(this.active <= 4){
					this.preDot = false
					this.nextDot = this.pageCount > 7
					this.activePage = []
					let min = (this.pageCount > 7 ? 7 : this.pageCount)*1
					for(let i = 2; i < min;i++) {
						this.activePage.push(i)
					}
				}
				else {
					this.nextDot = false
					this.preDot = true
					this.activePage = []
					for(let i = this.pageCount-5; i < this.pageCount;i++) {
						this.activePage.push(i)
					}
				}
			}
		},
		/*上一页*/
		prePage() {
			--this.active
			this.gotoPage = 1
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
			this.gotoPage = 1
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
			this.gotoPage = 1
			if (this.active < 1) {
				this.active = 1
			}
			this.activePage = []
			// 目前页小于最后一页的前4页时，显示下一页的省略号
			if (this.active < this.pageCount - 4 && this.pageCount > 7) {
				this.nextDot = true
			}
			else {
				this.nextDot = false
			}
			// 目前页大于最后一页的前4页时，显示下一页的省略号
			if (this.active >  4 && this.pageCount > 7) {
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
			this.gotoPage = 1
			if (this.active > this.pageCount) {
				this.active = this.pageCount
			}
			this.activePage = []
			// 目前页小于最后一页的前4页时，显示下一页的省略号
			if (this.active < this.pageCount - 4 && this.pageCount > 7) {
				this.nextDot = true
			}
			else {
				this.nextDot = false
			}
			// 目前页大于最后一页的前4页时，显示下一页的省略号
			if (this.active >  4 && this.pageCount > 7) {
				this.preDot = true
			}
			else {
				this.preDot = false
			}
			if (this.active + 3 > this.pageCount) {
				for(let i = this.pageCount - 6 ; i < this.pageCount ; i++) {
					this.activePage.push(i)
				}
			}
			else {
				for(let i = this.active - 2; i < this.active + 3; i++) {
					this.activePage.push(i)
				}
			}
		},
		// 跳转到其他页
		gotoOther() {
			if (typeof this.gotoPage !== 'number') {
				return
			}
			this.active = this.gotoPage
			if (this.active > this.pageCount) {
				this.active = this.pageCount
			}
			if (this.active < 1) {
				this.active = 1
			}
			this.handlerPageChange()
		}
	}
}
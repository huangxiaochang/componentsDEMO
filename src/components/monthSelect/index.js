export default {
	name: 'PgMonthSelect',
	props: {
		styles: {
			type: Object,
			default() {
				return {}
			}
		},
		value: {
			type: String,
			default() {
				return ''
			}
		}
	},
	data() {
		return {
			currentYear: '',//当前年份
			currentMonth: '',//当前月份
			nowYear: '',//目前年份
			nowMonth: '',//目前月份
			show: false,
			monthList: [
				{
					text: '一月',
					value: '01'
				},
				{
					text: '二月',
					value: '02'
				},
				{
					text: '三月',
					value: '03'
				},
				{
					text: '四月',
					value: '04'
				},
				{
					text: '五月',
					value: '05'
				},
				{
					text: '六月',
					value: '06'
				},
				{
					text: '七月',
					value: '07'
				},
				{
					text: '八月',
					value: '08'
				},
				{
					text: '九月',
					value: '09'
				},
				{
					text: '十月',
					value: '10'
				},
				{
					text: '十一月',
					value: '11'
				},
				{
					text: '十二月',
					value: '12'
				}
			]
		}
	},
	created() {
		// 点击文档其他的地方的时候，隐藏面板
        document.addEventListener('click', (e) => {
        	let source1 = this.$el.childNodes[2]
        	let source2 = this.$el.childNodes[0]
            if (!source1.contains(e.target) && !source2.contains(e.target)) {
                this.show = false
            }
        })
	},
	watch: {
		show() {
			if (this.show) {
				// 获取目前的年月
				let date = new Date()
				this.nowYear = date.getFullYear()
				this.nowMonth = this.formatDate(date.getMonth()+1)
				this.currentYear = this.nowYear
				this.currentMonth = this.nowMonth
			}
		}	
	},
	methods: {
		// 格式化年月格式，如2017-09
		formatDate(month) {
			if (month < 10) {
				month = "0"+month
			}
			return month
		},
		// 触发上一个月
		pre(currentYear) {
			this.currentYear -= 1
			if (this.currentYear === 1970) {
				this.currentYear = 1970
			}
		},
		// 触发下一个月
		next(currentYear) {
			this.currentYear += 1
		},
		// 选择某一个年月
		pick(month) {
			// 事件触发的方式绑定数据
			// this.$emit('picmonth', `${this.currentYear}-${month.value}`)
			// 双向数据绑定的方式
			this.$emit('update:value', `${this.currentYear}-${month.value}`)
			this.show = false
		},
		// 弹出面板
		showDate() {
			this.show = true
		}
	}
}
export default {
	name: 'PgDateTime',
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
		},
	},
	data() {
		return {
			currentYear: '',//当前年份
			currentMonth: '',//当前月份
			currentDay: '',//当前的日期
			currnentWeek: '',//当前的星期
			nowYear: '',//目前年份
			nowMonth: '',//目前月份
			nowDay: '',//目前日期
			dayList: [],//日期列表
			yearMonth: '',//年月
			show: false,//面板的隐藏和显示
			time: '',//时间
			date: '',//日期
		}
	},
	watch: {
		// 通过年月选择面板更改年月的时候，重新获取日历和更新目前选择到的日期
		yearMonth() {
			if (this.yearMonth !== '') {
				let arr = this.yearMonth.split('-')
				this.currentYear = arr[0]
				this.currentMonth = arr[1]
				this.date = `${arr[0]}-${arr[1]}-${this.formatNumber(this.date.substring(9,11))}`
				this.initDate(`${arr[0]}-${arr[1]}`)
			}
		}
	},
	created() {
		// 点击文档其他的地方的时候，隐藏面板
		document.addEventListener('click',(ev) => {
			if (!this.$el.contains(ev.target)) {
                this.show = false
            }
		})
	},
	mounted() {
		// 获取目前的年、月、日
		let date = new Date()
		this.nowYear = date.getFullYear()
		this.nowMonth = date.getMonth()
		this.nowDay = date.getDate()

		// 初始化日历日期
		if (this.value === '') {
			this.date = `${this.formatDate(this.nowYear,this.nowMonth+1,this.nowDay)}`
			this.time = `${this.formatNumber(date.getHours())}:${this.formatNumber(date.getMinutes())}:${this.formatNumber(date.getSeconds())}`
		}
		else {
			this.date = this.value.substring(0,10)
			this.time = this.value.substring(11,18)
		}
		this.initDate(this.value)
	},
	methods: {
		// 初始化日期
		initDate(current) {
			let date;
			// 有传初始时间的以传入的初始化日历面板，否则以当前月1号初始化
			if (current !== '') {
				let arr = current.split('-')
				date = new Date(arr[0], (arr[1]-1), 1)
			}
			else {
				date = new Date(this.nowYear, this.nowMonth, 1)
			}
			// 获取当前的年、月、日、星期
			this.currentYear = date.getFullYear()
			this.currentMonth = date.getMonth()+1
			this.currnentWeek = date.getDay()

			// 把星期天转化成7
			if (this.currnentWeek === 0) {
				this.currnentWeek = 7
			}						
			// 先清空之前的日历面板
			this.dayList.length = 0
			
			// 把当前日期之前的日期放入dayList中
			for (let i = this.currnentWeek-1; i >= 0; i--) {
				let d = new Date(date)
				d.setDate(d.getDate() - i)
				this.dayList.push(d)
			}
			// 获取一个月天数
			let dayNum = new Date(this.currentYear, this.currentMonth, 0).getDate()
			// 获取需要的行数
			let first = 0
			this.currnentWeek == 7 ? first = 1 : first = 8-this.currnentWeek
			let row = 1+ Math.ceil((dayNum-first)/7)
			
			// 把当前日期之后的日期放入dayList中
			for (let i = 1; i <= row*7 - this.currnentWeek; i++) {
				let d = new Date(date)
				d.setDate(d.getDate() + i)
				this.dayList.push(d)
			}
		},
		// 格式化时间格式，如2017-09-08
		formatDate(year, month, day) {
			if (month < 10) {
				month = "0"+month
			}
			if (day < 10) {
				day = "0"+day
			}
			return `${year}-${month}-${day}`
		},
		// 格式化时间
		formatNumber(number) {
			if (number < 10) {
				number = "0"+number
			}
			return number
		},
		// 上一个月
		pre(currentYear, currentMonth) {
			currentMonth -= 1
			if (currentMonth <= 0) {
				currentMonth = 12
				currentYear -= 1
			}
			this.initDate(`${currentYear}-${currentMonth}`)
			// 更新目前选择的值
			this.date = `${currentYear}-${this.formatNumber(currentMonth)}-${this.formatNumber(this.date.substring(9,11))}`
		},
		// 下一个月
		next(currentYear, currentMonth) {
			currentMonth += 1
			if (currentMonth > 12) {
				currentMonth = 1
				currentYear += 1
			}
			this.initDate(`${currentYear}-${currentMonth}`)
			// 更新目前选择到的值
			this.date = `${currentYear}-${this.formatNumber(currentMonth)}-${this.formatNumber(this.date.substring(9,11))}`
		},
		// 点击某一日时，更新选择到的日期
		pick(day) {
			this.date = this.formatDate(day.getFullYear(),(day.getMonth()+1),day.getDate())
		},
		// 控制面板的弹出
		showPack() {
			this.show = true
		},
		// 关闭面板
		close() {
			this.show = false
		},
		// 确定选择的日期和时间
		save() {
			this.$emit('update:value',`${this.date} ${this.time}`)
			this.close()
		}
	}
}
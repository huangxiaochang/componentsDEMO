export default {
	name: 'PgTimePack',
	data() {
		return {
			hour: '',
			minute: '',
			second: ''
		}
	},
	methods: {
		// 格式化时间
		formatTime(number) {
			if (number <10) {
				return `0${number}`
			}
			return `${number}`
		},
		save() {
			let hourElement = this.$el.querySelector('.hours')
			let minuteElement = this.$el.querySelector('.minutes')
			let secondElement = this.$el.querySelector('.seconds')
			// 获取滚动条滚动的位置
			let hourPos =  Math.floor(hourElement.scrollTop/20)
			let minutePos =  Math.floor(minuteElement.scrollTop/20)
			let secondPos =  Math.floor(secondElement.scrollTop/20)
			console.log(hourPos, 'h')
		}
	}
}
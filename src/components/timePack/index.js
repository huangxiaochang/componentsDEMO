export default {
	name: 'PgTimePack',
	props: {
		value: {
			type: String,
			default() {
				return ''
			}
		}
	},
	data() {
		return {
			hour: '',
			minute: '',
			second: '',
			hourElement: '',
			minuteElement: '',
			secondElement: '',
			show: false
		}
	},
	created() {
		// 点击文档其他的地方的时候，隐藏面板
        document.addEventListener('click', (e) => {
            if (!this.$el.contains(e.target)) {
                this.show = false
            }
        })
	},
	watch: {
		show() {
			if (this.show) {
				this.initData()
			}
		}
	},
	methods: {
		// 初始化
		initData() {
			if (this.value) {
				let arr = this.value.split(':')
				this.hour = arr[0]
				this.minute = arr[1]
				this.second = arr[2]
			}
			else {
				let date = new Date()
				this.hour = date.getHours()
				this.minute = date.getMinutes()
				this.second = date.getSeconds()
			}
			this.hourElement = this.$el.querySelector('.hours')
			this.minuteElement = this.$el.querySelector('.minutes')
			this.secondElement = this.$el.querySelector('.seconds')
			this.hourElement.scrollTo(0,20*this.hour)
			this.minuteElement.scrollTo(0,this.minute*20)
			this.secondElement.scrollTo(0,this.second*20)
		},
		// 格式化时间
		formatTime(number) {
			if (number <10) {
				return `0${number}`
			}
			return `${number}`
		},
		// 点击确定的时候，通过滚动条的滚动的距离，计算选择到的时间
		save() {
			this.hourElement = this.$el.querySelector('.hours')
			this.minuteElement = this.$el.querySelector('.minutes')
			this.secondElement = this.$el.querySelector('.seconds')
			// 获取滚动条滚动的位置
			this.hour =  Math.round(this.hourElement.scrollTop/20)
			this.minute =  Math.round(this.minuteElement.scrollTop/20)
			this.second =  Math.round(this.secondElement.scrollTop/20)
			let value = `${this.formatTime(this.hour)}:${this.formatTime(this.minute)}:${this.formatTime(this.second)}`
			this.$emit('update:value',value)
			this.show = false
		},
		// 点击每一项时滑动到选中的位置
		scrollToPos(event) {
			// 获取点击的元素的位置
			let pos = parseInt(event.target.innerHTML)
			let parent = event.target.parentNode
			parent.scrollTo(0,20*pos)
		},
		// 关闭面板
		close() {
			this.show = false
		},
		// 控制显示和隐藏
		showTimePack() {
			this.show = true
		}
	}
}
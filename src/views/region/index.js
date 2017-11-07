export default {
	data() {
		return {
			state: '',
			city: '',
			district: '',
			style: {
				'margin-left': '60px'
			},
			list: [
				{
					status: '1',
					bengin: '2017-10-20 08:00:00',
					end: '2017-10-21 23:59:59'
				},
				{
					status: '2',
					bengin: '2017-10-23 10:30:00',
					end: '2017-10-24 12:00:00'
				},
				{
					status: '3',
					bengin: '2017-10-18 09:00:00',
					end: '2017-10-20 18:00:00'
				}
			],
			timer: []
		}
	},
	mounted() {
		this.changeData()
	},
	// beforeRouteLeave(to,from,next) {
	// 	console.log(2)
	// 	next()
	// },
	// beforeRouteUpdate(to,from,next) {
	// 	console.log(4)
	// 	next()
	// },
	methods: {
		changeData() {
			let self = this
			// this.timer = setInterval(function() {
			// 	let remainTime = ''
			// 	remainTime = self.getRemainTime(end)
			// 	self.list.forEach((item) => {
			// 		self.$set(item,'remainTime',remainTime)
			// 	})
				
			// },1000)
			this.list.forEach((good,index) => {
				let bengin = new Date(good.bengin)
				let end = new Date(good.end)
				let now = new Date()
				// 未开始
				if (now < bengin) {
					good.status = '未开始'
					let flag = 0
					this.timer[index] = setInterval(function() {
						let remainTime = ''
						remainTime = self.getRemainTime(bengin,index,flag)
						self.$set(good,'remainTime',remainTime)
					},1000)
				}
				else if (now < end) {
					good.status = '正在进行'
					let flag = 1
					this.timer[index] = setInterval(function() {
						let remainTime = ''
						remainTime = self.getRemainTime(end,index,flag)
						self.$set(good,'remainTime',remainTime)
					},1000)
				}
				else {
					good.status = '已结束'
					good.remainTime = `结束时间${good.end}`
				}
			})
		},
		getRemainTime(end,index,flag) {
			let endTime = new Date(end)
			let now = new Date()
			let remainSeconds = Math.floor((endTime.getTime()-now.getTime())/1000)
			if (remainSeconds === 0) {
				clearInterval(this.timer[index])
				return
			}
			// let day = Math.floor(remainSeconds/60/60/24)
			// let hours = Math.floor((remainSeconds/3600))-(day*24)
			// let minutes = Math.floor(remainSeconds/60)-(day*24*60)-(hours*60)
			// let seconds = Math.floor(remainSeconds-day*24*60*60-hours*60*60-minutes*60)
			let hours = Math.floor(remainSeconds/3600)
			let minutes = Math.floor(remainSeconds/60)-hours*60
			let seconds = Math.floor(remainSeconds-hours*3600-minutes*60)
			let str = ''
			if (flag === 0) {
				str = '距离开始时间还有：'
			}
			else if (flag === 1) {
				str = '距离结束时间还有：'
			}
			return `${str}${this.formatTime(hours)}小时${this.formatTime(minutes)}分${this.formatTime(seconds)}秒`
		},
		formatTime(number) {
			if (number < 10) {
				number = `0${number}`
			}
			return number
		}
	}
}
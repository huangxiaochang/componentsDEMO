
export default {
	name: 'PgCascader',
	props: {
		dataList: Array,
		value: Array,
		id: Array
	},
	data() {
		return {
			show: false,
			secondLevel: [],
			thirdLevel: [],
			showSecondLevel: false,
			showThirdLevel: false,
			firstActive: -1,
			secondActive: -1,
			thirdActive: -1,
		}
	},
	watch: {
		show() {
			if (this.show) {
				if (this.id.length !== 0) {
					// 以id进行初始化选择的状态
					this.dataList.forEach((item,index) => {
						if (this.id[0] === item.id) {
							this.firstActive = index
							if (item.children) {
								this.showSecondLevel = true
								this.secondLevel = item.children
								item.children.forEach((item1,index1) => {
									if (this.id[1] === item1.id) {
										this.secondActive = index1
										if (item1.children) {
											this.showThirdLevel = true
											this.thirdLevel = item1.children
											item1.children.forEach((item2,index2) => {
												if (item2.id === this.id[2]) {
													this.thirdActive = index2
												}
											})
										}
									}
								})
							}
						}
					})
				}
				else {
					if (this.value.length !== 0) {
						// 以value进行初始化选择的状态
						this.dataList.forEach((item,index) => {
							if (this.value[0] === item.title) {
								this.firstActive = index
								if (item.children) {
									this.showSecondLevel = true
									this.secondLevel = item.children
									item.children.forEach((item1,index1) => {
										if (this.value[1] === item1.title) {
											this.secondActive = index1
											if (item1.children) {
												this.showThirdLevel = true
												this.thirdLevel = item1.children
												item1.children.forEach((item2,index2) => {
													if (item2.title === this.value[2]) {
														this.thirdActive = index2
													}
												})
											}
										}
									})
								}
							}
						})
					}
				}
			}
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
	methods: {
		showDialog() {
			this.show = true
		},
		showNextLevel(item,index,level) {
			if (level === 2) {
				this.firstActive = index
				this.value[0] = item.title
				this.value.splice(1,this.value.length)
				this.id[0] = item.id
				this.id.splice(1,this.id.length)
				if (item.children) {
					this.showSecondLevel = true
					this.secondLevel = item.children
					this.showThirdLevel = false
					this.thirdLevel = []
				}
				else {
					this.showSecondLevel = false
					this.secondLevel = []
					this.showThirdLevel = false
					this.thirdLevel = []
					// this.$emit('update:value',`${this.value[0]}`)
					this.$emit('update:id',this.id)
					this.$emit('update:value',this.value)
					this.show = false
				}
				
			}
			else if (level === 3) {
				this.secondActive = index
				this.value[1] = item.title
				this.value.splice(2,this.value.length)
				this.id[1] = item.id
				this.id.splice(2,this.id.length)
				if (item.children) {
					this.showThirdLevel = true
					this.thirdLevel = item.children
				}
				else {
					this.showThirdLevel = false
					this.thirdLevel = []
					// this.$emit('update:value',`${this.value[0]}/${this.value[1]}`)
					this.$emit('update:value',this.value)
					this.$emit('update:id',this.id)
					this.show = false
				}
			}
			else {
				this.thirdActive = index
				this.value[2] = item.title
				this.id[2] = item.id
				// this.$emit('update:value',`${this.value[0]}/${this.value[1]}/${this.value[2]}`)
				this.$emit('update:value',this.value)
				this.$emit('update:id',this.id)
				this.show = false
			}
		}
	}
}
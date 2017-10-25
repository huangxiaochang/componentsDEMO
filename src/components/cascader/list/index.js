export default {
	name: 'Cascader',
	props: {
		list: Array
	},
	data() {
		return {
			
		}
	},
	methods: {
		showChildren(item,list) {
			// 如果获取选择到的值
			// if (item.class === 1) {
			// 	console.log(item,8)
			// 	this.$emit('getValue',item.title)	
			// }
			this.$emit('getValue',item)	
			// 改变下一级的显示和隐藏
			list.forEach((item1) => {
				if (item.id === item1.id) {
					if (item.children) {
						this.$set(item,'isShowChildren', true)
					}
					else {
						this.$set(item,'isShowChildren', false)
					}
				}
				else {
					this.$set(item1,'isShowChildren', false)
				}
			})
			
		},
		getValue(val) {
			this.$emit('getValue',val)
		}
	}
}
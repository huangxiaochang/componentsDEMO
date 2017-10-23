export default {
	name: 'PgTree',
	props: {
		treeData: {
			type: Object,
			default() {
				return {}
			}
		},
		styles: {
			type: Object,
			default() {
				return {}
			}
		},
	},
	methods: {
		// 展开或者关闭某一层级
		append(val) {
			// 下面的数据treeData可以是请求接口获得的数据
			let treeData = {
				parent: {
					name: 'parent1',
					isexpend: true
				},
				// parent: null,
				name: 'me1',
				// children: [
				// 	{
				// 		name: 'childs',
				// 		isexpend: true
				// 	}
				// ]
				children: null
			}
			let child = val
			let self = this
			this.$nextTick(() => {
				// 可以使用set()方法，也可以使用forceUpdate()进行前强制刷新
				
				if (!child.isexpend) {
					self.$set(child, 'children', null)
				}
				else {
					self.$set(child, 'children', treeData)
				}
				self.$set(child, 'isexpend', !child.isexpend)
				
				// this.$forceUpdate()
			})
		}
	}
}
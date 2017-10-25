import Cascader from './list/index.vue'

export default {
	name: 'PgCascader',
	components: {
		Cascader
	},
	props: {
		dataList: Array
	},
	data() {
		return {
			value: [],
			id: [],
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
	methods: {
		getValue(val) {
			this.value[val.class] =  val.title
			this.id[val.class] = val.id
			this.value.splice(val.class+1,this.value.length)
			this.id.splice(val.class+1,this.value.length)
			if (val.children == null) {
				let value = ''
				this.value.forEach((item,index) => {
					value += `${item}${index === this.value.length-1 ? '' : '/'}`
				})
				this.$emit('update:value',value)
				this.show = false
			}
		},
		showDialog() {
			this.show = true
		}
	}
}
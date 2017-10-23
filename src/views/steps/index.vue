<template>
	<section>
		<h2 class="title">菜单组件 > 步骤条组件</h2>
		<h3 class="title-item">组件说明</h3>
		<p class="content-item">
			
		</p>
		<h3 class="title-item">示例</h3>
		<p class="content-item">
			在页面中引用该组件其实和其他的组件没什么不同，它的递归组件的实现方法是在组件的内部实现的，所以引用的时候，像正常的组件那样进行引用即可&lt;pg-tree :treeData="treeDate" :styles="styles"&gt;&lt;/pg-tree&gt;
			
		</p>
		<p class="content-item">
			
		</p>
		<h3 class="title-item">效果</h3>
		<p class="content-item">
			效果如下
			
		</p>
		<pg-steps :steps="data" :active="active" :direction="direction"></pg-steps>
		<button @click="pre">上一步</button>
		<button @click="next">下一步</button>
	</section>
</template>

<style type="stylesheet/less" lang="less" scoped>
	@import '~src/assets/css/common.less';
</style>

<script type="text/babel">
	export default {
		data() {
			return {
				data: [
					{
						title: '步骤1',
						description: '这是步骤1'
					},
					{
						title: '步骤2',
						description: '这是步骤2'
					},
					{
						title: '步骤3',
						description: '这是步骤3这是步骤'
					}
				],
				styles: {},
				active: 1,
				direction: 'horizontal'
			}
		},
		methods: {
			pre() {
				if (this.active <= 0) {
					this.active = 0
				}
				else {
					this.active--
				}
			},
			next() {
				if (this.active >= this.data.length) {
					this.active = this.data.length
				}
				else {
					this.active++
				}
			}
		}
	}
</script>
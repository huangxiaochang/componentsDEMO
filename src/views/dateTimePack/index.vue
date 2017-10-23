<template>
	<section>
		<h2 class="title">菜单组件 > 日期时间选择组件</h2>
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
		<p class="content-item test">
			效果如下
			<pg-date-time :value.sync="value">
				<input type="text" class="pg-time-pack" v-model="value" readonly>
			</pg-date-time>
		</p>
		
	</section>
</template>

<style type="stylesheet/less" lang="less" scoped>
	@import '~src/assets/css/common.less';
	.test {
		margin-bottom: 500px;
	}
</style>

<script type="text/babel">
	export default {
		data() {
			return {
				value: ""
			}
		}
	}
</script>
<template>
	<div class="content-wrape">
		<div class="slot" @click="showDialog">
			<slot></slot>
		</div>
		<div class="cascader-wrape">
			<cascader :list="dataList" @getValue="getValue" class="cascader" v-if="show"></cascader>
		</div>
	</div>
</template>
<style type="stylesheet/less" lang="less" scoped>
	@import '~src/assets/css/common.less';
	.content-wrape, .cascader-wrape {
		position: relative;
		.cascader {
			position: absolute;
			z-index: 20;
		}
	}
</style>
<script type="text/babel">
	import index from './index'
	export default {
		...index
	}
</script>
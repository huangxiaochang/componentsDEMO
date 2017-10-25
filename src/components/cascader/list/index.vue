<template>
	<ul class="cascader">
		<li class="cascader-item" v-for="item in list">
			<span class="title" @click="showChildren(item,list)">{{item.title}}</span>
			<span class="icon" v-if="item.children" @click="showChildren(item,list)"></span>
			<cascader :list="item.children" v-if="item.isShowChildren" class="children" @getValue="getValue"></cascader>
		</li>
	</ul>
</template>
<style type="stylesheet/less" lang="less" scoped>
	@import '~src/assets/css/common.less';
	li {
		list-style: none;
	}
	.cascader {
		position: absolute;
		display: inline-block;
		width: 150px;
		height: 250px;
		border: 1px solid rgb(205, 215, 225);
		background-color: white;
		overflow-y: auto;
		left: 0;
		top: 0;
		// &:hover {
		// 	overflow-y: scroll;
		// }
		.cascader-item {
			margin: 5px 0;
			// position: relative;
			cursor: pointer;
			.title {
				color: #000;
				font-size: 14px;
				display: inline-block;
				width: 80%;
				margin: 0;
			}
			.icon {
				display: inline-block;
				float: right;
				margin-right: 10px;
				margin-top: 6px;
				width: 0;
				height: 0;
				border-top: 4px solid transparent;
				border-bottom: 4px solid transparent;
				border-left: 8px solid rgb(195, 205, 215);
			}
			&:hover {
				background-color: rgba(215, 225, 235, 0.6);
			}
		}
	}
	.children {
		position: absolute;
		left: 150px;
		top: 0;
	}
</style>
<script type="text/babel">
	import index from './index'
	export default {
		...index
	}
</script>
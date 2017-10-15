<template>
	<section class="tree">
		<div class="parent" v-if="treeData.parent" :style="styles">
			<span class="btn" @click="append(treeData.parent)" v-if="treeData.parent.isexpend">+</span>
			<span class="btn" v-else @click="append(treeData.parent)">-</span>
			<span class="text">{{treeData.parent ? treeData.parent.name : ''}}</span>
			<pg-tree v-if="treeData.parent.children " :treeData="treeData.parent.children"></pg-tree>
		</div>
		<div class="me">{{treeData.name}}</div>
		<ul class="children">
			<li v-for="child in treeData.children">
				<span class="btn" @click="append(child)" v-if="child.isexpend">+</span>
				<span class="btn" v-else @click="append(child)">-</span>
				<span class="text">{{child.name}}</span>
				<pg-tree :treeData="child.children" v-if="child.children"></pg-tree>
			</li>
		</ul>
	</section>
</template>

<style type="stylesheet/less" lang="less" scoped>
	@import '~src/assets/css/common.less';
	.tree {
		font-size: 18px;
	}
	.parent {
		margin: 20px;
	}
	.me {
		margin: 20px;
	}
	.children {
		margin: 20px;
	}
	.btn {
		display: inline-block;
		font-size: 20px;
		vertical-align: middle;
		cursor: pointer;
	}
	.text {
		vertical-align: middle;
	}
</style>

<script type="text/babel">
	import index from './index'
	export default {
		...index
	}
</script>
<template>
	<!-- 分页 -->
	<div class="pagination-wrape">
		<select class="page-size" v-model="pageSize">
			<option class="size-item" v-for="(size,index) in sizeList" :key="size.value" :value="size.value" :class="[index === activeSize ? 'activeSize' : '']" @click="sizeChange(index)">{{size.title}}</option>
		</select>
		<ul class="page-item">
			<li class="pre item" @click="prePage"><</li>
			<li class="item" v-for="(item,index) in pageCount">{{index+1}}</li>
			<li class="next item" @click="nextPage">></li>
		</ul>
		<span class="total">共{{total}}条</span>
	</div>
</template>

<style type="text/less" lang="less" scoped>
	ul {
		list-style: none;
		margin: 0;
		padding: 0;
	}
	.pagination-wrape {
		font-size: 0;
	}
	.page-size {
		font-size: 14px;
		width: 100px;
		height: 30px;
		line-height: 30px;
		vertical-align: top;
		.size-item {
			padding: 5px 0;
			&:hover {
				background-color: rgba(0, 0, 0, 0.3);
			}
		}
		.activeSize {
			background-color: #409EFF;
		}
	}
	.page-item {
		display: inline-block;
		height: 28px;
		border: 1px solid #ccc;
		vertical-align: top;
		margin-left: 10px;
		font-size: 0;
		.item {
			display: inline-block;
			font-size: 14px;
			width: 30px;
			text-align: center;
			line-height: 28px;
			border-right: 1px solid #ccc;
			color: #878D99;
			&:last-child {
				border: none;
			}
		}
	}
	.total {
		font-size: 14px;
		display: inline-block;
		margin-left: 10px;
		height: 30px;
		line-height: 30px;
		color: #878D99;
	}
</style>

<script type="text/babel">
	import index from './index.js'
	export default {
		...index
	}
</script>
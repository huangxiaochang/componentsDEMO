<template>
	<!-- 分页 -->
	<div class="pagination-wrape">
		<select class="page-size" v-model="pageSize">
			<option class="size-item" v-for="size in sizeList" :key="size.value" :value="size.value" @click="sizeChange(size)">{{size.title}}</option>
		</select>
		<ul class="page-item">
			<button class="pre item" @click="prePage" :disabled="active === 1"><</button>
			<li class="item" :class="[active === 1 ? 'active' : '']" @click="pageChange(1)">1</li>

			<li class="item preDot" v-if="preDot">
				<span class="dot">...</span>
				<span class="pre" @click="preActivePage"><<</span>
			</li>
			<li class="item" v-for="item in activePage" :class="[item === active ? 'active' : '']" @click="pageChange(item)">{{item}}</li>
			<li class="item nextDot" v-if="nextDot">
				<span class="dot">...</span>
				<span class="next" @click="nextActivePage">>></span>
			</li>

			<li class="item" :class="[active === pageCount ? 'active' : '']" @click="pageChange(pageCount)" v-if="pageCount > 6">{{pageCount}}</li>
			<button class="next item" :disabled="active === pageCount" @click="nextPage">></button>
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
		/*将默认的select选择框样式清除*/
		// appearance:none;
		// -moz-appearance:none;
		// -webkit-appearance:none;
		.size-item {
			padding: 5px 0;
			&:hover {
				cursor: pointer;
				background-color: rgba(0, 0, 0, 0.3);
			}
			&:checked {
				background-color: #409EFF;
			}
		}
		
	}
	.page-item {
		display: inline-block;
		height: 28px;
		border: 1px solid #ccc;
		vertical-align: top;
		margin-left: 10px;
		font-size: 0;
		.item, .pre, .next {
			display: inline-block;
			font-size: 14px;
			width: 30px;
			text-align: center;
			height: 28px;
			line-height: 28px;
			border-right: 1px solid #ccc;
			color: #878D99;
			cursor: pointer;
			vertical-align: top;
			position: relative;
			&:last-child {
				border: none;
			}
			.dot, .next, .pre {
				position: absolute;
				display: inline-block;
				width: 100%;
				height: 100%;
				top: 0;
				left: 0;
			}
			.dot {
				z-index: 10;
				background-color: #fff;
			}
			.next, .pre {
				z-index: 5;
				background-color: #fff;
			}
			
		}
		.nextDot:hover .next, .preDot:hover .pre {
			z-index: 20;
		}
		.pre, .next {
			border: none;
			border-right: 1px solid #ccc;
			padding: 0;
			background-color: #fff;
			vertical-align: top;
			outline: none;
			&:disabled {
				cursor: not-allowed;
			}
		}
		.active {
			background-color: #409EFF;
			color: #fff;
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
<template>
	<div>
		<!-- 横向步骤条 -->
		<ul class="horizontal-steps-wrape" v-if="direction === 'horizontal'">
			<li class="horizontal-step" v-for="(step,index) in steps">
				<div class="horizontal-icon-wrape">
					<span class="horizontal-before-line" :class="[index === 0 ? 'no-line' : '',index <= active-1 ? 'active' : '']"></span>
					<span class="horizontal-icon" :class="[index <= active-1 ? 'active' : '',index === active ? 'next-active' : '']">{{index+1}}</span>
					<span class="horizontal-after-line" :class="[index === steps.length-1 ? 'no-line' : '',index <= active-1 ? 'active' : '']"></span>
				</div>
				<div class="content">
					<!-- <span class="title" :class="[index <= active-1 ? 'active' : '',index === active ? 'next-active' : '']">{{step.title ? step.title : '步骤'+(index+1)}}</span> -->
					<span class="title" :class="[index <= active-1 ? 'active' : '',index === active ? 'next-active' : '']" v-if="step.title">{{step.title}}</span>
					<p class="description" :class="[index <= active-1 ? 'active' : '',index === active ? 'next-active' : '']" v-if="step.description">{{step.description}}</p>
				</div>
			</li>
		</ul>
		<!-- 纵向步骤条 -->
		<ul class="vertical-steps-wrape" v-else>
			<li class="vertical-step" v-for="(step,index) in steps">
				<div class="vertical-icon-wrape">
					<span class="vertical-before-line" :class="[index === 0 ? 'no-line' : '',index <= active-1 ? 'active' : '']"></span>
					<span class="vertical-icon" :class="[index <= active-1 ? 'active' : '',index === active ? 'next-active' : '']">{{index+1}}</span>
					<span class="vertical-after-line" :class="[index === steps.length-1 ? 'no-line' : '',index <= active-1 ? 'active' : '']"></span>
				</div>
				<div class="content">
					<span class="title" :class="[index <= active-1 ? 'active' : '',index === active ? 'next-active' : '']">{{step.title}}</span>
					<p class="description" :class="[index <= active-1 ? 'active' : '',index === active ? 'next-active' : '']">{{step.description}}</p>
				</div>
			</li>
		</ul>
	</div>
	
</template>

<style type="stylesheet/less" lang="less" scoped>
	@import '~src/assets/css/common.less';
	.horizontal-steps-wrape {
		font-size: 0;
	}
	.horizontal-step {
		display: inline-block;
		list-style: none;
		font-size: 14px;
		text-align: center;
		vertical-align: top;
	}
	.horizontal-icon-wrape {
		width: 100%;
		height: 36px;
		line-height: 36px;
		font-size: 0;
		position: relative;
		.horizontal-icon {
			display: inline-block;
			position: absolute;
			top: 0;
			left: 50%;
			width: 30px;
			height: 30px;
			margin-left: -15px;
			line-height: 30px;
			border-radius: 50%;
			text-align: center;
			font-size: 14px;
			color: #C0CCDA;
			border: 3px solid #C0CCDA;
			background-color: #fff;
			&.active {
				background-color: #13CE66;
				color: #fff;
				border-color: #13CE66;
			}
			&.next-active {
				background-color: #C0CCDA;
				color: #fff;
			}
		}
		.horizontal-after-line, .horizontal-before-line {
			display: inline-block;
			border-top: 2px solid #C0CCDA;
			width: 50%;
			vertical-align: middle;
			&.active {
				border-color: #13CE66;
			}
		}
		.no-line {
			border-top: none;
		}
	}
	.content {
		margin-top: 5px;
		padding: 0 5px;
		.title, .description {
			font-size: 14px;
			color: #C0CCDA;
			&.active {
				color: #13CE66;
			}
			&.next-active {
				color: #000;
			}
		}
	}
	// 垂直步骤条的样式
	.vertical-step {
		display: table;
		.vertical-icon-wrape {
			display: table-cell;
			position: relative;
			width: 35px;
			height: 100%;
			padding: 0;
			margin: 0;
			.vertical-icon {
				display: block;
				position: absolute;
				top: 50%;
				width: 30px;
				height: 30px;
				margin-top: -15px;
				line-height: 27px;
				border-radius: 50%;
				text-align: center;
				z-index: 20;
				font-size: 14px;
				color: #C0CCDA;
				border: 3px solid #C0CCDA;
				background-color: #fff;
				box-sizing: border-box;
				&.active {
					background-color: #13CE66;
					color: #fff;
					border-color: #13CE66;
				}
				&.next-active {
					background-color: #C0CCDA;
					color: #fff;
				}
			}
			.vertical-after-line, .vertical-before-line {
				position: absolute;
				border-left: 2px solid #C0CCDA;
				height: 50%;
				z-index: 10;
				margin-left: 15px;
				&.active {
					border-color: #13CE66;
				}
			}
			.vertical-before-line {
				top: 0;
			}
			.vertical-after-line {
				top: 50%;
			}
			.no-line {
				border: none;
			}
		}
		.content {
			display: table-cell;
			.title {
				display: block;
				width: 100%;
				margin: 5px 0;
			}
			.description {
				margin: 5px 0;
			}
		}
	}
</style>

<script type="text/babel">
	import index from './index'
	export default {
		...index
	}
</script>
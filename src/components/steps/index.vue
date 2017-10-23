<template>
	<div>
		<!-- 横向步骤条 -->
		<ul class="steps-wrape" v-if="direction === 'horizontal'">
			<li class="step" v-for="(step,index) in steps">
				<div class="icon-wrape">
					<span class="before-line" :class="[index === 0 ? 'no-line' : '',index <= active-1 ? 'active' : '']"></span>
					<span class="icon" :class="[index <= active-1 ? 'active' : '',index === active ? 'next-active' : '']">{{index+1}}</span>
					<span class="after-line" :class="[index === steps.length-1 ? 'no-line' : '',index <= active-1 ? 'active' : '']"></span>
				</div>
				<div class="content">
					<span class="title" :class="[index <= active-1 ? 'active' : '',index === active ? 'next-active' : '']">{{step.title}}</span>
					<p class="description" :class="[index <= active-1 ? 'active' : '',index === active ? 'next-active' : '']">{{step.description}}</p>
				</div>
			</li>
		</ul>
		<!-- 纵向步骤条 -->
		<ul class="steps-wrape" v-if="direction === 'vertical'">
			<li class="step" v-for="(step,index) in steps">
				<div class="icon-wrape">
					<span class="before-line" :class="[index === 0 ? 'no-line' : '',index <= active-1 ? 'active' : '']"></span>
					<span class="icon" :class="[index <= active-1 ? 'active' : '',index === active ? 'next-active' : '']">{{index+1}}</span>
					<span class="after-line" :class="[index === steps.length-1 ? 'no-line' : '',index <= active-1 ? 'active' : '']"></span>
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
	.steps-wrape {
		font-size: 0;
	}
	.step {
		display: inline-block;
		list-style: none;
		font-size: 14px;
		text-align: center;
	}
	.icon-wrape {
		width: 100%;
		height: 36px;
		line-height: 36px;
		font-size: 0;
		position: relative;
		.icon {
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
		.after-line, .before-line {
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
</style>

<script type="text/babel">
	import index from './index'
	export default {
		...index
	}
</script>
<template>
	<div class="tabs-wrape" :style="styles">
		<ul class="basic" v-if="type === 'basic'">
			<li class="tabs" v-for="(tab,index) in tabsList" :class="[index === activeTab ? 'active' : '']" @click="hanlderClick(tab,index)">{{tab.title}}</li>
		</ul>
		<ul class="card" v-if="type === 'card'">
			<li class="tabs" v-for="(tab,index) in tabsList" :class="[index === activeTab ? 'active' : '']" @click="hanlderClick(tab,index)">{{tab.title}}</li>
		</ul>
		<div class="content">
			<slot></slot>
		</div>
	</div>
</template>

<style type="stylesheet/css" lang="less" scoped>
	@import '~src/assets/css/common.less';
	li {
		list-style: none;
	}
	.card, .basic {
		width: 100%;
		height: 40px;
		line-height: 40px;
		font-size: 0;
	}
	.card {
		background-color: rgba(215, 225, 235, 0.5);
		.active {
			color: #20A0FF;
			background-color: #fff;
		}
	}
	.basic {
		border-bottom: 1px solid rgb(215, 225, 235);
		.active {
			color: #20A0FF;
			border-bottom: 2px solid #20A0FF;
		}
	}
	.tabs {
		display: inline-block;
		font-size: 14px;
		padding: 0 10px;
		cursor: pointer;
		color: #8492A6;
		&:hover {
			color: #000;
		}
	}
	.tabs-wrape {
		width: 100%;
		box-sizing: border-box;
		border: 1px solid #ccc;
		padding: 0;
		box-shadow: 2px 3px 5px rgba(215, 225, 235, 0.5),-1px -2px 5px rgba(215, 225, 235, 0.5);
	}
</style>

<script type="text/babel">
	import index from './index.js'
	export default {
		...index
	}
</script>
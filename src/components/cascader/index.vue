<template>
	<div class="content-wrape">
		<div class="slot" @click="showDialog">
			<slot></slot>
		</div>
		<div class="cascader-wrape">
			<!-- <cascader :list="dataList" @getValue="getValue" class="cascader" v-if="show"></cascader> -->
			<div class="cascader" v-if="show">
				<ul class="item-wrape">
					<li class="item" v-for="(item,index) in dataList" @click="showNextLevel(item,index,2)" :class="[index === firstActive ? 'active' : '']">
						<span class="title">{{item.title}}</span>
						<span class="icon" v-if="item.children"></span>
					</li>
				</ul>
				<ul class="item-wrape" v-if="showSecondLevel">
					<li class="item" v-for="(item,index) in secondLevel" @click="showNextLevel(item,index,3)" :class="[index === secondActive ? 'active' : '']">
						<span class="title">{{item.title}}</span>
						<span class="icon" v-if="item.children"></span>
					</li>
				</ul>
				<ul class="item-wrape" v-if="showThirdLevel">
					<li class="item" v-for="(item,index) in thirdLevel" @click="showNextLevel(item,index,4)" :class="[index === thirdActive ? 'active' : '']">
						<span class="title">{{item.title}}</span>
						<span class="icon" v-if="item.children"></span>
					</li>
				</ul>
			</div>
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
			font-size: 0;
		}
	}
	.item-wrape {
		width: 150px;
		height: 250px;
		background-color: #fff;
		border: 1px solid rgb(205, 215, 225);
		display: inline-block;
		vertical-align: top;
		overflow: hidden;
		&:hover {
			overflow-y: scroll;
		}
		.item {
			height: 20px;
			padding: 5px;
			cursor: pointer;

			&:hover {
				background-color: rgba(215, 225, 235, 0.6);
			}
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
		}
	}
	.active {
		background-color: #20A0FF;
	}
	/*滚动条样式*/
        .item-wrape::-webkit-scrollbar {/*滚动条整体样式*/
            width: 4px;     /*高宽分别对应横竖滚动条的尺寸*/
            height: 4px;
        }
        .item-wrape::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
            border-radius: 5px;
            -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
            background: rgba(0,0,0,0.2);
        }
        .item-wrape::-webkit-scrollbar-track {/*滚动条里面轨道*/
            -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0);
            border-radius: 0;
            background: rgba(0,0,0,0);
        }
</style>
<script type="text/babel">
	import index from './index'
	export default {
		...index
	}
</script>
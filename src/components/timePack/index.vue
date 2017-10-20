<template>
	<div class="time-select">
		<div class="time-slot" @click="showTimePack">
			<slot></slot>
		</div>
		<div class="time-wrape">
			<div class="time" v-show="show">
				<div class="selectRegion">
					<span class="first">:</span>
				</div>
				<ul class="hours time-item" @click="scrollToPos($event)">
					<li v-for="(item,index) in 24" :key="index">{{formatTime(index)}}</li>
				</ul>
				<ul class="minutes time-item" @click="scrollToPos($event)">
					<li v-for="(item,index) in 60" :key="index">{{formatTime(index)}}</li>
				</ul>
				<ul class="seconds time-item" @click="scrollToPos($event)">
					<li v-for="(item,index) in 60" :key="index">{{formatTime(index)}}</li>
				</ul>
				
				<div class="btn-group">
					<span @click="close">取消</span><span class="save" @click="save">确定</span>
				</div>
			</div>
		</div>
		
	</div>
</template>

<style type="stylesheet/css" lang="less" scoped>
	@import '~src/assets/css/common.less';
	.time-wrape {
		position: relative;
	}
	.time {
		position: absolute;
		width: 150px;
		height: 200px;
		font-size: 0;
		border: 1px solid #ccc;
		padding-bottom: 30px;
		box-shadow: 3px 4px 4px rgba(205,215,225,0.5);
		z-index: 50;
		.time-item {
			display: inline-block;
			width: 33.3%;
			font-size: 14px;
			height: 100%;
			overflow-y: hidden;
			padding: 90px 0;
			box-sizing: border-box;
			&:hover {
				overflow-y: scroll;
			}
			li {
				display: block;
				text-align: center;
				cursor: pointer;
				height: 20px;
				&:hover {
					background-color: rgba(205,215,225,0.5);
				}
			}
		}
		.selectRegion {
			position: absolute;
			top: 90px;
			width: 100%;
			height: 20px;
			background: rgba(32,160,255,0.6);
			z-index: 10;
			.first {
				position: absolute;
				display: inline-block;
				width: 8px;
				height: 8px;
				left: 30px;
				top: 5px;
				color: red;
				// z-index: 20;
			}
		}
	}
	.btn-group {
		width: 100%;
		height: 30px;
		display: fixed;
		bottom: 0;
		font-size: 14px;
		text-align: right;
		span {
			cursor: pointer;
			display: inline-block;
			height: 30px;
			line-height: 30px;
		}
		.save {
			color: #58B7FF;
			margin: 0 10px;
		}
	}
	/*滚动条样式*/
        .time-item::-webkit-scrollbar {/*滚动条整体样式*/
            width: 4px;     /*高宽分别对应横竖滚动条的尺寸*/
            height: 4px;
        }
        .time-item::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
            border-radius: 5px;
            -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
            background: rgba(0,0,0,0.2);
        }
        .time-item::-webkit-scrollbar-track {/*滚动条里面轨道*/
            -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0);
            border-radius: 0;
            background: rgba(0,0,0,0);
        }
</style>

<script type="text/babel">
	import index from './index.js'
	export default {
		...index
	}
</script>